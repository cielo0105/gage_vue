<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import VAddress from '@/components/map/VAddress.vue'
import { changeMoney } from '@/util/changeMoney.js'
import { createChat } from '@/components/api/chatApi'
const router = useRouter()
const prop = defineProps({
  info: Object,
  isMap: Boolean
})

const dealType = computed(() => {
  if (prop.info) {
    if (prop.info?.type === 'sale') return `매매 ${changeMoney(prop.info?.amount1)}`
    else if (prop.info?.type === 'lease') return `전세 ${changeMoney(prop.info?.amount1)}`
    else return `월세 ${changeMoney(prop.info?.amount1)}/${prop.info?.amount2}`
  } else {
    return ''
  }
})

const handleChat = () => {
  const requestData = {
    user: localStorage.getItem('user'),
    deal: prop.info.id
  }

  createChat(
    requestData,
    ({ data }) => {
      console.log(data.data)

      router.push({ path: `/deal/chat/${data.data}` })
    },
    (err) => {
      console.log(err)
      alert('서버와의 연결이 원활하지 않습니다.\n 잠시후 다시 시도해주세요.')
    }
  )
}
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.25) inset;
      border: 1px solid #ececec;
    "
  >
    <div class="dealinfo-box" :class="{ 'dealinfo-box-height': !isMap }">
      <header class="header">
        <strong class="title">{{ dealType }}</strong>
        <button class="close-btn" @click="$emit('close-box')" v-show="isMap">✕</button>
      </header>
      <VAddress
        title="주소"
        :address="`${info?.address} ${info?.addressDetail}`"
        style="padding: 0 2rem"
      />
      <hr />
      <div class="content">
        <b>전용 면적</b>
        <span>{{ info?.area }} ㎡ </span>
        <br />
        <b>층수</b>
        <span>{{ info?.floor }}층 / {{ info?.floorAll }}층 </span>
        <br />
        <b>추천업종</b>
        <span>{{ info?.recommend }} </span>
        <br />
        <b>상세 설명</b>
        <p>{{ info?.desc }}</p>
      </div>
    </div>
    <div class="footer" v-show="isMap">
      <button class="chat-btn" @click="handleChat">채팅하기</button>
    </div>
  </div>
</template>

<style scoped>
.dealinfo-box {
  width: 30rem;
  height: 90%;
  background-color: white;
}

.dealinfo-box-height {
  height: 100%;
}
.dealinfo-box .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
  padding: 2rem 2rem 0 2rem;
}
.close-btn {
  font-size: 1.3rem;
  background: none;
  border: none;
  outline: none;
}
.title {
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;
}
.content {
  padding: 0 2rem;
}
.info-img {
  width: 100%;
}

b {
  display: inline-block;
  width: 40%;
  margin-bottom: 0.7rem;
}

.footer {
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top: 1px solid #ececec;
}

.chat-btn {
  width: 10.3125rem;
  height: 2.525rem;
  border: none;
  border-radius: 0.625rem;
  background: #ffd600;
  color: #000;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
}
</style>
