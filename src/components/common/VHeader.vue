<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
// import LogoIcon from '@/components/icons/LogoIcon.vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const isAuth = computed(() => localStorage.getItem('jwtToken') !== null)

const handleLogout = () => {
  localStorage.removeItem('jwtToken')
  location.reload()
}
</script>

<template>
  <header>
    <!-- <LogoIcon @click="goHome()" class="logo" /> -->
    <img src="../../assets/Group 135.png" alt="logo" @click="goHome()" class="logo" />
    <nav>
      <router-link to="/map">지도</router-link>
      <router-link to="/deal">거래</router-link>
      <router-link to="/notice">공지사항</router-link>
      <template v-if="isAuth">
        <a class="login-btn" @click="handleLogout">로그아웃</a>
      </template>
      <router-link to="/login" class="login-btn" v-else="isAuth">로그인 / 회원가입</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.2rem;
  background: #fff;
  /* box-shadow: 0px 5px 3px 0px #ececec; */
}
.logo {
  width: 8rem;
  cursor: pointer;
}
a {
  color: #363636;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
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
  cursor: pointer;
}
</style>
