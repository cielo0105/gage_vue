<script setup></script>

<template>
  <div class="card">
    <p class="card-title">gdgdgdgdfadsg</p>
    <span class="card-detail">자세히 보기 ➜</span>
  </div>
</template>

<style scoped>
.card {
  width: 16.375rem;
  height: 20.0625rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
}

.card:hover {
  background: #decbff;
}

.card-title {
  color: #353535;
  font-size: 1.6rem;
  font-weight: 700;
}

.card-detail {
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  background: none;
  border: none;
  border-radius: 30px;
  text-align: right;
}

.card-detail:hover {
  background-color: #d9d9d9;
}
</style>
