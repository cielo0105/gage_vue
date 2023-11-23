<script setup>
const props = defineProps({ title: String, url: String, img: String })

const move = () => {
  window.location.href = props.url
}
</script>

<template>
  <div class="card" style="width: 18rem" @click="move()">
    <img :src="props.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ props.title }}</h5>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%;
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

img {
  width: 100%;
  height: 22rem;
  object-fit: contain;
}
.card-body {
  height: 6rem;
}
</style>
