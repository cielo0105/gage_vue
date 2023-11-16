import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, JoinView, LoginView, MapView, NoticeView, ReportView, NewsView } from '@/views'

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
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/notice',
      name: 'notice',
      component: NoticeView,
      redirect: { name: 'notice-list' },
      children: [
        {
          path: 'list',
          name: 'notice-list',
          component: () => import('@/components/notice/NoticeList.vue')
        },
        {
          path: 'view/:articleno',
          name: 'notice-view',
          component: () => import('@/components/notice/NoticeDetail.vue')
        },
        {
          path: 'write',
          name: 'notice-write',
          component: () => import('@/components/notice/NoticeWrite.vue')
        },
        {
          path: 'modify/:articleno',
          name: 'notice-modify',
          component: () => import('@/components/board/NoticeModify.vue')
        }
      ]
    },
    {
      path: '/report',
      name: 'report',
      component: ReportView
    }
  ]
})

export default router
