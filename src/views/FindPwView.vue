<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { InputBox, SignBtn, VAuthLayout } from '@/components/auth'

const router = useRouter()

const userid = ref('')
const isSendTempPass = ref(false)

const submitForm = () => {
  console.log('id(email): ', userid)
  try {
    //TODO: 이메일 있는지 확인하고, 있으면 이메일로 임시 비밀번호 전송하는 api 로직 작성하기
    isSendTempPass.value = true
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <v-auth-layout title="비밀번호 찾기">
    <template #sub> 회원정보에 등록된 정보로 비밀번호를 찾습니다. </template>
    <template #form>
      <form v-on:submit.prevent="submitForm" class="findpw-form">
        <InputBox
          v-model="userid"
          width="36.875rem"
          height="3.6875rem"
          type="text"
          label="아이디(이메일)"
        />
        <SignBtn
          type="submit"
          width="25.5rem"
          height="2.875rem"
          msg="확인"
          v-if="!isSendTempPass"
        />
      </form>
      <template v-if="isSendTempPass">
        <p class="info-msg">
          가입하신 이메일로 임시 비밀번호가 발송되었습니다. <br />
          임시 비밀번호로 다시 로그인해주세요.
        </p>
      </template>
      <SignBtn
        width="25.5rem"
        height="2.875rem"
        msg="로그인 하러가기"
        v-if="isSendTempPass"
        @click="
          () => {
            router.push({ name: 'login' })
          }
        "
      />
    </template>
  </v-auth-layout>
</template>

<style scoped>
.findpw-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-msg {
  text-align: center;
}
</style>
