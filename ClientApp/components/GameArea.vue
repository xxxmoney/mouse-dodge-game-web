<script setup lang="ts">

  const objects: any[] = [
      new GameObject("https://picsum.photos/200/300", 50, 50, 400, 100, 0.1),
  ];

</script>

<template>
  <div class="w-full h-full relative border-2">
    <MovableObject v-for="object in objects" :object="object"
  />
  </div>
</template>

