<script setup>
import SignBtn from '@/components/auth/SignBtn.vue'
import InputBox from '@/components/auth/InputBox.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

const articles = ref([])
const pgno = ref(1) // replace with your actual value
const key = ref('') // replace with your actual value
const word = ref('')
const submitForm = () => {
  const url = `http://localhost:8080/board/list?pgno=${pgno.value}&key=${key.value}&word=${word.value}`

  axios
    .get(url)
    .then(({ data }) => {
      console.log('공지사항 목록 가져오기 성공', data)
      articles.value = data.data.list
      console.log('article', articles.value)
    })
    .catch((error) => {
      console.error('로그인 실패', error)
      alert('아이디/비밀번호 확인')
    })
}

onMounted(() => {
  submitForm()
})

const moveWrite = () => {
  router.push({ name: 'notice-write' })
}
</script>

<template>
  <h3 class="title">공지사항</h3>
  <div class="row justify-content-center container">
    <div class="col-lg-10 mt-5">
      <div class="row align-self-center mb-2">
        <div class="col-md-2 text-start">
          <button type="button" class="btn btn-outline-primary btn-sm" @click="moveWrite">
            글쓰기
          </button>
        </div>
        <div class="col-md-5 offset-5">
          <form class="d-flex">
            <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />
            <div class="input-group input-group-sm">
              <input type="text" class="form-control" placeholder="검색어..." />
              <button class="btn btn-dark" type="button" @click="getArticleList">검색</button>
            </div>
          </form>
        </div>
      </div>
      <table class="table table-hover mt-4 my-table">
        <thead>
          <tr class="text-center">
            <th scope="col">글번호</th>
            <th scope="col">제목</th>
            <th scope="col">조회수</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <!-- <BoardListItem
              v-for="article in articles"
              :key="article.articleNo"
              :article="article"
            ></BoardListItem> -->
          <tr class="text-center" v-for="article in articles" :key="article.articleNo">
            <th scope="row">{{ article.articleNo }}</th>
            <td class="text-start">
              <!-- <router-link
                  :to="{ name: 'article-view', params: { articleno: article.articleNo } }"
                  class="article-title link-dark"
                > -->
              {{ article.subject }}
              <!-- </router-link> -->
            </td>
            <td>{{ article.hit }}</td>
            <td>{{ article.registerTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.big-container {
  display: flex;
  justify-content: center;
}
.container {
  border-radius: 0.9375rem;
  background: rgba(255, 255, 255, 0.29);
  padding: 1rem;
  display: flex;
  justify-content: center;
}
.title {
  color: #6e2add;
  font-size: 3rem;
  font-weight: 700;
}

.join-msg {
  color: #fff;
  text-align: center;
  margin-bottom: 5rem;
  font-size: 1.5rem;
}

.or {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 5rem;
  margin-top: 1rem;
}
.text {
  color: #6e2add;
  font-size: 1.25rem;
  display: block;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.table th,
.table td {
  background-color: transparent !important;
  color: white;
}
</style>
