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
  const positionStyle = computed(() => `left: ${props.x}px; top: ${props.y}px;`);

  watch(() => props.x, () => {
    console.log(props.x)
  });
</script>

<template>
  <div :style="positionStyle" class="absolute">
    <img :src="img" :style="sizeStyle" class="object-cover" alt="Object Image" >
  </div>
</template>
