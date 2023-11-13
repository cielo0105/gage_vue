<script setup>
import { changeMoney } from '@/components/utils/changeMoney.js'
defineProps({ apt: Object })
</script>

<template>
  <div id="information" class="information">
    <div class="info-header">
      <button class="close-btn" @click="$emit('close-box')">✕</button>
    </div>

    <div class="px-3 pb-3 border-bottom">
      <h4 class="fw-bold">{{ apt?.apartmentName }}</h4>
      <div>
        <span class="badge rounded-pill text-bg-secondary me-2">지번주소</span>
        <span>{{ apt?.address }}</span>
      </div>
      <div v-if="!apt?.road_address">
        <span class="badge rounded-pill text-bg-secondary me-2">도로명주소</span>
        <p>{{ apt?.road_address }}</p>
      </div>
    </div>

    <div class="p-3 border-bottom d-flex">
      <div>
        <p>최근 거래 금액</p>
        <h4 id="curCost" class="fw-bold">{{ changeMoney(apt?.houseDealDto?.[0].dealAmount) }}</h4>
      </div>
    </div>

    <div class="p-3">
      <p>거래내역</p>
      <table id="table-history" class="table table-hover">
        <thead class="table-light">
          <tr>
            <th>실거래가</th>
            <th>거래일자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(element, index) in apt?.houseDealDto" :key="index">
            <td>{{ changeMoney(element.dealAmount) }}</td>
            <td>{{ element.dealYear }}.{{ element.dealMonth }}.{{ element.dealDay }}</td>
          </tr>
        </tbody>
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
</style>
