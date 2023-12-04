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
    <Button severity="success" label="Start" @click="start()" />
    <Button severity="secondary" label="Stop" @click="stop()" />
    <Button severity="danger" label="Reset" @click="reset()" />
  </div>
</template>
