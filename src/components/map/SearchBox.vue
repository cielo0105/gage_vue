<script setup>
import MapFilterBtn from '@/components/map/MapFilterBtn.vue'

const search = () => {
  console.log('click search btn!!')
}
</script>

<template>
  <div class="box">
    <section class="search">
      <input type="text" placeholder="아파트, 동이름으로 검색하세요. " />
      <div class="search-icon" @click="search()"></div>
    </section>
    <div class="btn-group">
      <MapFilterBtn title="관심목록" color="#94BCF9" />
      <MapFilterBtn title="준공년도" color="#0030AB" />
      <MapFilterBtn title="면적" color="#0030AB" />
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 25rem;
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
  width: 21.1875rem;
  border-radius: 0.9375rem;
  border: 2px solid #0030ab;
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
