import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue'),
      meta: {
        title: '毛孩子宠物护理中心'
      }
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/Service.vue'),
      meta: {
        title: '服务业务'
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  else {
    document.title = "毛孩子宠物护理"
  }
})

export default router
