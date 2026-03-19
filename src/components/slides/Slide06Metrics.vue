<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
</script>

<template>
  <BaseSlide id="slide-6" number="06">
    <div class="mx-auto w-full max-w-6xl">
      <div class="mb-4 flex items-center justify-center gap-3">
        <h2 class="text-4xl font-bold text-white tracking-tight">Vòng Đời Của Bug & Chỉ Số <span class="text-indigo-400">DORA</span></h2>
      </div>

      <div class="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
        <div class="group relative overflow-hidden rounded-2xl border border-red-500/30 bg-slate-800/40 p-6 shadow-xl transition-all hover:border-red-500/60">
          <div class="mb-3 flex items-center justify-between">
            <div class="text-xs font-black uppercase tracking-[0.2em] text-red-500">MTTD</div>
            <span class="text-md font-bold text-slate-500 italic">Mean Time To Detection</span>
          </div>
          <div class="mb-2 text-xl font-bold text-white">Phát hiện Triệu chứng</div>
          <p class="text-md leading-relaxed text-slate-400">
            Thời gian từ khi <b>Bug xảy ra</b> đến khi hệ thống báo động. 
            <span class="block mt-3 rounded bg-red-500/10 px-2 py-1 font-mono text-md text-red-300">
              Goal: Cải thiện nhờ Monitoring & Alerting.
            </span>
          </p>
        </div>

        <div class="group relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-slate-800/40 p-6 shadow-xl transition-all hover:border-yellow-500/60">
          <div class="mb-3 flex items-center justify-between">
            <div class="text-xs font-black uppercase tracking-[0.2em] text-yellow-500">MTTR</div>
            <span class="text-md font-bold text-slate-500 italic">Mean Time To Recovery</span>
          </div>
          <div class="mb-2 text-xl font-bold text-white">Khôi phục Dịch vụ</div>
          <p class="text-md leading-relaxed text-slate-400">
            DORA cốt lõi: Thời gian từ khi nhận diện lỗi đến khi <b>Service chạy lại bình thường</b>.
            <span class="block mt-3 rounded bg-yellow-500/10 px-2 py-1 font-mono text-md text-yellow-300">
              Goal: Rollback nhanh hoặc Blue/Green Deploy.
            </span>
          </p>
        </div>

        <div class="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-slate-800/40 p-6 shadow-xl transition-all hover:border-green-500/60">
          <div class="mb-3 flex items-center justify-between">
            <div class="text-xs font-black uppercase tracking-[0.2em] text-green-500">CFR</div>
            <span class="text-md font-bold text-slate-500 italic">Change Failure Rate</span>
          </div>
          <div class="mb-2 text-xl font-bold text-white">Tỷ lệ Lỗi Thay đổi</div>
          <p class="text-md leading-relaxed text-slate-400">
            % số lần Deploy gây ra sự cố nghiêm trọng. Chỉ số đo lường <b>chất lượng code</b>.
            <span class="block mt-3 rounded bg-green-500/10 px-2 py-1 font-mono text-md text-green-300">
              Goal: Tăng cường Code Review & Unit Test.
            </span>
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="flex flex-col rounded-xl border border-slate-700 bg-slate-900/80 p-6 transition-all hover:bg-slate-900">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">🛡️</div>
            <h4 class="text-sm font-bold uppercase tracking-widest text-slate-200">MTBF: Mean Time Between Failures</h4>
          </div>
          <p class="text-sm leading-relaxed text-slate-400 italic">
            "Đừng chỉ tự hào vì sửa lỗi nhanh (MTTR), hãy tự hào vì hệ thống có thể chạy ổn định trong thời gian dài (MTBF)."
            <span class="mt-4 block border-t border-slate-800 pt-3 text-md text-cyan-500/80">
              👉 MTBF tăng = Hệ thống bền bỉ (Resilience).
            </span>
          </p>
        </div>

        <div class="flex flex-col rounded-xl border border-slate-700 bg-slate-900/80 p-6 transition-all hover:bg-slate-900">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">🔍</div>
            <h4 class="text-sm font-bold uppercase tracking-widest text-slate-200">Quy trình RCA (Root Cause Analysis)</h4>
          </div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="rounded-lg bg-slate-800 p-2 border border-slate-700">
               <div class="text-md text-purple-400 font-bold uppercase">What</div>
               <div class="text-md text-slate-300">Sự cố gì?</div>
            </div>
            <div class="rounded-lg bg-slate-800 p-2 border border-slate-700">
               <div class="text-md text-purple-400 font-bold uppercase">Why</div>
               <div class="text-md text-slate-300">Tại sao? (5 Whys)</div>
            </div>
            <div class="rounded-lg bg-slate-800 p-2 border border-slate-700">
               <div class="text-md text-purple-400 font-bold uppercase">How</div>
               <div class="text-md text-slate-300">Chống tái diễn?</div>
            </div>
          </div>
          <p class="mt-4 text-md text-slate-500 leading-tight">
            Mục tiêu: Biến mọi sự cố thành một <b>Automated Test Case</b> để lỗi đó không bao giờ quay trở lại.
          </p>
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <div class="flex items-center gap-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 px-8 py-3">
          <div class="text-center">
            <div class="text-md text-indigo-400 font-bold uppercase">Elite Status</div>
            <div class="text-sm font-bold text-white">MTTR &lt; 1 Hour</div>
          </div>
          <div class="h-8 w-px bg-indigo-500/20"></div>
          <div class="text-center">
            <div class="text-md text-indigo-400 font-bold uppercase">Reliability</div>
            <div class="text-sm font-bold text-white">CFR 0 - 15%</div>
          </div>
          <div class="h-8 w-px bg-indigo-500/20"></div>
          <p class="max-w-[200px] text-md italic text-slate-400">
            Theo báo cáo DORA 2024, các team dẫn đầu luôn ưu tiên <b>MTTR</b> hơn là việc không bao giờ có lỗi.
          </p>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>