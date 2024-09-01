<template>
  <ul>
    <li v-for="ctn in contents" :key="ctn.id">
      <AppToastItem
        :content="ctn"
        @timeout="$emit('timeout', ctn.id)"
        @close="$emit('close', ctn.id)"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ToastItemContent } from "./ToastItem.vue";

export type ToastListItemContent = ToastItemContent & { id: string };

defineProps<{
  contents: ToastListItemContent[];
}>();

defineEmits<{
  (e: "timeout", id: string): void;
  (e: "close", id: string): void;
}>();
</script>

<style></style>
