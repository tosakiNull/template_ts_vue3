import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import zhCn from '@/languages/zh-cn.json';
import en from '@/languages/en.json';
// import { useConfigStore } from '@/stores/config';
import { useConfigStore } from '@/stores/config';

const messages = {
  en,
  'zh-cn': zhCn,
};

const install = (app: App) => {
  const cookieStore = useConfigStore();
  const i18n = createI18n({
    globalInjection: true,
    locale: cookieStore.lang,
    messages,
    legacy: false,
  });
  app.use(i18n);
};

export default { install };
