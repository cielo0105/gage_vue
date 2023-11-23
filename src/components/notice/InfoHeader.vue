<script setup>
import { RouterLink, useRouter } from 'vue-router'
// import LogoIcon from '@/components/icons/LogoIcon.vue'
</script>

<template>
  <!-- <nav>
    <router-link to="/notice/news">뉴스</router-link>
    <router-link to="/notice/info">청년 창업 정책</router-link>
    <router-link to="/notice/support">지원 정보</router-link>
  </nav> -->

  <ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link to="/notice/news">뉴스</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/notice/info">청년 창업 정책</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/notice/support">지원 정보</router-link>
    </li>
  </ul>
</template>

<style scoped>
a {
  color: #363636;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 700;
}
a.route-active {
  color: #5acc00;
}
</style>
