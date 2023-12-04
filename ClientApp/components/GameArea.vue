<script setup lang="ts">
  import { useObjectsStore } from "~/stores/objectsStore";
  import Constants from "~/Constants";

  const store = useObjectsStore();

  onUnmounted(() => {
    store.stop();
  });

  setInterval(() => {
    if(!store.isRunning) return;

    store.addRandomObject();
  }, Constants.randomObjectRate);

  const objects = computed(() => store.objects);
</script>

<template>
  <div class="w-full h-full relative border-2">
    <Object v-for="object in objects" :key="object.id" :img="object.img" :width="object.width" :height="object.height" :x="object.x" :y="object.y" />
  </div>
</template>

