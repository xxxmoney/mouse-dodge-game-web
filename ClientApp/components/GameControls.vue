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

  const objectsCount = computed(() => store.objects.length);
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <div>
      <span class="text-2xl">Game Status: </span>
      <span class="text-2xl font-bold">{{ isRunning ? 'Running' : 'Stopped' }}</span>
    </div>
    <div>
      <span class="text-2xl">Objects: </span>
      <span class="text-2xl font-bold">{{ objectsCount }}</span>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center gap-5">
      <Button severity="success" label="Start" @click="start()" :disabled="isRunning" />
      <Button severity="secondary" label="Stop" @click="stop()" :disabled="!isRunning" />
      <Button severity="danger" label="Reset" @click="reset()" />
    </div>
  </div>
</template>
