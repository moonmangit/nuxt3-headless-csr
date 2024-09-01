<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ToastService />
    <ConfirmModalService />
    <LoadingModalService />
  </div>
</template>

<script lang="ts" setup>
import ConfirmModalService from "./components/parts/services/ConfirmModalService.vue";
import ToastService from "./components/parts/services/ToastService.vue";
</script>
   
  </div>
