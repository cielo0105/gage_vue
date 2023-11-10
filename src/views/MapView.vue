<script setup>
import { onMounted } from 'vue'
import SearchBox from '@/components/map/SearchBox.vue'

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap()
  } else {
    const script = document.createElement('script')
    script.onload = () => window.kakao.maps.load(initMap)
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8980521e66956686ad980618b70271ab'
    document.head.appendChild(script)
  }
})

const initMap = () => {
  let mapContainer = document.getElementById('map') // 지도를 표시할 div
  let mapOption = {
    center: new window.kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  }

  let map = new window.kakao.maps.Map(mapContainer, mapOption)

  window.navigator.geolocation.getCurrentPosition((p) => {
    let lat = p.coords.latitude
    let lng = p.coords.longitude
    if (!lat && !lng) {
      console.log('lat==', lat, ', lng==', lng)
      map.setCenter(new window.kakao.maps.LatLng(lat, lng))
    }
  })
}
</script>

<template>
  <div id="map">
    <SearchBox />
  </div>
</template>

<style scoped>
#map {
  width: 100vw;
  height: calc(100vh - 100px);
}
</style>
