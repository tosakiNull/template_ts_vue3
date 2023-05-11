import './entry';
import { createApp } from 'vue';
import store from './stores';
import i18n from './plugins/i18n';
import router from './router';
import App from './App.vue';
import 'element-plus/dist/index.css';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(i18n);

app.mount('#app');
