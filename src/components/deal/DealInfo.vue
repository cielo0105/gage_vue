<script setup></script>

<template>
  <div class="dealinfo-box">
    <div class="header">
      <strong class="title">월세 1000/50</strong>
      <button class="close-btn" @click="$emit('close-box')">✕</button>
    </div>
  </div>
</template>

<style scoped>
.dealinfo-box {
  position: absolute;
  z-index: 10;
  top: 1rem;
  left: 1rem;

  width: 30rem;
  height: fit-content;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 2rem;
}
.dealinfo-box .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-btn {
  font-size: 1.3rem;
  background: none;
  border: none;
  outline: none;
}
.title {
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
