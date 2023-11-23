<script setup>
const props = defineProps({ title: String, url: String })
const move = () => {
  window.location.href = props.url
}
</script>

<template>
  <div class="card" @click="move()">
    <p class="card-title">{{ title }}</p>
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
  margin: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  cursor: pointer;
}

.card:hover {
  background: #ffd600;
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
  background-color: #ffd600;
}
</style>
