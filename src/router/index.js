import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/projects.vue')
    },
    {
      path: '/postBac',
      name: 'Parcours post bac',
      component: () => import('../views/postBac.vue')
    },
    {
      path: '/pro',
      name: 'Parcours professionnel',
      component: () => import('../views/pro.vue')
    },
    {
      path: '/',
      name: 'Accueil',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
