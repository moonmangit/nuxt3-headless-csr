<template>
  <Teleport to="body">
    <AppConfirmModalList
      :content="confirmModalStore.$state.confirms"
      @close="confirmModalStore.remove($event)"
    />
  </Teleport>
</template>

<script lang="ts" setup>
const confirmModalStore = useConfirmModalStore();
</script>

<style></style>
