<script setup lang="ts">
const store = useObjectsStore();

const visible = computed({
  get: () => store.failDialog,
  set: (value) => {
    store.failDialog = value;
  }
});

const hideDialog = () => {
  visible.value = false;
};
</script>

<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" position="center">
    <div class="flex">
      <div class="pt-8 m-auto inline-flex gap-4 items-center flex-col">
        <span class="text-4xl">GAME OVER!</span>

        <Button severity="secondary" label="OK" @click="hideDialog" />
      </div>
    </div>
  </Dialog>
</template>
