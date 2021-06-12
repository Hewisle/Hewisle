declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}

declare module 'smooth-scrollbar/dist/plugins/overscroll';

declare module '*.png';
declare module '*.jpg';
declare module '*.svg';