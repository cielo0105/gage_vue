<script setup></script>

<template>
  <div class="chat-list">
    <!-- <b>대화 목록</b> -->
    <div class="comp" v-for="n in 10" :key="n" :id="n">
      <header class="chat-header">
        <h5>최지우</h5>
        <span>11:23</span>
      </header>
      <span>아직 거래되지 않았습니다. 매물 궁금하시면 010-0123-1234로 연락 남겨주세요.</span>
    </div>
  </div>
</template>

<style scoped>
.chat-list {
  width: 26%;
  height: calc(100vh - 81.24px);
  overflow-y: scroll;
}
.chat-list b {
  display: block;
  padding: 1rem 2rem;
  background-color: #ececec;
}

.chat-list .comp {
  border-bottom: 1px solid #ececec;
  padding: 1rem 2rem;
}

.chat-header {
  display: flex;
  justify-content: space-between;
}

.chat-header span {
  color: #9c9c9c;
}
</style>
