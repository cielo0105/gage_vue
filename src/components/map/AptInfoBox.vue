<script setup>
import { ref } from 'vue'
import { changeMoney } from '@/components/utils/changeMoney.js'
const props = defineProps({ apt: Object })
const isShow = ref(props.apt.display)

const closeInfo = () => {
  console.log('close info')
  isShow.value = 'none'
}
</script>

<template>
  <div id="information" class="information" :style="{ display: isShow }">
    <div class="brt-6 p-2 gray-700">
      <button class="text-white border-0 gray-700" :onclick="closeInfo">X</button>
    </div>

    <div class="p-3 border-bottom">
      <h4 id="aptname" class="fw-bold">{{ apt.apartmentName }}</h4>
      <p class="fw-bold" id="address">{{ apt.address }}</p>
      <p id="address-detail">{{ apt.road_address }}</p>
    </div>

    <div class="p-3 border-bottom d-flex">
      <div>
        <p>최근 거래 금액</p>
        <h4 id="curCost" class="fw-bold">{{ changeMoney(apt.houseDealDto?.[0].dealAmount) }}</h4>
      </div>
    </div>

    <div class="p-3">
      <p>거래내역</p>
      <table id="table-history" class="table table-bordered">
        <thead class="table-light">
          <td>실거래가</td>
          <td>거래일자</td>
        </thead>
        <tr v-for="(element, index) in apt.houseDealDto" :key="index">
          <td>{{ changeMoney(element.dealAmount) }}</td>
          <td>{{ element.dealYear }}년 {{ element.dealMonth }}월 {{ element.dealDay }}일</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.information {
  position: absolute;
  background-color: white;
  z-index: 1010;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 25rem;
  padding: 1rem;
  left: 2rem;
  top: 2rem;

  max-height: 80vh;
  overflow-y: scroll;
}
</style>
