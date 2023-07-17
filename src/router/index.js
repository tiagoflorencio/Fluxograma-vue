// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      }, 
      {
        path: '/tabelas',
        name: 'Tabelas',        
        component: () => import('@/views/Tabelas.vue'),
      },
      {
        path: '/graficos',
        name: 'Graficos',        
        component: () => import('@/views/MeusGraficos.vue'),
      }, 
      {
        path: '/formularios',
        name: 'Formularios',        
        component: () => import('@/views/Formularios.vue'),
      },  
      {
        path: '/fluxograma2',
        name: 'Fluxograma2',        
        component: () => import('@/views/Fluxograma2.vue'),
      },  
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
