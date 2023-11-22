<script setup>
import NoticeCard from '../components/notice/NoticeCard.vue'
import { getPolicyList } from '@/components/api/crawlingApi.js'
import { ref, onMounted } from 'vue'
import InfoHeader from '@/components/notice/InfoHeader.vue'
const policyList = ref([])
onMounted(async () => {
  policyList.value = await getPolicyList()
})
</script>

<template>
  <InfoHeader />
  <div class="container mt-3">
    <NoticeCard v-for="news in policyList" :key="news.title" :title="news.title" :url="news.url" />
  </div>
</template>
<style scoped></style>
