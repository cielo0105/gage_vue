<script setup>
import NewsCard from '@/components/news/NewsCard.vue'
</script>

<template>
  <div class="container">
    <section class="title">
      <img src="../assets/newsIcon.png" alt="news" />
      <strong>뉴스</strong>
    </section>
    <section class="sub-title">새로운 부동산 소식을 한 눈에 확인해보세요.</section>

    <section class="body">
      <NewsCard></NewsCard>
    </section>
  </div>
</template>

<style scoped>
strong {
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  padding-bottom: 0.7rem;
  margin-left: 1rem;
}
.title {
  display: flex;
  align-items: center;
}
.sub-title {
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}
</style>
