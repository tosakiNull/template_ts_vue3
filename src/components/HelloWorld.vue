<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

defineProps<{
  msg: string;
}>();
const counter = useCounterStore();
const { count, doubleCount } = storeToRefs(counter);

/**
 * @param {number}  a - a is first number
 * @param {number} b - b is second number
 * @returns {number} a+b result
 */
const add = (a: number, b: number): number => a + b;
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
    </h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
    <div>{{ add(1, 1) }}</div>
    <br />

    <button type="button" @click="counter.increment()">
      Current Count: {{ count }}
    </button>
    <br />
    {{ doubleCount }}
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
