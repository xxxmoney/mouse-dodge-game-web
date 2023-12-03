<script setup lang="ts">

  const objects: any[] = [
      new GameObject("https://picsum.photos/200/300", 50, 50, 400, 100, 50),
  ];

</script>

<template>
  <div class="w-full h-full relative border-2">
    <MovableObject v-for="(object, index) in objects" :object="object" :key="index"
  />
  </div>
</template>

