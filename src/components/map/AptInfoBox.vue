<script setup>
import { changeMoney } from '@/components/utils/changeMoney.js'
import VAddress from '@/components/map/VAddress.vue'
defineProps({ apt: Object })
</script>

<template>
  <div id="information" class="information">
    <div class="info-header">
      <button class="close-btn" @click="$emit('close-box')">✕</button>
    </div>

    <div class="px-3 pb-3 border-bottom">
      <h4 class="fw-bold">{{ apt?.apartmentName }}</h4>
      <VAddress title="지번주소" :address="apt?.address" />
      <VAddress title="도로명주소" :address="apt?.road_address" v-if="apt?.road_address" />
    </div>

    <div class="scroll-box">
      <div class="p-3 border-bottom d-flex">
        <div>
          <p>최근 거래 금액</p>
          <span class="money">{{ changeMoney(apt?.houseDealDto?.[0].dealAmount) }}</span>
          <span class="area">({{ apt?.houseDealDto?.[0].area }}m<sup>2</sup> )</span>
        </div>
      </div>

      <div class="p-3">
        <p>거래내역</p>
        <table id="table-history" class="table table-hover">
          <thead class="table-light">
            <tr>
              <th>실거래가</th>
              <th>계약 일</th>
              <th>면적</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(element, index) in apt?.houseDealDto" :key="index">
              <td>{{ changeMoney(element.dealAmount) }}</td>
              <td>{{ element.dealYear }}.{{ element.dealMonth }}.{{ element.dealDay }}</td>
              <td>{{ element.area }}m<sup>2</sup></td>
            </tr>
          </tbody>
        </table>
      </div>
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

.information::-webkit-scrollbar {
  width: 10px;
}
.information::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
  background-clip: padding-box;
  border: 4px solid transparent;
}

.info-header {
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  font-size: 1.3rem;
  background: none;
  border: none;
  outline: none;
}

.scroll-box {
}

.money {
  color: #000;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 0.4rem;
}

.area {
  color: #343a40;
  font-size: 0.75rem;
  font-weight: 400;
}
</style>
