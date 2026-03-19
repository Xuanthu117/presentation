<script setup lang="ts">
defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <section :id="id.toString()" class="slide">
    <div class="slide-number">{{ number }}</div>
    <slot />
  </section>
</template>