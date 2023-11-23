<script setup>
import ChatList from '@/components/deal/ChatList.vue'
import ChatRoom from './ChatRoom.vue'

import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import { getMessages } from '@/components/api/chatApi.js'
import { getList } from '@/components/api/chatApi.js'
import { getDeal } from '@/components/api/dealApi.js'

const route = useRoute()
const content = ref('')
const recvList = ref([])
const chatList = ref([])
const user = localStorage.getItem('user')
const info = ref([])
let ws

watch(
  () => route.params.id,
  () => {
    recvList.value = []
    ws.disconnect()
    connect()
    receiveMessages(route.params.id)
    receiveDealInfo(route.params.id)
  }
)

onMounted(() => {
  connect()
  receiveChatList()
  receiveMessages(route.params.id)
  receiveDealInfo(route.params.id)
})

const receiveMessages = (id) => {
  getMessages(
    id,
    ({ data }) => {
      console.log(data.data)
      recvList.value = data.data
    },
    (err) => console.log(err)
  )
}

const receiveChatList = () => {
  chatList.value = []
  const user = {
    userId: localStorage.getItem('user')
  }

  getList(
    user,
    ({ data }) => {
      console.log(data.data)
      chatList.value = data.data
    },
    (err) => console.log(err)
  )
}

const receiveDealInfo = (id) => {
  getDeal(
    id,
    ({ data }) => {
      console.log('deal watch===========', data.data)
      info.value = data.data
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
        receiveChatList()
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
  <ChatList :chat-list="chatList" />
  <ChatRoom
    v-if="route.params.id && route.params.id !== '0'"
    v-model="content"
    @send="sendMessage"
    :user="user"
    :recv-list="recvList"
    :info="info"
  />
</template>

<style scoped></style>
