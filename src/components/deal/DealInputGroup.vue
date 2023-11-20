<script setup>
defineProps({
  label: String,
  btns: Array,
  selected: String
})
</script>

<template>
  <div class="input-box">
    <label class="text">{{ label }}</label>
    <div class="btn-group">
      <button
        v-for="(item, index) in btns"
        :key="index"
        @click="$emit('selectType', item.code)"
        :class="selected === item.code ? 'selected-btn' : 'btn'"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.input-box {
  display: inline;
  margin-bottom: 3rem;
}
.text {
  width: 6rem;
  font-size: 1.25rem;
  font-weight: 700;
}
.btn {
  width: 10rem;
  height: 2.5rem;
  background: #ececec;
}
.selected-btn {
  width: 10rem;
  height: 2.5rem;
  background: #5acc00;
  color: white;
  border: none;
}
.btn-group button:first-child {
  border-radius: 0.9375rem 0 0 0.9375rem;
}

.btn-group button:last-child {
  border-radius: 0 0.9375rem 0.9375rem 0;
}
</style>
