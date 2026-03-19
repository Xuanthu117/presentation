<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  useTemplateRef,
} from 'vue';

import type { ChartConfiguration } from 'chart.js';
import Chart from 'chart.js/auto';

const props = defineProps<{
  buildConfig: () => ChartConfiguration<'doughnut' | 'radar' | 'bar'>
}>()

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
let chart: Chart<'doughnut' | 'radar' | 'bar'> | null = null

onMounted(() => {
  const context = canvas.value?.getContext('2d')
  if (!context) return

  chart = new Chart(context, props.buildConfig())
})

onBeforeUnmount(() => {
  chart?.destroy()
  chart = null
})
</script>

<template>
  <div class="chart-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>