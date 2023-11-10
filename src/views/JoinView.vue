<script setup>
import SignBtn from '@/components/auth/SignBtn.vue'
import InputBox from '@/components/auth/InputBox.vue'
</script>

<template>
  <div class="big-container">
    <div class="container">
      <h3 class="title">회원가입</h3>
      <div class="join-msg">간단한 정보를 입력하고, 더욱 편리하게 사이트를 사용해보세요.</div>
      <SignBtn width="31.4375rem" height="2.875rem" msg="Sign up with Google" /><br />
      <SignBtn width="31.4375rem" height="2.875rem" msg="Sign up with Kakao" />
      <div class="or">or</div>
      <div class="input-group">
        <label class="text">이메일</label>
        <InputBox width="36.875rem" height="3.6875rem" type="text" />
      </div>
      <div class="input-group">
        <label class="text">비밀번호</label>
        <InputBox width="36.875rem" height="3.6875rem" type="password" />
      </div>
      <div class="input-group">
        <label class="text">비밀번호 확인</label>
        <InputBox width="36.875rem" height="3.6875rem" type="password" />
      </div>
      <div class="input-group">
        <label class="text" for="nickname">닉네임</label>
        <InputBox width="36.875rem" height="3.6875rem" type="text" id="nickname" />
      </div>
      <SignBtn width="25.5rem" height="2.875rem" msg="가입하기" />
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
