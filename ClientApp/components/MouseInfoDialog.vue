<script setup lang="ts">
  const store = useObjectsStore();

  const visible = computed(() => store.isMouseOutside && store.isRunning);
</script>

<template>
  <Dialog v-model:visible="visible" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" position="top">
    <div class="pt-8 flex flex-row justify-center">
      <span class="text-4xl">Please move your mouse to play area!</span>
    </div>
  </Dialog>
</template>
