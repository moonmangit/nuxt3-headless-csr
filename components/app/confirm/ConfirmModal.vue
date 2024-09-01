<template>
  <AppModalSlot>
    <main class="flex-1">
      <button @click.prevent="$emit('close')">close</button>
      <slot>
        <pre>{{ content }}</pre>
      </slot>
      <button @click.prevent="content.onCancel()">cancel</button>
      <button @click.prevent="content.onConfirm()">confirm</button>
    </main>
  </AppModalSlot>
</template>

<script lang="ts" setup>
export type ConfirmModalContent = {
  title: string;
  message: string;
  variant: "info" | "warning" | "error";
  onConfirm: () => void;
  onCancel: () => void;
};

defineModel<boolean>("active", {
  required: false,
});

defineProps<{
  content: ConfirmModalContent;
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>

<style></style>
