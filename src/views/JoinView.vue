<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { InputBox, SignBtn, VAuthLayout } from '@/components/auth'
import { registMember } from '@/components/api/memberApi.js'

const router = useRouter()

const member = ref({
  id: '',
  pass: '',
  passcheck: '',
  name: '',
  emailFlag: true,
  passFlag: true
})
// const regex = '^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordCheck = () => {
  if (member.value.pass === member.value.passcheck) {
    member.value.passFlag = true
  } else member.value.passFlag = false
}

const emailCheck = () => {
  if (regex.test(member.value.id) === true) {
    member.value.emailFlag = true
  } else member.value.emailFlag = false
}

const submitForm = () => {
  console.log(member.value.id, member.value.pass, member.value.name)
  if (!member.value.emailFlag) alert('이메일 형식 확인')
  else if (!member.value.passFlag) alert('비밀번호 확인')
  else {
    const requestData = {
      userId: member.value.id,
      userPass: member.value.pass,
      userName: member.value.name
    }

    registMember(
      requestData,
      ({ data }) => {
        console.log('회원가입 성공!! data==', data)
        router.push({ name: 'login' })
      },
      (err) => {
        console.log('회원가입 실패ㅜㅜ', err.response.data.msg)
      }
    )
  }
}
</script>

<template>
  <v-auth-layout title="회원가입" btnName="가입하기">
    <template #sub> 간단한 정보를 입력하고, 더욱 편리하게 사이트를 사용해보세요. </template>
    <!-- <template #social>
      <SignBtn width="31.4375rem" height="2.875rem" msg="Start with Kakao" />
    </template> -->
    <template #form>
      <form @submit.prevent="submitForm" class="join-form">
        <input-box
          v-model="member.id"
          width="36.875rem"
          height="3.6875rem"
          type="text"
          @input="emailCheck"
          label="이메일"
        />
        <span v-if="!member.emailFlag">이메일 형식이 올바르지 않습니다</span>
        <input-box
          v-model="member.pass"
          width="36.875rem"
          height="3.6875rem"
          type="password"
          label="비밀번호"
        />
        <input-box
          v-model="member.passcheck"
          width="36.875rem"
          height="3.6875rem"
          type="password"
          @input="passwordCheck"
          label="비밀번호 확인"
        />
        <span v-if="!member.passFlag">비밀번호가 일치하지 않습니다.</span>
        <input-box
          v-model="member.name"
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
