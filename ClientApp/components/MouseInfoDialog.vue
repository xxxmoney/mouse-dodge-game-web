<script setup lang="ts">
  const store = useObjectsStore();

  const visible = computed(() => store.isMouseOutside && store.isRunning);
</script>

<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <div class="pt-5">
      <span class="m-auto text-4xl">Please move your mouse to play area!</span>
    </div>
  </Dialog>
</template>

<style>
  .p-dialog-header {
    display: none !important;
  }
</style>