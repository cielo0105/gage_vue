<script setup>
import { onMounted, ref } from 'vue'
import SearchBox from '@/components/map/SearchBox.vue'
import ReportBox from '@/components/map/ReportBox.vue'
import MapFilterBox from '../components/map/MapFilterBox.vue'
import { changeMoney } from '@/util/changeMoney.js'
import { getGageList, getGageCount, getGageCountByCode } from '@/components/api/gageApi.js'
import { getDongList } from '@/components/api/mapApi.js' // 지도 범위에 있는 동
let map, geocoder
let markers = []
let isShow = ref(false)

const dongSet = new Set()
const reportDong = ref('') // 보고서 확인할 동

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
    map.setMaxLevel(4) // 지도 축소 제한
  })

  window.kakao.maps.event.addListener(map, 'tilesloaded', () => getAddr())
}

//현재 중심 위치 동 정보 구하기
const getAddr = () => {
  let coord = map.getCenter()

  let mapBottomLat = map.getBounds().getSouthWest().getLat()
  let mapBottomLng = map.getBounds().getSouthWest().getLng()
  let mapTopLat = map.getBounds().getNorthEast().getLat()
  let mapTopLng = map.getBounds().getNorthEast().getLng()

  console.log(mapBottomLat, mapBottomLng, mapTopLat, mapTopLng)

  getDong(mapBottomLat, mapBottomLng, mapTopLat, mapTopLng) // 지도 범위에 있는 동 구하기
  // var sw = new window.kakao.maps.LatLng(36, 127)
  // console.log(mapRange.contain(sw))

  // geocoder.coord2RegionCode(coord.getLng(), coord.getLat(), (e) => {
  //   console.log('e', e)
  //   markers.map((m) => m.setMap(null))
  //   console.log('dong위치=========', e[0].code)
  //   getGage(e[0].code)
  // })
}

//현재 map 중심 동에 위치한 아파트 정보 list로 가져옴.
const getDong = async (bx, by, tx, ty) => {
  const dongList = await getDongList(bx, by, tx, ty)

  for (let dong of dongList) {
    if (!dongSet.has(dong)) {
      dongSet.add(dong)

      createMarker(dong)
    }
  }
}

const getCount = async (dong) => {
  const cnt = await getGageCount(dong)
  return cnt
}

//마커 생성
const createMarker = async (data) => {
  let content = document.createElement('div')
  content.className = 'overlaybox'
  let cnt = await getCount(data.dong)

  content.onclick = (e) => {
    let dong = e.target.children[0].value
    let lng = e.target.children[1].value
    let lat = e.target.children[2].value
    showDetail(lat, lng, dong)
  }

  content.innerHTML = `
    <input type="hidden" name="clickLat" value=${data.dong}>
    <input type="hidden" name="clickLng" value=${data.lng}>
    <input type="hidden" name="clickCode" value=${data.lat}>
    <div class="price">${data.dong}</div>
  <div class="date">${cnt}</div>`

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
  markers.push(customOverlay)
  let marker = new window.kakao.maps.Marker({
    position: position
  })
  markers.push(marker)
}

const showDetail = (lat, lng, dong) => {
  geocoder.coord2Address(lng, lat, async (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      console.log('result', result)
      reportDong.value = dong
      // let road_address = result[0].road_address.address_name
      // let address = result[0].address.address_name

      // const apt = await getAptDealInfo(code)
      // aptInfo.value = { ...apt, road_address: road_address, address: address }
      isShow.value = true
    }
  })
}
</script>

<template>
  <div id="map">
    <SearchBox v-model="category" />
    <!-- <ReportBox :apt="aptInfo" @close-box="isShow = false" /> -->
    <ReportBox :dong="reportDong" v-show="isShow" @close-box="isShow = false" />
    <MapFilterBox />
  </div>
</template>

<style scoped>
#map {
  width: 100vw;
  height: calc(100vh - 100px);
}
</style>
