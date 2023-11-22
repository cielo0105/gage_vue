<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import ChatInput from '@/components/deal/ChatInput.vue'

const route = useRoute()
const content = ref('')
const recvList = ref([])
let ws

onMounted(() => connect())

const sendMessage = () => {
  send()
  content.value = ''
}

const send = () => {
  console.log('Send message:' + content.value)
  if (ws && ws.connected) {
    const msg = {
      userId: localStorage.getItem('user'),
      content: content.value
    }
    ws.send(`/receive/${route.params.id}`, JSON.stringify(msg), {})
  }
}

const connect = () => {
  const serverURL = 'http://localhost:8080/chat'
  let socket = new SockJS(serverURL)
  ws = Stomp.over(socket)
  console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`)

  let headers = { Authorization: localStorage.getItem('jwtToken') }

  let headers2 = { Authorization: '  ' }
  ws.connect(
    headers,
    (frame) => {
      window.connected = true
      console.log('소켓 연결 성공', frame)
      ws.subscribe(`/send/${route.params.id}`, (res) => {
        console.log('구독으로 받은 메시지 입니다.', JSON.parse(res.body).body.data)
        recvList.value.push(JSON.parse(res.body).body.data)
      })
    },
    (error) => {
      console.log('소켓 연결 실패', error)
      window.connected = false
    }
  )
}
</script>

<template>
  <div class="chat-view-box">
    <div class="chat-view">
      <div v-for="(item, index) in recvList" :key="index">{{ item.content }}</div>
    </div>
    <ChatInput @send="sendMessage" v-model="content" />
  </div>
</template>

<style scoped>
.chat-view-box {
  height: calc(100vh - 81.24px);
  width: calc(100% - 50px - 2.6rem - 26%);
}
.chat-view {
  height: 93%;
  width: 100%;
  background-color: #ececec;
}
</style>
