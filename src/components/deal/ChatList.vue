<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
defineProps({
  chatList: Array
})
</script>

<template>
  <div class="chat-list">
    <!-- <b>대화 목록</b> -->
    <div
      v-for="(item, index) in chatList"
      class="comp"
      :class="route.params.id == item.id ? 'selected' : ''"
      :key="index"
      @click="() => router.push(`/deal/chat/${item.id}`)"
    >
      <header class="chat-header">
        <h5>{{ item.name1 }}, {{ item.name2 }}</h5>
        <span>{{ item.lastSend }}</span>
      </header>
      <span>{{ item.lastMsg }}</span>
    </div>
  </div>
</template>

<style scoped>
.chat-list {
  width: 26%;
  height: calc(100vh - 81.24px);
  /* overflow-y: scroll; */
  padding: 1rem 0;
  border-top: 1px solid #ececec;
  background-color: white;
}
.chat-list b {
  display: block;
  padding: 1rem 2rem;
  background-color: #ececec;
}

.chat-list .comp {
  border-bottom: 1px solid #ececec;
  padding: 1rem 2rem;
  cursor: pointer;
}

.chat-list .selected {
  background: #ffd600;
}

.chat-header {
  display: flex;
  justify-content: space-between;
}

.chat-header span {
  color: #9c9c9c;
}
</style>
