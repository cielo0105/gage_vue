<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { InputBox, SignBtn, VAuthLayout } from '@/components/auth'

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
  <v-auth-layout title="회원가입" btnName="가입하기">
    <template #sub> 간단한 정보를 입력하고, 더욱 편리하게 사이트를 사용해보세요. </template>
    <template #social>
      <SignBtn width="31.4375rem" height="2.875rem" msg="Start with Kakao" />
    </template>
    <template #form>
      <form @submit.prevent="submitForm" class="join-form">
        <input-box
          v-model="userid"
          width="36.875rem"
          height="3.6875rem"
          type="text"
          @input="emailCheck"
          label="이메일"
        />
        <span v-if="!emailFlag">이메일 형식이 올바르지 않습니다</span>
        <input-box
          v-model="userpass"
          width="36.875rem"
          height="3.6875rem"
          type="password"
          label="비밀번호"
        />
        <input-box
          v-model="passcheck"
          width="36.875rem"
          height="3.6875rem"
          type="password"
          @input="passwordCheck"
          label="비밀번호 확인"
        />
        <span v-if="!passFlag">비밀번호가 일치하지 않습니다.</span>
        <input-box
          v-model="username"
          width="36.875rem"
          height="3.6875rem"
          type="text"
          label="이름"
        />
        <SignBtn type="submit" width="25.5rem" height="2.875rem" msg="가입하기" />
      </form>
    </template>
  </v-auth-layout>
</template>

<style scoped>
.join-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
