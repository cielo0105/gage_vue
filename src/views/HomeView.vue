<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="home">
    <div class="home-img"></div>
    <div class="title">
      <div class="left">
        <h1>당신이 찾던</h1>
        <div class="word">역세권</div>
      </div>
      <strong>.zip</strong>
    </div>
  </section>
  <section class="sub-title">
    <span>국토교통부에서 제공된 데이터를 기반으로</span>
    <span>주택 실거래가 정보를 확인해보세요!</span>
    <router-link class="start-btn" to="/map">시작하기</router-link>
  </section>
  <div class="info1"></div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.home-img {
  width: 188px;
  height: 208px;
  background-image: url('../assets/HomeIcon.png');
}

.title {
  display: flex;
  align-items: flex-end;
}

h1 {
  color: #353535;
  text-align: center;
  font-size: 3.75rem;
  font-weight: 100;
  margin: 0rem;
}

.left {
  display: flex;
  flex-direction: column;
}

.word {
  width: 25rem;
  height: 100%;
  color: #353535;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  border-bottom: 4px solid #353535;
}

strong {
  color: #353535;
  font-size: 5rem;
  font-weight: 900;
}

.sub-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 3rem 0 1.5rem 0;
}

span {
  color: #fff;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 300;
}

.start-btn {
  color: #6e2add;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;

  border-radius: 0.625rem;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 0.8rem 3rem;
  margin-top: 1.3rem;
  margin-bottom: 6rem;
}

.info1 {
  width: 100%;
  height: 498px;
  background: rgba(255, 255, 255, 0.6);
}
</style>
