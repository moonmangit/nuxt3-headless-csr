<template>
  <Teleport to="body">
    <AppModalLoading
      v-model:active="active"
      :content="{
        message: message,
      }"
    />
  </Teleport>
</template>

<script lang="ts" setup>
const { active, message } = storeToRefs(useLoadingModalStore());
</script>

<style></style>
