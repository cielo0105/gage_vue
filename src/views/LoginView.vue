<script setup>
import SignBtn from '@/components/auth/SignBtn.vue'
import InputBox from '@/components/auth/InputBox.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

const userid = ref('')
const userpass = ref('')

const submitForm = () => {
  console.log(userid.value, userpass.value)

  const url = 'http://localhost:8080/member/login'
  const requestData = {
    userId: userid.value,
    userPass: userpass.value
  }

  axios
    .post(url, requestData)
    .then((response) => {
      console.log('로그인 성공', response)
      router.push({ name: 'home' })
    })
    .catch((error) => {
      console.error('로그인 실패', error)
      alert('아이디/비밀번호 확인')
    })
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
      <form v-on:submit.prevent="submitForm" class="login-form">
        <div class="input-group">
          <label class="text">아이디</label>
          <InputBox v-model="userid" width="36.875rem" height="3.6875rem" type="text" />
        </div>

        <div class="input-group">
          <label class="text">비밀번호</label>
          <InputBox v-model="userpass" width="36.875rem" height="3.6875rem" type="password" />
        </div>
        <SignBtn type="submit" width="25.5rem" height="2.875rem" msg="로그인" />
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

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
