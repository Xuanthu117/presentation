<script setup lang="ts">
import type { ChartConfiguration } from 'chart.js';

import BaseChart from './BaseChart.vue';
import {
  tooltipConfig,
  wrapLabel,
} from './chartUtils';

function buildConfig(): ChartConfiguration<'doughnut'> {
  const labels = ['Làm tính năng mới', 'Fix & Truy vết Bug', 'Họp & CI/CD', 'Code Review & Refactor'].map(wrapLabel)

  return {
    type: 'doughnut',
    data: {
      labels,
      datasets: [
        {
          data: [35, 40, 15, 10],
          backgroundColor: ['#06B6D4', '#EC4899', '#8B5CF6', '#F59E0B'],
          borderWidth: 0,
          hoverOffset: 10
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { color: '#F8FAFC', padding: 15, font: { size: 12 } }
        },
        tooltip: tooltipConfig
      },
      cutout: '65%'
    }
  }
}
</script>

<template>
  <BaseChart :build-config="buildConfig" />
</template>