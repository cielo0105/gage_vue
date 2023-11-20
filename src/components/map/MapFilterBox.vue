<script setup>
import MapFilterBtn from '@/components/map/MapFilterBtn.vue'
import MapFilterDropdown from './MapFilterDropdown.vue'
import {
  getMainList,
  getMiddleList,
  getSubList,
  getResult
} from '@/components/api/categoryListApi.js'
import { ref, onMounted } from 'vue'

const mainList = ref([])
const middleList = ref([{ text: '중분류', value: '' }]) // 중분류
const subList = ref([{ test: '소분류', value: '' }]) // 소분류
const result = ref([])
const search = ref('')

onMounted(() => {
  getMain()
})

// 대분류 리스트 가져오기
const getMain = async () => {
  let options = []
  let lists = await getMainList()
  options.push({ text: '대분류', value: '' })
  console.log('lists:', lists)
  lists.forEach((list) => {
    options.push({ text: list.indsLclsNm, value: list.indsLclsCd })
  })
  mainList.value = options
  console.log('mainList', mainList.value)
}

const onChangeMain = async (val) => {
  let options = []
  let lists = await getMiddleList(val)
  options.push({ text: '중분류', value: '' })
  subList.value = { text: '소분류', value: '' }
  console.log('lists:', lists)
  lists.forEach((list) => {
    options.push({ text: list.indsMclsNm, value: list.indsMclsCd })
  })
  middleList.value = options
  console.log('middleList', middleList.value)
}

const onChangeMiddle = async (val) => {
  let options = []
  let lists = await getSubList(val)
  options.push({ text: '소분류', value: '' })
  console.log('lists:', lists)
  lists.forEach((list) => {
    options.push({ text: list.indsSclsNm, value: list.indsSclsCd })
  })
  subList.value = options
  console.log('subList', subList.value)
}

const onChangeSub = async (val) => {
  search.value = val
}

const searchCode = async () => {
  result.value = await getResult(search.value)
  console.log('result: ', result)
}
</script>

<template>
  <div class="box">
    <section class="search">
      <MapFilterDropdown :selectOption="mainList" @onKeySelect="onChangeMain" />
      <MapFilterDropdown :selectOption="middleList" @onKeySelect="onChangeMiddle" />
      <MapFilterDropdown :selectOption="subList" @onKeySelect="onChangeSub" />
    </section>
    <MapFilterBtn title="업종 검색" @click="searchCode()" />
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
  top: 8rem;
}

.search {
  display: flex;
  align-items: center;
}

input {
  width: 21.1875rem;
  border-radius: 0.9375rem;
  border: 2px solid #000000;
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
