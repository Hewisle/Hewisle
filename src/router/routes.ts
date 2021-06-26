import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/space', component: () => import('src/pages/Space.vue') },
      { path: '/space/:name(anna|ruben|bianca|dylan)', component: () => import('src/pages/World.vue') },
      { path: '/space/:name(anna|ruben|bianca|dylan)/:country(north|north-east|north-west|south|south-east|south-west)', component: () => import('src/pages/Country.vue') },
      { path: '/lottie', component: () => import('src/pages/Lottie.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
