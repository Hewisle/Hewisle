declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}

declare module '*.json' {
  const value: unknown;
  export default value;
}

declare module 'smooth-scrollbar/dist/plugins/overscroll';

declare module '*.png';
declare module '*.jpg';
declare module '*.svg';

interface CloneElement extends SVGElement {
  getElementById: (el: string) => HTMLElement;
}