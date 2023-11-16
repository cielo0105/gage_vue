<script setup>
defineProps({
  title: String,
  showOr: Boolean
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
      <p class="or" v-if="showOr">or</p>
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
}
.container {
  border-radius: 0.9375rem;
  background: rgba(255, 255, 255, 0.29);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 6rem;
  margin: 1rem 0 4rem 0;
}
.title {
  color: #6e2add;
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
}
.msg {
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.5rem;
}
.or {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
}

.or::before,
.or::after {
  width: 20rem;
  height: 2px;
  content: ' ';
  background-color: white;
  display: inline-block;
  vertical-align: super;
}

.or::before {
  margin-right: 1rem;
}

.or::after {
  margin-left: 1rem;
}
</style>
