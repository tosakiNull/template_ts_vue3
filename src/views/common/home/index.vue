<script lang="ts" setup>
import dayjs from 'dayjs';
import { ref } from 'vue';

const dd = ref(dayjs().format());
</script>
<template>
  <div class="home">
    <div>home {{ $t('title') }}</div>
    <div>{{ dd }}</div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  font-size: 16px;
}
</style>
