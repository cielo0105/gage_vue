import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, JoinView, LoginView, MapView, NoticeView, ReportView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/notice',
      name: 'notice',
      component: NoticeView
    },
    {
      path: '/report',
      name: 'report',
      component: ReportView
    }
  ]
})

export default router
