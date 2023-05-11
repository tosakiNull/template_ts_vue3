<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import welcome from '@/components/TheWelcome.vue';

export default defineComponent({
  name: 'MenuTab',
  components: {
    welcome,
  },
  props: {
    dataArray: { type: Array as PropType<T>, required: true },
    data: { type: Boolean, required: true },
  },
  setup(props) {
    return {};
  },
});
</script>

<template>
  <welcome />
</template>

<style lang="scss" scoped></style>
