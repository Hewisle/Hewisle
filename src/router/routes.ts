import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/scroll', component: () => import('src/pages/Scroll.vue') },
      { path: '/space', component: () => import('src/pages/Space.vue') },
      { path: '/space/:name(anna|ruben|bianca|dylan)', component: () => import('src/pages/World.vue') },
      { path: '/space/:name(anna|ruben|bianca|dylan)/:country(north-east|north-west|south)', component: () => import('src/pages/Country.vue') },
      { path: '/lottie-anna', component: () => import('src/pages/LottieAnna.vue') },
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
