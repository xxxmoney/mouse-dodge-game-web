<script setup lang="ts">
  const store = useObjectsStore();

  const isRunning = computed(() => store.isRunning);

  const start = () => {
    store.start();
  }
  const stop = () => {
    store.stop();
  }
  const reset = () => {
    store.reset();
  }
</script>

<template>
  <div class="m-auto">
    <span class="text-2xl">Game Status: </span>
    <span class="text-2xl font-bold">{{ isRunning ? 'Running' : 'Stopped' }}</span>
  </div>
  <div class="flex flex-row justify-center gap-5">
    <button class="btn-primary" @click="start()" :disabled="isRunning">Start</button>
    <button class="btn-primary" @click="stop()" :disabled="!isRunning">Stop</button>
    <button class="btn-primary" @click="reset()">Reset</button>
  </div>
</template>

<style scoped>
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
</style>
