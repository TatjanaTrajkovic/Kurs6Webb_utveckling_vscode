import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Spelsidan from '../views/Spelsidan.vue'
import FAQSidan from '../views/FAQ-sidan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/spelsidan',
      name: 'spelsidan',
      component: Spelsidan
    },
    {
      path: '/FAQ-sidan',
      name: 'FAQ-sidan',
      component: FAQSidan
    }
  ],
})

export default router
