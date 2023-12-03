<script setup lang="ts">
  import Constants from "~/Constants";

  const props = defineProps({
    object: {
      type: GameObject,
      required: true
    }
  });

  onMounted(() => {
    const interval = setInterval(() => {
      props.object.x = applyVelocity(props.object.x, props.object.velocityX / Constants.divisionRate);
      props.object.y = applyVelocity(props.object.y, props.object.velocityY / Constants.divisionRate);

      props.object.velocityX = applyAcceleration(props.object.velocityX, props.object.accelerationX / Constants.divisionRate, props.object.maxVelocity / Constants.divisionRate);
      props.object.velocityY = applyAcceleration(props.object.velocityY, props.object.accelerationY / Constants.divisionRate, props.object.maxVelocity / Constants.divisionRate);
    }, Constants.tickRate);

    onUnmounted(() => {
      clearInterval(interval);
    });
  });

</script>

<template>
  <Object :img="object.img" :width="object.width" :height="object.height" :x="object.x" :y="object.y" />
</template>

