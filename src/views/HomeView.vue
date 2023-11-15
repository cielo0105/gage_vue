<script setup>
import { RouterLink } from 'vue-router'
import VFooter from '@/components/common/VFooter.vue'
</script>

<template>
  <section class="home">
    <div class="home-img"></div>
    <div class="title">
      <div class="left">
        <h1>당신이 찾던</h1>
        <div class="word">
          <div><div>역세권</div></div>
          <div><div>넓은</div></div>
          <div><div>혼자 살</div></div>
          <div><div>같이 살</div></div>
          <div><div>학교 근처</div></div>
          <div><div>직장 근처</div></div>
        </div>
      </div>
      <strong>.zip</strong>
    </div>
  </section>
  <section class="sub-title">
    <span>국토교통부에서 제공된 데이터를 기반으로</span>
    <span>주택 실거래가 정보를 확인해보세요!</span>
    <router-link class="start-btn" to="/map">시작하기</router-link>
  </section>
  <div class="info1">
    <img src="../assets/info1.png" alt="info1" />
  </div>
  <div class="info2">
    <img src="../assets/info2.png" alt="info2" />
  </div>
  <div class="info3">
    <img src="../assets/info3.png" alt="info3" />
  </div>
  <VFooter />
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
  height: 6rem;
  overflow: hidden;
  color: #353535;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  border-bottom: 4px solid #353535;
}

.word > div > div {
  padding: 0.1rem 2rem;
  height: 6rem;
  display: inline-block;
}

.word div:first-child {
  animation: show 12s linear infinite;
  /* margin-top: -24rem; */
}

@keyframes show {
  0% {
    margin-top: -30rem;
  }
  5% {
    margin-top: -30rem;
  }
  /* 1 */
  16.6% {
    margin-top: -30rem;
  }
  24.9% {
    margin-top: -24rem;
  }
  /* 2 */
  33.2% {
    margin-top: -24rem;
  }
  41.5% {
    margin-top: -18rem;
  }
  /* 3 */
  49.8% {
    margin-top: -18rem;
  }
  58.1% {
    margin-top: -12rem;
  }
  /* 4 */
  66.4% {
    margin-top: -12rem;
  }
  74.7% {
    margin-top: -6rem;
  }
  /* 5 */
  83% {
    margin-top: -6rem;
  }
  91.33% {
    margin-top: 0rem;
  }
  /* 6 */
  99.66% {
    margin-top: 0rem;
  }
  99.99% {
    margin-top: 0rem;
  }
  100% {
    margin-top: -30rem;
  }
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
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding: 1rem 0;
}

.info2 {
  text-align: center;
}

.info3 {
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 13rem;
}
</style>
