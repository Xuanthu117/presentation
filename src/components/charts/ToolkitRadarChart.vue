<script setup lang="ts">
import type { ChartConfiguration } from 'chart.js';

import BaseChart from './BaseChart.vue';
import {
  tooltipConfig,
  wrapLabel,
} from './chartUtils';

function buildConfig(): ChartConfiguration<'radar'> {
  const labels = ['DOM & CSS UI', 'State Management', 'Network & API Proxies', 'Database Query Tuning', 'Automation & E2E', 'Log Trace & Observability'].map(wrapLabel)

  return {
    type: 'radar',
    data: {
      labels,
      datasets: [
        {
          label: 'Frontend Dev',
          data: [95, 90, 75, 10, 50, 40],
          backgroundColor: 'rgba(6, 182, 212, 0.2)',
          borderColor: '#06B6D4',
          pointBackgroundColor: '#06B6D4',
          borderWidth: 2
        },
        {
          label: 'Backend Dev',
          data: [5, 40, 85, 95, 20, 95],
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          borderColor: '#8B5CF6',
          pointBackgroundColor: '#8B5CF6',
          borderWidth: 2
        },
        {
          label: 'QA / Tester',
          data: [65, 30, 85, 20, 95, 60],
          backgroundColor: 'rgba(236, 72, 153, 0.2)',
          borderColor: '#EC4899',
          pointBackgroundColor: '#EC4899',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 100,
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: { color: '#CBD5E1', font: { size: 10 } },
          ticks: { display: false }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#F8FAFC', padding: 10, font: { size: 11 } }
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