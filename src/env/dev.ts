import type { presetType, siteType } from '@/env/typings';

export const preset:presetType = {
  DOMIAN: 'https://bbos.bbin-asia.com/elibomApi/WebService',
};

export const site_500015:siteType = {
  ...preset,
  ROUTER_TPL: 'main',
};
