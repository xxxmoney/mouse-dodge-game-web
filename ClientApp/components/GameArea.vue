<script setup lang="ts">
  const store = useObjectsStore();

  const target = ref<HTMLDivElement | null>(null);
  const mouseInfo = useMouseInElement(target);
  const { width, height } = useElementSize(target);

  watch(mouseInfo.isOutside, (value) => {
    store.isMouseOutside = value;
  });
  watch([width, height], ([width, height]) => {
    store.areaWidth = width;
    store.areaHeight = height;
  });
  watch([mouseInfo.elementX, mouseInfo.elementY], ([x, y]) => {
    store.mouseX = x;
    store.mouseY = y;
  });

  onUnmounted(() => {
    store.stop();
  });

  const objects = computed(() => store.objects);
</script>

<template>
  <div class="w-full h-full relative border-2" ref="target">
    <Object v-for="object in objects" :key="object.id" :img="object.img" :width="object.width" :height="object.height" :x="object.position.x" :y="object.position.y" />
  </div>
</template>

