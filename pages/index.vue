<template>
  <div class="flex flex-col">
    <AppBasicButton label="confirm" @click.prevent="onClick" />
  </div>
</template>

<script lang="ts" setup>
const { $dialog } = useNuxtApp();

function onClick() {
  $dialog.proceed(async () => {
    alert("start");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw new Error("some error");
  });
}
</script>

<style></style>
