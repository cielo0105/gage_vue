<script setup>
import NoticeCard from '../components/notice/NoticeCard.vue'

import { getNewsList } from '@/components/api/crawlingApi.js'
import { ref, onMounted } from 'vue'
import InfoHeader from '@/components/notice/InfoHeader.vue'
const newsList = ref([])
onMounted(async () => {
  newsList.value = await getNewsList()
})
</script>

<template>
  <InfoHeader />
  <RouterView />
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only"></span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
