import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  }, 
  {
    path: '/test',
    component: () => import ('../views/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
