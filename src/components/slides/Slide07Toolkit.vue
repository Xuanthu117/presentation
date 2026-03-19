<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
import ToolkitRadarChart from '../charts/ToolkitRadarChart.vue';

const props = defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div>
        <h2 class="mb-8 text-4xl font-bold text-white">Debug Toolkit Đa Tầng</h2>

        <div class="space-y-5">
          <div class="flex items-center rounded-lg bg-slate-800/50 p-4">
            <div class="mr-4 text-3xl">💻</div>
            <div>
              <h4 class="text-lg font-bold text-cyan-400">Dev Tools (Core)</h4>
              <p class="text-sm text-slate-300">VS Code Debugger, Chrome DevTools (Elements, Sources)</p>
            </div>
          </div>
          <div class="flex items-center rounded-lg bg-slate-800/50 p-4">
            <div class="mr-4 text-3xl">📊</div>
            <div>
              <h4 class="text-lg font-bold text-purple-400">Observability (Advanced)</h4>
              <p class="text-sm text-slate-300">Log Aggregation (Kibana), APM (Datadog), Distributed Tracing</p>
            </div>
          </div>
          <div class="flex items-center rounded-lg bg-slate-800/50 p-4">
            <div class="mr-4 text-3xl">🧪</div>
            <div>
              <h4 class="text-lg font-bold text-pink-400">Testing & Proxy</h4>
              <p class="text-sm text-slate-300">Charles Proxy, Postman, Cypress (E2E), Pact (Contract Test)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card  flex flex-col justify-center">
        <h3 class="mb-2 text-center text-xl font-bold text-white">Sự giao thoa kỹ năng giữa các vị trí</h3>
        <ToolkitRadarChart />
      </div>
    </div>
  </BaseSlide>
</template>