<template>
  <div>
    <Button label="hello" @click.prevent="toggleDarkMode" />
  </div>
</template>

<script lang="ts" setup>
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}
</script>

<style></style>
