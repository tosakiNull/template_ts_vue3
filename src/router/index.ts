import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const siteFileName = window.SITE_NAME;
const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: 'home',
    name: 'home',
    meta: {
      title: 'go_home',
      auth: true,
      checkPermissions: false,
    },
    component: () => import(`@/views/${siteFileName}/home/index.vue`),
  },
  {
    path: 'about',
    name: 'about',
    component: () => import(`@/views/${siteFileName}/about/index.vue`),
  },
];

// 預設錯誤路由 (需登入，置於 route 最後)
const fallbackRoutes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: '404',
    component: () => import(`@/views/${siteFileName}/404/index.vue`),
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/404',
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    meta: { auth: true },
    component: () => import('@/views/index.vue'),
    children: [
      ...defaultRoutes,
    ],
    redirect: '/home',
  },
  ...fallbackRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
