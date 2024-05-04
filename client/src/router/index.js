import store from '@/store/store';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() { return { top: 0 } },

  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/indexPage.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blogHome.vue')
    },
    {
      path: '/blog/create',
      name: 'blogCreate',
      component: () => import('../views/blogCreate.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/blog/:id',
      name: 'blogView',
      component: () => import('../views/blogView.vue'),
    },
    {
      path: '/blog/:id/edit',
      name: 'blogEdit',
      component: () => import('../views/blogEdit.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboardPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/errorPage.vue'),
    },
    {
      path: '/logout', 
      name: 'logout',
      beforeEnter: (to, from, next) => {
        store.dispatch('logout')
        next('/')
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404Page.vue'),
    }
  ]
})

// Router Guards
router.beforeEach(async (to, from, next) => {
  if(to.name !== 'error' && !store.getters.backendOnline) return next('/error');
  if (to.meta.disabled) return next('/');
  if (to.meta.requiresAuth && !store.getters.token) return next('/');

  if (to.meta.requiresAuth) {
    let valid = await store.dispatch('validateToken');
    if(!valid) return store.dispatch('logout');
    next();
  }
  next();
});

export default router
