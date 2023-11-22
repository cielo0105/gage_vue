<script setup>
defineProps({
  title: String,
  btnName: String
})
</script>

<template>
  <div class="big-container">
    <div class="container">
      <h3 class="title">{{ title }}</h3>
      <div class="msg">
        <slot name="sub">
          <!-- sub title message가 위치합니다. -->
        </slot>
      </div>
      <slot name="social">
        <!-- 소셜 로그인/회원가입 버튼이 위치합니다. -->
      </slot>
      <!-- <div class="or">or</div> -->
      <slot name="form">
        <!-- 로그인/회원가입 폼이 위치합니다. -->
      </slot>
    </div>
  </div>
</template>

<style scoped>
.big-container {
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 81.24px);
}
.container {
  border-radius: 0.9375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 4rem;
  margin: 1rem 0 4rem 0;
}
.title {
  color: #5acc00;
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
}
.msg {
  color: #5acc00;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.2rem;
}
.or {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
}
</style>
