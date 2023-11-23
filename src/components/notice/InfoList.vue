<script setup>
import NoticeCard from '@/components/notice/NoticeCard.vue'
import { getPolicyList } from '@/components/api/crawlingApi.js'
import { ref, onMounted } from 'vue'
const policyList = ref([])
onMounted(async () => {
  policyList.value = await getPolicyList()
})
</script>

<template>
  <div class="mt-2 newbox">
    <NoticeCard v-for="news in policyList" :key="news.title" :title="news.title" :url="news.url" />
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
