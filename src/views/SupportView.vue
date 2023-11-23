<script setup>
import NoticeCard from '../components/notice/NoticeCard.vue'
import ImageCard from '../components/notice/ImageCard.vue'
import { getSupportList } from '@/components/api/crawlingApi.js'
import { ref, onMounted } from 'vue'
import InfoHeader from '@/components/notice/InfoHeader.vue'
const supportList = ref([])
onMounted(async () => {
  supportList.value = await getSupportList()
})
</script>

<template>
  <InfoHeader />
  <div class="container mt-3">
    <ImageCard
      v-for="news in supportList"
      :key="news.title"
      :title="news.title"
      :url="news.url"
      :img="news.img"
    />
  </div>
</template>
<style scoped></style>
