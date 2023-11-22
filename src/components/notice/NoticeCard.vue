<script setup>
const props = defineProps({ title: String, url: String })

const move = () => {
  window.location.href = props.url
}
</script>

<template>
  <div class="card" @click="move()">
    <p class="text">{{ title }}</p>
    확인하러 가기 ➞
  </div>
</template>

<style scoped>
.card {
  width: 16.375rem;
  height: 20.0625rem;
  border-radius: 0.9375rem;
  border: none;
  display: inline-block;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-top: 1rem;
  margin: 1rem;
}
.card:hover {
  background: #ffd600;
  cursor: pointer;
}

.text {
  font-size: 1.25rem;
  font-weight: 700;
  display: block;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}

a {
  text-decoration: none;
}
</style>
