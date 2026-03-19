<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
import ImpactBarChart from '../charts/ImpactBarChart.vue';

const props = defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
      
      <div class="flex flex-col justify-center">
       

        <h2 class="mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
          Kết Luận
        </h2>

        <ul class="mb-10 flex flex-col space-y-4 text-lg text-slate-300">
          <li class="group flex items-center rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 transition-all hover:bg-slate-800/80 hover:shadow-md">
            <div class="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span><strong class="font-bold text-white">Debug</strong> là skill định hình cấp độ kỹ sư.</span>
          </li>
          
          <li class="group flex items-center rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 transition-all hover:bg-slate-800/80 hover:shadow-md">
            <div class="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Làm đúng quy trình (<strong class="font-bold text-white">Scientific Method</strong>).</span>
          </li>
          
          <li class="group flex items-center rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 transition-all hover:bg-slate-800/80 hover:shadow-md">
            <div class="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Kết hợp <strong class="font-bold text-white">Tools cơ bản</strong> (Breakpoint) + <strong class="font-bold text-white">Tools nâng cao</strong> (Tracing/Profiler).</span>
          </li>
        </ul>

        <div class="relative overflow-hidden rounded-r-2xl border-l-4 border-cyan-400 bg-gradient-to-r from-cyan-900/40 to-slate-900/40 p-6 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
          <div class="absolute -right-4 -top-4 text-6xl opacity-10">💡</div>
          <p class="text-2xl font-extrabold tracking-tight text-cyan-300 md:text-3xl">
            👉 Debug smarter, <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">not harder.</span>
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-center">
        <div class="relative rounded-2xl border border-slate-700 bg-slate-800/60 p-6 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]">
          <div class="absolute inset-x-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

          <div class="mb-6 text-center">
            <h3 class="mb-1 text-2xl font-bold text-white">Tác động của Advanced Toolkit đến MTTR</h3>
            <p class="text-md font-medium text-slate-400">So sánh thời gian xử lý bug cực đoan (Phút)</p>
          </div>

          <div class="relative h-[320px] w-full md:h-[380px]">
            <ImpactBarChart />
          </div>
        </div>
      </div>

    </div>
  </BaseSlide>
</template>