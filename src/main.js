import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap'

const app = createApp(App)
axios.defaults.baseURL = 'http://localhost:8080'
app.config.globalProperties.$axios = axios

app.use(BootstrapVue3)
app.use(router)
app.use(Antd);

app.mount('#app')
