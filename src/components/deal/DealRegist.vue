<script setup>
import DealInput from '@/components/deal/DealInput.vue'
</script>

<template>
  <div class="big-container">
    <div class="container">
      <h3 class="title">매물 등록</h3>
      <deal-input
        label="매매가"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="매매가를 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <deal-input
        label="주소"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="주소를 입력해주세요"
        style="margin-bottom: 1rem"
      />
      <deal-input
        label="상세 주소"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="상세 주소를 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <deal-input
        label="전용 면적"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="전용 면적을 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <deal-input
        label="추천 업종"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="추천 업종을 입력해주세요"
        style="margin-bottom: 3rem"
      />
      <deal-input
        label="층수"
        width="30rem"
        height="2.5rem"
        type="text"
        placeholder="층수"
        style="margin-bottom: 3rem"
      />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 1rem 6rem;
  margin: 0 0 4rem 0;
}
.title {
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4rem;
}
</style>
