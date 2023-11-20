<script setup>
const search = () => {
  console.log('click search btn!!')
}
</script>

<template>
  <div class="box">
    <section class="search">
      <input type="text" placeholder="동단위로 검색하세요. " />
      <div class="search-icon" @click="search()"></div>
    </section>
  </div>
</template>

<style scoped>
.box {
  width: 26.5rem;
  padding: 1rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: absolute;
  z-index: 1000;
  left: 2rem;
  top: 2rem;
}

.search {
  display: flex;
  align-items: center;
}

input {
  width: 22.1875rem;
  border-radius: 0.9375rem;
  border: 2px solid #5acc00;
  background: #fff;
  padding: 0.5rem;
  outline: none;
}

.search-icon {
  width: 30px;
  height: 1.8rem;
  margin-left: 0.8rem;
  background-image: url('../../assets/searchIcon.png');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

.btn-group {
  display: flex;
  padding: 1rem 0 0 0;
  justify-content: space-between;
}
</style>
