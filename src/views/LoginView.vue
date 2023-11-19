<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { InputBox, SignBtn, VAuthLayout } from '@/components/auth'
import { loginMember } from '@/components/api/memberApi'

const router = useRouter()

const userid = ref('')
const userpass = ref('')

const errMsg = ref({ show: false, msg: '' })

const submitForm = () => {
  console.log(userid.value, userpass.value)

  if (userid.value.length === 0) {
    errMsg.value.show = true
    errMsg.value.msg = '아이디를 입력해주세요.'
    return
  } else if (userpass.value.length === 0) {
    errMsg.value.show = true
    errMsg.value.msg = '비밀번호를 입력해주세요.'
    return
  } else {
    errMsg.value.show = false
  }

  const requestData = {
    userId: userid.value,
    userPass: userpass.value
  }

  loginMember(
    requestData,
    ({ data }) => {
      console.log('로그인 성공!! data==', data)
      router.push({ name: 'home' })
    },
    (err) => {
      console.log('로그인 실패ㅜㅜ', err.response.data.msg)
    }
  )
}
</script>

<template>
  <v-auth-layout title="LOGIN" subTitle="">
    <template #sub>
      어서오세요! 아직 저희 사이트의 회원이 아니시면 <br />
      <router-link to="/join" class="join">회원가입</router-link>을 먼저 진행해주세요!
    </template>
    <template #social>
      <SignBtn width="31.4375rem" height="2.875rem" msg="Start with Kakao" />
    </template>
    <template #form>
      <div class="login-form">
        <InputBox
          v-model="userid"
          width="36.875rem"
          height="3.6875rem"
          type="text"
          label="아이디(이메일)"
        />
        <InputBox
          v-model="userpass"
          width="36.875rem"
          height="3.6875rem"
          type="password"
          label="비밀번호"
        />
        <div class="err-msg" v-show="errMsg.show">{{ errMsg.msg }}</div>
        <SignBtn @click-signbtn="submitForm" width="25.5rem" height="2.875rem" msg="로그인" />
      </div>
    </template>
  </v-auth-layout>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.join {
  color: #0030ab;
}
.err-msg {
  color: #cd00a0;
}
</style>
