<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useConfigStore } from '@/stores/config';

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log(to.name);
    next();
  },
});
</script>
<script lang="ts" setup>
const configStore = useConfigStore();
const { router_TPL } = storeToRefs(configStore);
configStore.getDomain();
</script>

<template>
  <router-view :class="[router_TPL]" />
</template>

<style lang="scss">
.main {
  @import '@/assets/css/variable/main.scss';
}
</style>
