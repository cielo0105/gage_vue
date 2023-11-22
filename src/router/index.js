import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, JoinView, LoginView, MapView, NoticeView, ReportView, DealView } from '@/views'

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
          component: () => import('@/components/notice/NoticeModify.vue')
        }
      ]
    },
    {
      path: '/report',
      name: 'report',
      component: ReportView
    },
    {
      path: '/deal',
      name: 'deal',
      component: DealView,
      redirect: { name: 'deal-map' },
      children: [
        {
          path: 'map',
          name: 'deal-map',
          component: () => import('@/components/deal/DealMap.vue')
        },
        {
          path: 'regist',
          name: 'deal-regist',
          component: () => import('@/components/deal/DealRegist.vue')
        },
        {
          path: 'chat',
          name: 'deal-chat',
          component: () => import('@/components/deal/DealChat.vue'),
          children: [
            {
              path: ':id',
              name: 'chat-room',
              component: () => import('@/components/deal/ChatRoom.vue'),
            }
          ]
        }
      ]
    }
  ],
  linkActiveClass: 'route-active',
  linkExactActiveClass: 'route-active'
})

export default router
