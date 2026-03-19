<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
import TimeAllocationChart from '../charts/TimeAllocationChart.vue';

const props = defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div>
        <h1 class="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Bạn đã từng gặp bug mà <br />
          <span class="text-gradient-cyan">fix cả ngày không ra chưa?</span>
        </h1>
        <ul class="mb-8 space-y-4 text-xl text-slate-300">
          <li class="flex items-start"><span class="mr-3">😢</span> Code chạy local OK, lên production chết ngắc.</li>
          <li class="flex items-start"><span class="mr-3">🤷‍♂️</span> Tester báo lỗi nhưng "không reproduce được".</li>
          <li class="flex items-start"><span class="mr-3">📜</span> Hệ thống lớn (Microservices), log thì cả rừng mà không biết nhìn gì.</li>
        </ul>
        <div class="rounded-r-lg  border-cyan-400 bg-cyan-900/30 p-4 text-lg font-medium text-cyan-200">
          👉 Kỹ năng Debug là lằn ranh rõ nhất giữa Junior và Senior.
        </div>
      </div>
      <div class="card card-pink">
        <h3 class="mb-2 text-center text-xl font-bold text-white">Thực tế: Quỹ thời gian Dev bị "bòn rút"</h3>
        <p class="mb-4 text-center text-md text-slate-400">Thống kê trung bình thời gian trong một Sprint</p>
        <TimeAllocationChart />
      </div>
    </div>
  </BaseSlide>
</template>