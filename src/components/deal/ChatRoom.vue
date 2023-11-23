<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import ChatInput from '@/components/deal/ChatInput.vue'
import DealInfo from '@/components/deal/DealInfo.vue'
import { getMessages } from '@/components/api/chatApi.js'

const route = useRoute()
const content = ref('')
const recvList = ref([])
const user = localStorage.getItem('user')
let ws

watch(
  () => route.params.id,
  (to, from) => {
    recvList.value = []
    ws.disconnect()
    connect()
    receiveMessages(route.params.id)
  }
)

onMounted(() => {
  connect()
  receiveMessages(route.params.id)
})

const receiveMessages = (id) => {
  getMessages(
    id,
    ({ data }) => {
      console.log('gg')
      recvList.value = data.data
    },
    (err) => console.log(err)
  )
}

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
  <DealInfo />
  <div class="chat-view-box">
    <div class="chat-view">
      <div
        v-for="(item, index) in recvList"
        :key="index"
        class="msg"
        :class="item.user === user ? 'right-user' : 'left-user'"
      >
        <div
          v-if="index === 0 || recvList[index - 1].user !== recvList[index].user"
          class="msg-name"
        >
          {{ item.name }}
        </div>
        <div class="msg-bottom" :class="item.user === user ? 'right-user-msg' : 'left-user-msg'">
          <div
            class="msg-box"
            :class="item.user === user ? 'right-user-msg-box' : 'left-user-msg-box'"
          >
            {{ item.content }}
          </div>
          <span class="msg-date"
            >{{ ('00' + new Date(item.createDate).getHours()).slice(-2) }}:{{
              ('00' + new Date(item.createDate).getMinutes()).slice(-2)
            }}</span
          >
        </div>
      </div>
    </div>
    <ChatInput @send="sendMessage" v-model="content" />
  </div>
</template>

<style scoped>
.chat-view-box {
  height: calc(100vh - 81.24px);
  width: calc(100% - 50px - 2.6rem - 26%);
  background-color: #ececec;
}
.chat-view {
  height: 93%;
  width: 100%;
  padding: 2rem;
  overflow-y: scroll;
}
.msg {
  display: flex;
  flex-direction: column;
}
.right-user {
  align-items: flex-end;
}

.right-user-msg {
  flex-direction: row-reverse;
}
.msg-name {
  font-weight: 500;
}

.msg-bottom {
  display: flex;
  align-items: flex-end;
}

.msg-box {
  width: fit-content;
  max-width: 100%;
  border-radius: 20px;
  background-color: #363636;
  color: white;
  margin: 0.4rem 0;
  padding: 0.5rem 1rem;
}

.right-user-msg-box {
  background-color: #5acc00;
}

.left-user-msg-box {
  color: black;
  background-color: #ffd600;
}

.msg-date {
  padding: 0.5rem 0.3rem;
  color: #9c9c9c;
}
</style>
