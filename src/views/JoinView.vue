<script setup>
import SignBtn from '@/components/auth/SignBtn.vue'
import InputBox from '@/components/auth/InputBox.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

const userid = ref('')
const userpass = ref('')
const passcheck = ref('')
const username = ref('')
const emailFlag = ref(true)
const passFlag = ref(true)
// const regex = '^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordCheck = () => {
  if (userpass.value === passcheck.value) {
    passFlag.value = true
  } else passFlag.value = false
}

const emailCheck = () => {
  if (regex.test(userid.value) === true) {
    emailFlag.value = true
  } else emailFlag.value = false
}

const submitForm = () => {
  console.log(userid.value, userpass.value, username.value)
  if (!emailFlag.value) alert('이메일 형식 확인')
  else if (!passFlag.value) alert('비밀번호 확인')
  else {
    const url = 'http://localhost:8080/member/regist'
    const requestData = {
      userId: userid.value,
      userPass: userpass.value,
      userName: username.value
    }

    axios
      .post(url, requestData)
      .then((response) => {
        console.log('회원가입 성공', response)
        router.push({ name: 'login' })
      })
      .catch((error) => {
        console.error('회원가입 실패', error)
      })
  }
}
</script>

<template>
  <div class="big-container">
    <div class="container">
      <h3 class="title">회원가입</h3>
      <div class="join-msg">간단한 정보를 입력하고, 더욱 편리하게 사이트를 사용해보세요.</div>
      <SignBtn width="31.4375rem" height="2.875rem" msg="Sign up with Google" /><br />
      <SignBtn width="31.4375rem" height="2.875rem" msg="Sign up with Kakao" />
      <div class="or">or</div>
      <form v-on:submit.prevent="submitForm" class="join-form">
        <div class="input-group">
          <label class="text">이메일</label>
          <InputBox
            v-model="userid"
            width="36.875rem"
            height="3.6875rem"
            type="text"
            @input="emailCheck"
          />
        </div>
        <span v-if="!emailFlag">이메일 형식이 올바르지 않습니다</span>
        <div class="input-group">
          <label class="text">비밀번호</label>
          <InputBox v-model="userpass" width="36.875rem" height="3.6875rem" type="password" />
        </div>
        <div class="input-group">
          <label class="text">비밀번호 확인</label>
          <InputBox
            v-model="passcheck"
            width="36.875rem"
            height="3.6875rem"
            type="password"
            @input="passwordCheck"
          />
        </div>
        <span v-if="!passFlag">비밀번호가 일치하지 않습니다.</span>
        <div class="input-group">
          <label class="text" for="nickname">이름</label>
          <InputBox v-model="username" width="36.875rem" height="3.6875rem" type="text" />
        </div>
        <SignBtn type="submit" width="25.5rem" height="2.875rem" msg="가입하기" />
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
.at {
  color: #fff;
  font-size: 1.25rem;
}
.text {
  color: #6e2add;
  font-size: 1.25rem;
  display: block;
  padding-left: 0.5rem;
}

.join-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
