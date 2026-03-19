<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
import TimeAllocationChart from '../charts/TimeAllocationChart.vue';
</script>

<template>
  <BaseSlide id="slide-1" number="01">
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-1">
      <div>
        <h1 class="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Debug Toolkit <br />
          <span class="text-gradient-cyan"> Tìm bug nhanh – hiểu lỗi rõ – fix code gọn</span>
        </h1>
        <ul class="mb-8 space-y-4 text-xl text-slate-300">
          <li class="flex items-start"><span class="mr-3">😢</span> Code chạy local OK, lên production chết ngắc.</li>
          <li class="flex items-start"><span class="mr-3">🤷‍♂️</span> Tester báo lỗi nhưng "không reproduce được".</li>
          <li class="flex items-start"><span class="mr-3">📜</span> Hệ thống lớn (Microservices), log thì cả rừng mà không biết nhìn gì.</li>
        </ul>
        <div class="rounded-r-lg  border-cyan-400 bg-cyan-900/30 p-4 text-lg font-medium text-cyan-200">
        Cách debug hiệu quả với mindset đúng, công cụ quen thuộc như VS Code , devtool và teamwork tốt, giúp dev & tester tìm bug nhanh, hiểu lỗi rõ và fix code chính xác hơn.
        </div>
      </div>
    </div>
  </BaseSlide>
</template>