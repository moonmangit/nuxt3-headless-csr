<template>
  <button
    class="flex w-fit items-center rounded-xl"
    :class="{
      'aspect-square': iconName && !label,
    }"
  >
    <span v-if="label">{{ label }}</span>
    <Icon v-if="iconName" :name="iconName" />
  </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";

withDefaults(
  defineProps<{
    label?: string;
    iconName?: string;
    iconPos: "left" | "right";
    type: ButtonHTMLAttributes["type"];
  }>(),
  {
    label: undefined,
    iconName: undefined,
    type: "button",
    iconPos: "left",
  },
);
</script>

<style scoped></style>
