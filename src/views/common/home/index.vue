<script lang="ts" setup>
import dayjs from 'dayjs';
import { ref } from 'vue';
import AsideBar from './aside/index.vue';
import test from '@/plugins/i18n'

const dd = ref(dayjs().format());
</script>
<template>
  <div class="home">
    <aside-bar />
    <!-- <div>home {{ $t('title') }}</div>
    <div>{{ dd }}</div> -->
  </div>
</template>
<style lang="scss" scoped>
.home {
  font-size: 16px;
}
</style>
