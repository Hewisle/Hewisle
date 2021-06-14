import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/scroll', component: () => import('src/pages/Scroll.vue') },
      { path: '/space', component: () => import('src/pages/Space.vue') },
      { path: '/lottie', component: () => import('src/pages/Lottie.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  { path: '*', component: () => import('pages/Error404.vue') }
];

export default routes;
