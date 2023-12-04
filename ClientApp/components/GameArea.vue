<script setup lang="ts">
  const store = useObjectsStore();

  const target = ref<HTMLDivElement | null>(null);
  const { isOutside } = useMouseInElement(target);

  watch(isOutside, (value) => {
    store.isMouseOutside = value;
  });

  onUnmounted(() => {
    store.stop();
  });

  const objects = computed(() => store.objects);
</script>

<template>
  <div class="w-full h-full relative border-2" ref="target">
    <Object v-for="object in objects" :key="object.id" :img="object.img" :width="object.width" :height="object.height" :x="object.x" :y="object.y" />
  </div>
</template>

