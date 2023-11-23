<script setup>
import { onMounted, ref, watch } from 'vue'
import SearchBox from '@/components/map/SearchBox.vue'
import ReportBox from '@/components/map/ReportBox.vue'
import MapFilterBox from '../components/map/MapFilterBox.vue'
import { getGageCount } from '@/components/api/gageApi.js'
import { getCategory } from '@/components/api/categoryListApi'
import { getDongList, searchDong } from '@/components/api/mapApi.js' // 지도 범위에 있는 동
import { getLocalPeopleRank, getGageRank, getIndicator } from '@/components/api/reportApi.js'

let map, geocoder
let markers = new Map()
let isShow = ref(false)

const reportDong = ref({
  code: '',
  dong: '',
  cnt: 0,
  rank: [],
  top: [],
  gageRank: []
})
// 보고서 확인할 동
const category = ref('') // 검색할 업종 코드
const searchword = ref('') //
const fullCategory = ref([])
const indicator = ref([])
onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap()
  } else {
    const script = document.createElement('script')
    script.onload = () => window.kakao.maps.load(initMap)
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8980521e66956686ad980618b70271ab&libraries=services,clusterer'
    document.head.appendChild(script)
  }
})

const initMap = () => {
  let mapContainer = document.getElementById('map') // 지도를 표시할 div
  let mapOption = {
    center: new window.kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  }

  map = new window.kakao.maps.Map(mapContainer, mapOption)
  geocoder = new window.kakao.maps.services.Geocoder()

  window.navigator.geolocation.getCurrentPosition((p) => {
    let lat = p.coords.latitude
    let lng = p.coords.longitude
    map.setCenter(new window.kakao.maps.LatLng(lat, lng))
    map.setMaxLevel(5) // 지도 축소 제한
  })

  window.kakao.maps.event.addListener(map, 'tilesloaded', () => getAddr(0))
}

watch(searchword, (searchword) => {
  if (searchword) {
    searchDong(searchword).then((result) => {
      map.setCenter(
        new window.kakao.maps.LatLng(parseFloat(result[0].lat), parseFloat(result[0].lng))
      )
    })
  }
})

watch(category, async (newCategory) => {
  console.log('카테고리 변경', newCategory)
  fullCategory.value = await getCategory(newCategory)
  getAddr(1)
})

//현재 중심 위치 동 정보 구하기
const getAddr = (type) => {
  let coord = map.getCenter()

  let mapBottomLat = map.getBounds().getSouthWest().getLat()
  let mapBottomLng = map.getBounds().getSouthWest().getLng()
  let mapTopLat = map.getBounds().getNorthEast().getLat()
  let mapTopLng = map.getBounds().getNorthEast().getLng()
  // console.log(type)
  // console.log(mapBottomLat, mapBottomLng, mapTopLat, mapTopLng)
  if (type === 1) getNewMarker(mapBottomLat, mapBottomLng, mapTopLat, mapTopLng)
  else getDong(mapBottomLat, mapBottomLng, mapTopLat, mapTopLng) // 지도 범위에 있는 동 구하기
  // var sw = new window.kakao.maps.LatLng(36, 127)
  // console.log(mapRange.contain(sw))

  // geocoder.coord2RegionCode(coord.getLng(), coord.getLat(), (e) => {
  //   console.log('e', e)
  //   markers.map((m) => m.setMap(null))
  //   console.log('dong위치=========', e[0].code)
  //   getGage(e[0].code)
  // })
}

const getNewMarker = async (bx, by, tx, ty) => {
  const dongList = await getDongList(bx, by, tx, ty)

  for (let dong of dongList) {
    createMarker(dong)
  }
}
//현재 map 중심 동에 위치한 아파트 정보 list로 가져옴.
const getDong = async (bx, by, tx, ty) => {
  const dongList = await getDongList(bx, by, tx, ty)

  for (let dong of dongList) {
    if (!markers.has(dong.code)) createMarker(dong)
  }
}

const getCount = async (dong, code) => {
  const cnt = await getGageCount(dong, code)
  return cnt
}

//마커 생성
const createMarker = async (data) => {
  let content = document.createElement('div')
  content.className = 'overlaybox'
  const count = await getCount(data.dong, category.value)

  content.onclick = (e) => {
    console.log('선택됨?', category.value)
    if (category.value === '') {
      alert('업종을 선택해주세요')
      return
    }
    // console.log(fullCategory.value)
    let dong = e.target.children[0].value
    let lng = e.target.children[1].value
    let lat = e.target.children[2].value
    let code = data.code
    let cnt = count
    showDetail(lat, lng, dong, code, cnt)
  }

  content.innerHTML = `
    <input type="hidden" name="clickLat" value=${data.dong}>
    <input type="hidden" name="clickLng" value=${data.lng}>
    <input type="hidden" name="clickCode" value=${data.lat}>
    <div class="price">${data.dong}</div>
  <div class="date">${count}</div>`

  // position은 아파트의 좌표를 가지고 맵 위에 위치 객체를 생성
  let position = new window.kakao.maps.LatLng(data.lat, data.lng)

  // 맵 위에 마커를 커스텀 이미지로 변경하기
  let customOverlay = new window.kakao.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: 0.3,
    yAnchor: 0.91
  })

  customOverlay.setMap(map)

  markers.set(data.code, customOverlay)
}

const showDetail = async (lat, lng, dong, code, cnt) => {
  geocoder.coord2Address(lng, lat, async (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      reportDong.value.dong = dong
      reportDong.value.code = code
      reportDong.value.cnt = cnt
      const rank = await getLocalPeopleRank(code)
      const gageRank = await getGageRank(fullCategory.value.indsLclsCd, code)
      const dongIndicator = await getIndicator(code) // 상권변화지표 결과

      indicator.value = dongIndicator

      reportDong.value.gageRank = gageRank
      reportDong.value.rank = rank
      reportDong.value.top = [] // 초기화

      for (let r in rank) {
        reportDong.value.top.push(r)
      }
      isShow.value = true
    }
  })
}
</script>

<template>
  <div id="map">
    <SearchBox v-model="searchword" />
    <ReportBox
      :reportDong="reportDong"
      :category="category"
      :fullCategory="fullCategory"
      :indicator="indicator"
      v-show="isShow"
      @close-box="isShow = false"
    />
    <MapFilterBox v-model:category="category" />
  </div>
</template>

<style scoped>
#map {
  width: 100vw;
  height: calc(100vh - 81.66px);
}
</style>
