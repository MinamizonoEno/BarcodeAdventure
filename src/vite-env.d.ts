/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APPID: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
