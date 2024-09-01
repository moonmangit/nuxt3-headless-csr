<template>
  <ul>
    <li v-for="ctn in content" :key="ctn.id">
      <AppConfirmModal :content="ctn" @close="$emit('close', ctn.id)" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ConfirmModalContent } from "./ConfirmModal.vue";

export type ConfirmModalListContent = ConfirmModalContent & { id: string };

defineProps<{
  content: ConfirmModalListContent[];
}>();

defineEmits<{
  (e: "close", id: string): void;
}>();
</script>

<style></style>
