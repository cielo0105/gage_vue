<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="deal-layout">
    <nav class="map-nav">
      <router-link to="/deal/map">
        <div>
          <img src="../assets/HomeIcon.png" alt="map" width="50" height="50" />
          <!-- <p>매물</p> -->
        </div>
      </router-link>
      <router-link to="/deal/regist">
        <div>
          <img src="../assets/registIcon.png" alt="regist" width="50" height="50" />
          <!-- <p>등록</p> -->
        </div>
      </router-link>
      <router-link to="/deal/chat">
        <div>
          <img src="../assets/chatIcon.png" alt="chat" width="50" height="50" />
          <!-- <p>채팅</p> -->
        </div>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.deal-layout {
  display: flex;
}
.map-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  background: #5acc00;
}

.map-nav p {
  color: #363636;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
}

a {
  text-decoration: none;
  margin: 1rem 0;
  border-radius: 15px;
  padding: 0.3rem;
}

.route-active {
  background-color: white;
}
</style>
