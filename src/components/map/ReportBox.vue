<script setup>
import { onMounted } from 'vue'
import { changeMoney } from '@/util/changeMoney.js'

import BarChart from '@/components/chart/BarChart.vue'
import IndicatorChart from '@/components/chart/IndicatorChart.vue'
const props = defineProps(['reportDong', 'category', 'fullCategory', 'indicator'])
// reportDong - code, dong, cnt, rank, top
</script>

<template>
  <div id="information" class="information">
    <div class="info-header">
      <button class="close-btn" @click="$emit('close-box')">✕</button>
    </div>
    <div class="px-3 pb-3">
      <h4>
        <span class="fw-bold">{{ reportDong.dong }}</span> 상권 분석 보고서
      </h4>
      <!-- <VAddress title="지번주소" :address="apt?.address" />
      <VAddress title="도로명주소" :address="apt?.road_address" v-if="apt?.road_address" /> -->
      <span class="category"
        >{{ fullCategory.indsLclsNm }}>{{ fullCategory.indsMclsNm }}>{{
          fullCategory.indsSclsNm
        }}</span
      >
    </div>
    <div class="scroll-box">
      <div class="row">
        <div class="col-md-4">
          <div class="p-3 d-flex card area">
            선택 업종 업소 수
            <span class="fw-bold">{{ props.reportDong.cnt }}</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 d-flex card area">
            가장 많은 연령대

            <span class="fw-bold">{{ props.reportDong.top[0] }}</span>
          </div>

          <!-- <p>{{ reportDong.rank[1].top1 }}</p> -->
        </div>
        <div class="col-md-4">
          <div class="p-3 d-flex card area">
            상권 변화지표
            <span class="fw-bold">{{ props.indicator.changeNm }}</span>
          </div>
        </div>
      </div>
      <div class="p-3">
        <section>
          <p>유사 업종</p>
          <table class="table">
            <tbody>
              <tr v-for="(gage, index) in reportDong.gageRank" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ gage.indsSclsNm }}</td>
                <td>{{ gage.count }}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <p>연령대</p>
          <BarChart :reportDong="reportDong" />
        </section>
        <section>상권 변화 지표</section>

        <IndicatorChart :indicator="indicator" />
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

  /* width: 26.5rem; */
  height: 50rem;
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

.area {
  color: #343a40;
  font-size: 0.75rem;
  font-weight: 400;
}

.card {
  border-radius: 0.9375rem;
  border: 3px solid var(--sub, #ffd600);

  background: #fff;
  width: 8rem;
  height: 6.3125rem;
}

.category {
  color: #9c9c9c;
  font-size: 0.9375rem;
  font-weight: 500;
}
</style>
