<script setup lang="ts">
  const props = defineProps({
    img: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  })

  const sizeStyle = computed(() => `width: ${props.width}px; height: ${props.height}px;`);
  const positionStyle = computed(() => `transform: translate(${props.x}px, ${props.y}px) translate(-50%, -50%);`);
</script>

<template>
  <div :style="positionStyle" class="absolute transform">
    <img :src="img" :style="sizeStyle" class="object-cover" alt="Object Image" >
  </div>
</template>
