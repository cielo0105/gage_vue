<script setup>
import { RouterLink } from 'vue-router'
import LogoIcon from '@/components/icons/LogoIcon.vue'
</script>

<template>
  <header>
    <LogoIcon />
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
}
.login-btn {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 0.5rem;

  color: #6e2add;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
}
</style>
