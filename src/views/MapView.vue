<script setup>
import { onMounted, ref } from 'vue'
import SearchBox from '@/components/map/SearchBox.vue'
import ReportBox from '@/components/map/ReportBox.vue'
import MapFilterBox from '../components/map/MapFilterBox.vue'
import { getGageList } from '@/components/api/gageApi.js'
import { changeMoney } from '@/util/changeMoney.js'

let map, geocoder
let markers = []
let isShow = ref(false)

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap()
  } else {
    const script = document.createElement('script')
    script.onload = () => window.kakao.maps.load(initMap)
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8980521e66956686ad980618b70271ab&libraries=services'
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
  })

  window.kakao.maps.event.addListener(map, 'tilesloaded', () => getAddr())
}

//현재 중심 위치 동 정보 구하기
const getAddr = () => {
  let coord = map.getCenter()
  geocoder.coord2RegionCode(coord.getLng(), coord.getLat(), (e) => {
    markers.map((m) => m.setMap(null))
    // getApt(e[0].code)
    console.log('dong위치=========', e[0].code)
    getGage(e[0].code)
  })
}

//현재 map 중심 동에 위치한 아파트 정보 list로 가져옴.
const getGage = async (code) => {
  const gageList = await getGageList(code)
  console.log('gagelist: ', gageList)
  for (let gage of gageList) {
    createMarker(gage)
  }
}

// 클러스터 생성
// const clusterer = new window.kakao.maps.MarkerClusterer({
//   map: map,
//   averageCenter: true,
//   minLevel: 10
// })

//마커 생성
const createMarker = (data) => {
  let content = document.createElement('div')
  // console.log(data)
  content.className = 'overlaybox'
  content.onclick = (e) => {
    let lat = e.target.children[0].value
    let lng = e.target.children[1].value
    let code = e.target.children[2].value
    showDetail(lat, lng, code)
  }

  content.innerHTML = `
	  <input type="hidden" name="clickLat" value=${data.lat}>
	  <input type="hidden" name="clickLng" value=${data.lng}>
	  <input type="hidden" name="clickCode" value=${data.aptCode}>
	  <div class="price">${changeMoney(data.dealAmount)}</div>
	  <div class="date">${data.buildYear}</div>`

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
}

const showDetail = (lat, lon, code) => {
  geocoder.coord2Address(lon, lat, async (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      console.log('road_address', result[0].road_address)
      let road_address = result[0].road_address.address_name
      let address = result[0].address.address_name

      // const apt = await getAptDealInfo(code)
      // aptInfo.value = { ...apt, road_address: road_address, address: address }
      isShow.value = true
    }
  })
}
</script>

<template>
  <div id="map">
    <SearchBox />
    <!-- <ReportBox :apt="aptInfo" @close-box="isShow = false" /> -->
    <!-- <AptInfoBox :apt="aptInfo" v-show="isShow" @close-box="isShow = false" /> -->
    <MapFilterBox />
  </div>
</template>

<style scoped>
#map {
  width: 100vw;
  height: calc(100vh - 100px);
}
</style>
