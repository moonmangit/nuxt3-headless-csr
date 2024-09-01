<template>
  <Teleport to="body">
    <AppToastList
      :contents="toastStore.$state.toasts"
      class="fixed top-0 right-0"
      @timeout="toastStore.remove($event)"
      @close="toastStore.remove($event)"
    />
  </Teleport>
</template>

<script lang="ts" setup>
const toastStore = useToastStore();
</script>

<style></style>
