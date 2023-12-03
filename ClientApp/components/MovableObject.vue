<script setup lang="ts">
  import Constants from "~/Constants";

  const props = defineProps({
    object: {
      type: GameObject,
      required: true
    }
  });

  const xValue = ref(props.object.x as number);
  const yValue = ref(props.object.y as number);

  // Didn't want to do this, but usage from props.object didn't work.
  watch(() => props.object.x, (newValue) => {
    xValue.value = newValue;
  });
  watch(xValue, (newValue) => {
    props.object.x = newValue;
  });
  watch(() => props.object.y, (newValue) => {
    yValue.value = newValue;
  });
  watch(yValue, (newValue) => {
    props.object.y = newValue;
  });

  onMounted(() => {
    const interval = setInterval(() => {
      xValue.value = applyVelocity(xValue.value, props.object.velocityX / Constants.divisionRate);
      yValue.value = applyVelocity(yValue.value, props.object.velocityY / Constants.divisionRate);

      props.object.velocityX = applyAcceleration(props.object.velocityX, props.object.accelerationX / Constants.divisionRate, props.object.maxVelocity);
      props.object.velocityY = applyAcceleration(props.object.velocityY, props.object.accelerationY / Constants.divisionRate, props.object.maxVelocity);
    }, Constants.tickRate);

    onUnmounted(() => {
      clearInterval(interval);
    });
  });

</script>

<template>
  <Object :img="object.img" :width="object.width" :height="object.height" :x="xValue" :y="yValue" />
</template>

