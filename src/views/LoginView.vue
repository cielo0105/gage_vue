<script setup>
import SignBtn from '@/components/auth/SignBtn.vue'
import InputBox from '@/components/auth/InputBox.vue'
import axios from 'axios'

const info = {
  userid:
}
</script>

<template>
  <div class="big-container">
    <div class="container">
      <h3 class="title">Login</h3>
      <div class="join-msg">
        어서오세요! 아직 저희 사이트의 회원이 아니시면 <br />
        <router-link to="/join">회원가입</router-link>을 먼저 진행해주세요!
      </div>
      <SignBtn width="31.4375rem" height="2.875rem" msg="Sign up with Google" /><br />
      <SignBtn width="31.4375rem" height="2.875rem" msg="Sign up with Kakao" />
      <div class="or">or</div>
      <form v-on:submit.prevent="submitForm">
        <div class="input-group">
          <label class="text">아이디</label>
          <InputBox width="36.875rem" height="3.6875rem" type="text" />
        </div>
        <div class="input-group">
          <label class="text">비밀번호</label>
          <InputBox width="36.875rem" height="3.6875rem" type="password" />
        </div>
        <SignBtn width="25.5rem" height="2.875rem" msg="로그인" />
      </form>
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
  padding: 7rem;
}
.title {
  color: #6e2add;
  text-align: center;
  font-size: 2rem;
}

.join-msg {
  color: #fff;
  text-align: center;
  margin-bottom: 5rem;
  font-size: 1.5rem;
}

.or {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 5rem;
  margin-top: 1rem;
}
.text {
  color: #6e2add;
  font-size: 1.25rem;
  display: block;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}
/* .login-btn {
  width: 25.5rem;
  height: 2.875rem;
  flex-shrink: 0;
  border-radius: 2.5rem;
  background: #fff;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
} */
</style>
