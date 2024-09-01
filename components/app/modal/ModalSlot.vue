<template>
  <Teleport to="body">
    <div
      v-if="active === undefined || active === true"
      class="fixed inset-0 flex items-center justify-center z-[var(--modal-z-index)] bg-[var(--backdrop-color)]"
    >
      <main class="min-w-[350px] max-w-[95dvw] max-h-[95dvh] flex bg-white">
        <slot />
      </main>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const active = defineModel<boolean>("active", {
  required: false,
  default: undefined,
});
</script>

<style></style>
