import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  }, 
  {
    path: '/test',
    component: () => import ('../views/Test.vue')
  },
  {
    path: '/home',
    component: () => import ('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
