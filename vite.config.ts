import { fileURLToPath, URL } from 'node:url';
import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      // imports: ['vue'], // 自動導入 Vue 相關函数，如：ref, reactive, toRef 等
      resolvers: [
        ElementPlusResolver(), // 自動導入 Element Plus 相關函数，如：ElMessage, ElMessageBox... (带樣式)
        IconsResolver({
          prefix: 'Icon', // 自動導入Icon组件
        }),
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'), // 自動導入函數的type
    }),
    Components({
      resolvers: [
        ElementPlusResolver(), // 自動導入 Element Plus 组件
        IconsResolver({ // 自動註冊icon组件
          enabledCollections: ['ep'],
        }),
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'), // 自動導入組件的type
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Env: fileURLToPath(new URL('./src/env', import.meta.url)),
      // '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  server: {
    host: '0.0.0.0',
  },
});
