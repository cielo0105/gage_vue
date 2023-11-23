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
      redirect: { name: 'news' },
      children: [
        {
          path: 'news',
          name: 'news',
          component: () => import('@/components/notice/NewsList.vue')
        },
        {
          path: 'info',
          name: 'info',
          component: () => import('@/components/notice/InfoList.vue')
        },
        {
          path: 'write',
          name: 'notice-write',
          component: () => import('@/components/notice/NoticeWrite.vue')
        },
        {
          path: 'support',
          name: 'support',
          component: () => import('@/components/notice/SupportList.vue')
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
          path: 'chat/:id',
          name: 'deal-chat',
          component: () => import('@/components/deal/DealChat.vue')
        }
      ],
      linkActiveClass: 'route-active'
    }
  ],
  linkActiveClass: 'route-active',
  linkExactActiveClass: 'route-active'
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/deal/chat') {
    next('/deal/chat/0')
  }
  if (
    (to.fullPath === `/deal/chat/${to.params.id}` ||
      to.fullPath === `/deal/chat` ||
      to.fullPath === `/deal/regist`) &&
    !localStorage.getItem('jwtToken')
  ) {
    alert('로그인이 필요한 서비스입니다.')
    next('/login')
  } else if (to.fullPath === `/login` && localStorage.getItem('jwtToken')) {
    next('/')
  } else {
    next()
  }
})

export default router
