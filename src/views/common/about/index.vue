<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
<template>
  <div class="home">
    about {{ $t('title') }}
  </div>
</template>
<style lang="scss" scoped>
.home {
  font-size: 16px;
}
</style>
