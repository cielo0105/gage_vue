<script setup>
import { ref, onMounted } from 'vue'
import { VueDaumPostcode } from 'vue-daum-postcode'
import DealInput from '@/components/deal/DealInput.vue'
import DealInputGroup from '@/components/deal/DealInputGroup.vue'
import { registDeal, setImg } from '@/components/api/dealApi'

let geocoder

const btns = [
  { name: '매매', code: 'sale' },
  { name: '전세', code: 'lease' },
  { name: '월세', code: 'monthly' }
]

const postOpen = ref(false)

const dealInfo = ref({
  type: 'sale',
  amount1: null,
  amount2: null,
  address: null,
  addressDetail: null,
  area: null,
  recommend: null,
  floor: null,
  floorAll: null,
  fileName: null,
  img: null,
  desc: null,
  lat: null,
  lon: null
})

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
  geocoder = new window.kakao.maps.services.Geocoder()
}

const onComplete = (newResult) => {
  dealInfo.value.address = newResult.address
  postOpen.value = false
  geocoder.addressSearch(newResult.address, (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      console.log(result)
      dealInfo.value.lat = result[0].y
      dealInfo.value.lon = result[0].x
    }
  })
}

const setGageImg = (e) => {
  dealInfo.value.fileName = e.target.value
  let img = new FormData()
  let file = e.target.files[0]
  img.append('gage-img', file)

  setImg(
    img,
    ({ data }) => {
      console.log('성공', data.data)
      dealInfo.value.img = data.data
    },
    (err) => {
      console.log(err)
    }
  )
}

const handleRegist = () => {
  registDeal(
    dealInfo.value,
    ({ data }) => {
      console.log(data.data)
    },
    (err) => {
      console.log(err)
    }
  )
}
</script>

<template>
  <div class="post-box" v-if="postOpen" @click="() => (postOpen = false)">
    <div class="post-container" @click.stop="">
      <VueDaumPostcode @complete="onComplete" class="postcode" />
    </div>
  </div>
  <div class="big-container">
    <div class="container">
      <h3 class="title">매물 등록</h3>
      <deal-input-group
        label="매매 종류"
        :btns="btns"
        :selected="dealInfo.type"
        @selectType="(e) => (dealInfo.type = e)"
      />
      <deal-input
        v-if="dealInfo.type === 'sale'"
        v-model="dealInfo.amount1"
        label="매매가"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="매매가를 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <deal-input
        v-if="dealInfo.type === 'lease'"
        v-model="dealInfo.amount1"
        label="보증금"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="보증금을 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <div style="margin-bottom: 3rem" v-if="dealInfo.type === 'monthly'">
        <deal-input
          v-model="dealInfo.amount1"
          label="보증금"
          width="11.5rem"
          height="2.5rem"
          type="text"
          placeholder="보증금"
          style="margin-right: 1rem"
        />
        <deal-input
          v-model="dealInfo.amount2"
          label="월세"
          width="11.5rem"
          height="2.5rem"
          type="text"
          placeholder="월세"
        />
      </div>
      <div style="margin-bottom: 0.5rem">
        <deal-input
          v-model="dealInfo.address"
          label="주소"
          width="25rem"
          height="2.5rem"
          type="text"
          placeholder="주소를 입력해주세요"
          style="margin-right: 1rem"
          readonly
          @click="() => (postOpen = true)"
        />
        <button
          style="width: 4rem; height: 2.5rem; border-radius: 1rem; background: white"
          @click="() => (postOpen = true)"
        >
          찾기
        </button>
      </div>
      <deal-input
        v-model="dealInfo.addressDetail"
        label=""
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="상세 주소를 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <deal-input
        v-model="dealInfo.area"
        label="전용 면적"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="전용 면적을 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <deal-input
        v-model="dealInfo.recommend"
        label="추천 업종"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="추천 업종을 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <div style="margin-bottom: 3rem">
        <deal-input
          v-model="dealInfo.floor"
          label="층수"
          width="11.5rem"
          height="2.5rem"
          type="text"
          placeholder="층수"
          style="margin-right: 1rem"
        />
        <deal-input
          v-model="dealInfo.floorAll"
          label="총 층수"
          width="11.5rem"
          height="2.5rem"
          type="text"
          placeholder="총 층수"
        />
      </div>
      <div class="input-img">
        <label class="text">사진</label>
        <div class="filebox">
          <input class="upload-name" placeholder="첨부파일" :value="dealInfo.fileName" />
          <label for="file">첨부</label>
          <input type="file" id="file" @change="setGageImg" accept="image/*" />
        </div>
      </div>
      <div style="display: flex; margin-bottom: 3rem">
        <label class="text">설명</label>
        <textarea
          class="text-area"
          @input="handleInput"
          placeholder="매물을 소개해주세요."
          v-model="dealInfo.desc"
        ></textarea>
      </div>
      <button class="regist-btn" @click="handleRegist">등록</button>
    </div>
  </div>
</template>
<style scoped>
.big-container {
  display: flex;
  justify-content: center;
}
.container {
  border-radius: 0.9375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 1rem 6rem;
  margin: 0 0 4rem 0;
}
.title {
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4rem;
}
.post-box {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.post-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
.postcode {
  overflow-y: scroll;
  max-height: 80vh;
}
.input-img {
  display: flex;
  margin-bottom: 3rem;
}
.filebox {
  display: flex;
}
.filebox .upload-name {
  width: 25rem;
  color: #999999;
  border-radius: 0.9375rem;
  border: 2px solid #9c9c9c;
  padding: 1rem;
  height: 2.5rem;
  margin-right: 1rem;
}
.filebox label {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 4rem;
  height: 2.5rem;
  border-radius: 1rem;
  border: 2px solid black;
}
.filebox input[type='file'] {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
}
.text {
  width: 6rem;
  font-size: 1.25rem;
  font-weight: 700;
}
.text-area {
  border-radius: 0.9375rem;
  border: 2px solid #9c9c9c;
  padding: 1rem;
  width: 30rem;
}
.regist-btn {
  width: 10.3125rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  background: #ffd600;
  border: none;

  color: #000;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
