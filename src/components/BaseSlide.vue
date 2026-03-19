<script setup lang="ts">
defineProps<{
  id: string
  number: string
}>()
</script>

<template>
  <section :id="id" class="slide">
    <div class="slide-number">{{ number }}</div>
    <slot />
  </section>
</template>