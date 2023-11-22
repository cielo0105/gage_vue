<script setup>
import { RouterLink, useRouter } from 'vue-router'
// import LogoIcon from '@/components/icons/LogoIcon.vue'
</script>

<template>
  <nav>
    <router-link to="/notice">뉴스</router-link>
    <router-link to="/policy">청년 창업 정책</router-link>
    <router-link to="/support">지원 정보</router-link>
  </nav>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
}

.logo {
  width: 11rem;
  cursor: pointer;
}

a {
  color: #363636;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 700;
}
.login-btn {
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.6);
  padding: 0.5rem 1rem;
  border-radius: 0.625rem;
  background: #ffd600;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
}
</style>
