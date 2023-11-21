<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import DealInfo from '@/components/deal/DealInfo.vue'
import { getList } from '@/components/api/dealApi.js'
import { changeMoney, changeType } from '@/util/changeMoney.js'

const router = useRouter()

let map

const dupCheck = new Set()
const isShow = ref(false)
const dealInfo = ref(null)

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

  window.kakao.maps.event.addListener(map, 'bounds_changed', function () {
    const cords = map.getBounds()
    const requestData = {
      ha: cords.ha,
      qa: cords.qa,
      oa: cords.oa,
      pa: cords.pa
    }
    getList(
      requestData,
      ({ data }) => {
        data.data.list.map((item) => {
          if (!dupCheck.has(JSON.stringify({ lat: item.lat, lon: item.lon }))) {
            dupCheck.add(JSON.stringify({ lat: item.lat, lon: item.lon }))
            createMarker(item)
          }
        })
      },
      (err) => console.log(err)
    )
  })
}

//마커 생성
const createMarker = (data) => {
  let content = document.createElement('div')
  content.className = 'overlaybox-deal'
  content.onclick = () => {
    dealInfo.value = data
    isShow.value = true
    map.setCenter(new window.kakao.maps.LatLng(data.lat, data.lon))
    map.setLevel(1)
  }

  content.innerHTML = `
	  <input type="hidden" name="clickLat" value=${data.lat}>
	  <input type="hidden" name="clickLng" value=${data.lon}>
    <div class="type">${changeType(data.type)}</div>
	  <div class="price">${data.amount1}</div>
    `

  let position = new window.kakao.maps.LatLng(data.lat, data.lon)

  let customOverlay = new window.kakao.maps.CustomOverlay({
    position: position,
    content: content
  })

  customOverlay.setMap(map)
}
</script>

<template>
  <deal-info :info="dealInfo" v-if="isShow" @close-box="() => (isShow = false)"></deal-info>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: calc(100vh - 81.66px);
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
