import { acceptHMRUpdate, defineStore } from 'pinia';
// import versionNumber from '@/env/version.json';
import versionNumber from '@/env/version.json';
import * as siteConfigDev from '@/env/dev';
import * as siteConfigProd from '@/env/prod';
import type { siteType } from '@/env/typings';

// to Lang Code Standard
const switchLang = (lang: string | null) => {
  const op = lang ? lang.toLowerCase() : '';
  switch (op) {
    // 英文
    case 'en':
    case 'en-us':
    case 'us':
      return 'en';
    // 繁中
    case 'zh-tw':
    case 'tw':
    case 'big5':
      return 'zh-tw';
    // 簡中
    case 'zh-cn':
    case 'cn':
    case 'gb':
      return 'zh-cn';
    // 泰文
    case 'th':
      return 'th';
    // 日文
    case 'ja':
    case 'jp':
    case 'euc-jp':
      return 'ja';
    // 韓文
    case 'ko':
    case 'kr':
    case 'euc-kr':
      return 'ko';
    // 越南文
    case 'vi':
    case 'vn':
      return 'vi';
    default:
      return 'zh-cn';
  }
};

export interface ConfigState {
  domain: string | null;
  targetSite: siteType | null;
  version: string | null;
  langcode: string | null;
}

export const useConfigStore = defineStore('config', {
  state: (): ConfigState => ({
    domain: window.SITE_DOMAIN,
    targetSite: {},
    version: versionNumber.version,
    langcode: window.LANG,
  }),
  getters: {
    lang: (state: ConfigState) => switchLang(state.langcode),
    router_TPL: (state:ConfigState) => state.targetSite?.ROUTER_TPL,
  },
  actions: {
    getDomain() {
      this.targetSite = siteConfigDev[`site_${this.domain}` as keyof object] || siteConfigProd[`site_${this.domain}` as keyof object];
    },
  },
});

// Pinia HMR
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot));
}
