<script setup>
import ImageCard from '@/components/notice/ImageCard.vue'
import { getSupportList } from '@/components/api/crawlingApi.js'
import { ref, onMounted } from 'vue'
const supportList = ref([])
onMounted(async () => {
  supportList.value = await getSupportList()
})
</script>

<template>
  <div class="mt-2 newbox">
    <ImageCard
      v-for="news in supportList"
      :key="news.title"
      :title="news.title"
      :url="news.url"
      :img="news.img"
    />
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
