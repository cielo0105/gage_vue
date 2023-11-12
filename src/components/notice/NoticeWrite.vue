<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { registArticle } from '@/components/api/boardApi'

const router = useRouter()
const route = useRoute()

const isUseId = ref(false)

const article = ref({
  articleNo: 0,
  subject: '',
  content: '',
  userId: '',
  hit: 0,
  registerTime: ''
})

const subjectErrMsg = ref('')
const contentErrMsg = ref('')
watch(
  () => article.value.subject,
  (value) => {
    let len = value.length
    if (len == 0 || len > 30) {
      subjectErrMsg.value = '제목을 확인해 주세요!!!'
    } else subjectErrMsg.value = ''
  },
  { immediate: true }
)
watch(
  () => article.value.content,
  (value) => {
    let len = value.length
    if (len == 0 || len > 500) {
      contentErrMsg.value = '내용을 확인해 주세요!!!'
    } else contentErrMsg.value = ''
  },
  { immediate: true }
)

function onSubmit() {
  // event.preventDefault();

  if (subjectErrMsg.value) {
    alert(subjectErrMsg.value)
  } else if (contentErrMsg.value) {
    alert(contentErrMsg.value)
  } else {
    writeArticle()
  }
}

function writeArticle() {
  console.log('글등록하자!!', article.value)
  // API 호출
  registArticle(
    article.value,
    ({ data }) => {
      console.log('data:  ', data), router.push({ name: 'notice-list' })
    },
    (error) => {
      console.log(error)
    }
  )
}

function moveList() {
  router.push({ name: 'notice-list' })
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3 class="title">공지사항 등록</h3>
      <div class="col-lg-10 text-start">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="userid" class="form-label">작성자 ID : </label>
            <input
              type="text"
              class="form-control"
              v-model="article.userId"
              :disabled="isUseId"
              placeholder="작성자ID..."
            />
          </div>
          <div class="mb-3">
            <label for="subject" class="form-label">제목 : </label>
            <input
              type="text"
              class="form-control"
              v-model="article.subject"
              placeholder="제목..."
            />
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">내용 : </label>
            <textarea class="form-control" v-model="article.content" rows="10"></textarea>
          </div>
          <div class="col-auto text-center">
            <button type="submit" class="btn btn-primary mb-3">글작성</button>
            <button type="button" class="btn btn-danger mb-3 ms-1" @click="moveList">
              목록으로이동...
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: #6e2add;
  text-align: center;
  font-size: 2rem;
}
</style>
