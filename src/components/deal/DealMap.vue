<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import DealInfo from '@/components/deal/DealInfo.vue'

const router = useRouter()

let map

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
    level: 6 // 지도의 확대 레벨
  }

  map = new window.kakao.maps.Map(mapContainer, mapOption)

  window.navigator.geolocation.getCurrentPosition((p) => {
    let lat = p.coords.latitude
    let lng = p.coords.longitude
    map.setCenter(new window.kakao.maps.LatLng(lat, lng))
  })
}
</script>

<template>
  <div id="map">
    <button class="regist-btn" @click="() => router.push({ name: 'deal-regist' })">매물등록</button>
    <deal-info></deal-info>
  </div>
</template>

<style scoped>
#map {
  width: 100vw;
  height: calc(100vh - 100.28px);
}

.regist-btn {
  border-radius: 50%;
  width: 5.4375rem;
  height: 5.4375rem;

  position: absolute;
  z-index: 3;
  top: 1rem;
  right: 1rem;

  background: #5acc00;
  border: none;
  outline: none;

  color: #000;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 500;
}
</style>
