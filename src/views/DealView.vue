<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- <nav class="map-nav">
    <router-link to="/deal/map">지도</router-link>
    <router-link to="/deal/regist">매물 등록</router-link>
    <router-link to="/deal/regist">채팅</router-link>
  </nav> -->
  <router-view></router-view>
</template>
<style scoped>
.map-nav {
  height: 3rem;
  background: #ececec;
}
</style>
