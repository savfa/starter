/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.pug" {
  const template: (locals?: Record<string, any>) => string;
  export default template;
}
