<script setup>
import DealInfo from '@/components/deal/DealInfo.vue'

defineProps({
  recvList: Array,
  modelValue: String,
  user: String,
  info: Array
})

const emit = defineEmits(['update:modelValue'])
const handleInput = ($event) => {
  emit('update:modelValue', $event.target.value)
}
</script>

<template>
  <DealInfo :info="info" />
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
    <div class="chat-input-box">
      <input
        type="text"
        @input="handleInput"
        :value="modelValue"
        class="input-box"
        @keyup.enter="$emit('send')"
      />
      <button @click="$emit('send')" class="send-btn"></button>
      <img src="../../assets/send.png" alt="send" class="send-btn" />
    </div>
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

.chat-input-box {
  /* background-color: aqua; */
  display: flex;
  width: 100%;
  height: 7%;
  padding: 0.5rem;
  box-shadow: 0px -10px 10px -4px #c0c0c0;
}

.input-box {
  width: 93%;
  border-radius: 30px;
  margin-right: 1%;
  border: 2px solid #9c9c9c;
  padding: 5px 10px;
}

.send-btn {
  border-radius: 50%;
  border: none;
  background-size: contain;
}
</style>
