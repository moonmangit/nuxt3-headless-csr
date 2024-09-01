<template>
  <div
    v-if="active === undefined || active === true"
    class="fixed inset-0 bg-[var(--backdrop-color)] flex items-center justify-center z-[var(--loading-z-index)]"
  >
    <main>
      loading... <span v-if="content?.message">({{ content.message }})</span>
    </main>
  </div>
</template>

<script lang="ts" setup>
const active = defineModel<boolean>("active", {
  required: false,
  default: undefined,
});

export type ModalLoadingContent = {
  message: string;
};

defineProps<{
  content?: ModalLoadingContent;
}>();
</script>

<style></style>
