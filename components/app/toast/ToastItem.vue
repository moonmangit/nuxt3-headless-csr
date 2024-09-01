<template>
  <div>
    ({{ percent }}% {{ seconds }}s)
    <button type="button" @click.prevent="$emit('close')">
      <Icon name="mdi:close" />
    </button>
    <pre>
      {{ content }}
    </pre>
  </div>
</template>

<script lang="ts" setup>
export type ToastItemContent = {
  title: string;
  message: string;
  iconName: string;
  lifeSec: number;
  variant: "info" | "success" | "warning" | "error";
};

const props = defineProps<{
  content: ToastItemContent;
}>();

const emits = defineEmits<{
  (e: "close"): void;
  (e: "timeout"): void;
}>();

const tickPerSec = 1;
const tick = ref(0);
const percent = ref(0);
const seconds = computed(() => {
  return tick.value * tickPerSec;
});
setInterval(() => {
  tick.value++;
  percent.value = (tick.value / props.content.lifeSec) * 100;
  if (tick.value >= props.content.lifeSec) {
    emits("timeout");
  }
}, tickPerSec * 1000);
</script>

<style></style>
