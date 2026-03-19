<script setup lang="ts">
import type { ChartConfiguration } from 'chart.js';

import BaseChart from './BaseChart.vue';
import {
  tooltipConfig,
  wrapLabel,
} from './chartUtils';

function buildConfig(): ChartConfiguration<'bar'> {
  const labels = ['Race Condition', 'Memory Leak (SSR)', 'Flaky E2E Test', 'N+1 Query', 'CSS Layout Shift'].map(wrapLabel)

  return {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Log / Đoán mò (Phút)',
          data: [480, 360, 240, 180, 45],
          backgroundColor: '#334155',
          borderRadius: 4
        },
        {
          label: 'Advanced Tools (Phút)',
          data: [60, 45, 30, 10, 5],
          backgroundColor: '#06B6D4',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94A3B8' },
          title: { display: true, text: 'Thời gian fix - MTTR (Phút)', color: '#94A3B8' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#94A3B8', maxRotation: 0, minRotation: 0, font: { size: 11 } }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: { color: '#F8FAFC', font: { size: 11 } }
        },
        tooltip: tooltipConfig
      }
    }
  }
}
</script>

<template>
  <BaseChart :build-config="buildConfig" />
</template>