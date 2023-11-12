<script setup>
import { RouterLink, useRouter } from 'vue-router'
import LogoIcon from '@/components/icons/LogoIcon.vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <header>
    <LogoIcon @click="goHome()" class="logo" />
    <nav>
      <router-link to="/map">지도</router-link>
      <router-link to="/report">분석</router-link>
      <router-link to="/notice">공지사항</router-link>
      <router-link to="/login" class="login-btn">로그인 / 회원가입</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
}

.logo {
  cursor: pointer;
}

a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
}
.login-btn {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 0.5rem 1rem;

  color: #6e2add;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
}
</style>
