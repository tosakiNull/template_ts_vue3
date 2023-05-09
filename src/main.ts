import './entry';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
// pinia
import store from '@/stores/index';
// I18n
import i18n from '@/plugins/i18n';
import App from './App.vue';
import router from './router/index';
// UI Import
import 'element-plus/dist/index.css';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(ElementPlus);

app.mount('#app');
