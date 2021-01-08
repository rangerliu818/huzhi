import { createRouter, createWebHistory }  from 'vue-router'

const routes=[
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('/@components/home/index.vue'),
      children:[
        {
          path: '/home/recommend',
          name: 'Recommend',
          component: () => import('/@components/home/recommend.vue')
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('/@views/User'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('/@components/login/index.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;