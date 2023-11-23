<script setup>
import NoticeCard from '@/components/notice/NoticeCard.vue'

import { getNewsList } from '@/components/api/crawlingApi.js'
import { ref, onMounted } from 'vue'
const newsList = ref([])
onMounted(async () => {
  newsList.value = await getNewsList()
})
</script>

<template>
  <div class="mt-2 newbox">
    <template v-for="(news, index) in newsList" :key="index">
      <NoticeCard :title="news.title" :url="news.url" />
      <br v-if="index % 4 === 3" />
    </template>
  </div>
</template>
<style scoped>
.newbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 30rem;
}
</style>
