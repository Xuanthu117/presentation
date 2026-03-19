<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';

const props = defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto w-full max-w-5xl">
      <div class="mb-10 text-center">
        <span class="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-1 text-md font-bold text-yellow-500 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          The Growth Mindset
        </span>
        <h2 class="text-4xl font-extrabold tracking-tight text-white">Lộ Trình Nâng Cấp <span class="text-yellow-500">Debug Skill</span></h2>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="group flex items-start gap-5 rounded-2xl border border-slate-700 bg-slate-800/40 p-6 transition-all hover:bg-slate-800 hover:border-yellow-500/30">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-3xl transition-transform group-hover:scale-110">🤔</div>
          <div>
            <h3 class="text-lg font-bold text-white">Kỹ thuật "5 Whys"</h3>
            <p class="mt-2 text-md leading-relaxed text-slate-400 italic">
              Đừng dừng lại ở việc fix lỗi. Hãy hỏi "Tại sao?" cho đến khi tìm thấy lỗi thiết kế hoặc lỗi tư duy ban đầu.
              <span class="block mt-2 font-semibold text-yellow-500/80">→ Hiểu bản chất > Fix triệu chứng.</span>
            </p>
          </div>
        </div>

        <div class="group flex items-start gap-5 rounded-2xl border border-slate-700 bg-slate-800/40 p-6 transition-all hover:bg-slate-800 hover:border-yellow-500/30">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-3xl transition-transform group-hover:scale-110">🛑</div>
          <div>
            <h3 class="text-lg font-bold text-white">Nói không với "Quick Fix"</h3>
            <p class="mt-2 text-md leading-relaxed text-slate-400 italic">
              Một dòng code sửa tạm bợ hôm nay là 10 giờ OT ngày mai. Luôn viết Unit Test cho bug vừa tìm thấy.
              <span class="block mt-2 font-semibold text-yellow-500/80">→ Regression Test là tấm khiên bảo vệ bạn.</span>
            </p>
          </div>
        </div>

        <div class="group flex items-start gap-5 rounded-2xl border border-slate-700 bg-slate-800/40 p-6 transition-all hover:bg-slate-800 hover:border-yellow-500/30">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-3xl transition-transform group-hover:scale-110">🥋</div>
          <div>
            <h3 class="text-lg font-bold text-white">Thám hiểm node_modules</h3>
            <p class="mt-2 text-md leading-relaxed text-slate-400 italic">
              Khi gặp bug thư viện, đừng ngại nhảy vào Source Code của nó. Đây là cách nhanh nhất để học kiến trúc code từ các chuyên gia hàng đầu thế giới.
              <span class="block mt-2 font-semibold text-yellow-500/80">→ Nâng tầm từ User lên Contributor.</span>
            </p>
          </div>
        </div>

        <div class="group flex items-start gap-5 rounded-2xl border border-slate-700 bg-slate-800/40 p-6 transition-all hover:bg-slate-800 hover:border-yellow-500/30">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-3xl transition-transform group-hover:scale-110">🧰</div>
          <div>
            <h3 class="text-lg font-bold text-white">Mài bén "Vũ khí"</h3>
            <p class="mt-2 text-md leading-relaxed text-slate-400 italic">
              Làm chủ IDE Shortcuts, Debugger Breakpoints, và các công cụ Monitor như Datadog/Sentry.
              <span class="block mt-2 font-semibold text-yellow-500/80">→ Tiết kiệm 30% thời gian thao tác thừa.</span>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 to-transparent p-8">
        <div class="flex flex-col items-center gap-4 text-center">
          <p class="text-lg font-medium text-slate-300">
            "A bug is never just a mistake. It is an <span class="text-yellow-500 font-bold underline underline-offset-4">opportunity</span> to understand the system better than the person who wrote it."
          </p>
          <div class="mt-2 flex items-center gap-4">
            <div class="h-px w-12 bg-slate-700"></div>
            <span class="text-md font-mono text-slate-500 tracking-widest uppercase">Summary Checklist</span>
            <div class="h-px w-12 bg-slate-700"></div>
          </div>
          <div class="flex gap-6 text-xs font-bold text-slate-400 uppercase tracking-tighter">
             <span class="flex items-center gap-2"><span class="text-yellow-500">✓</span> Reproduce First</span>
             <span class="flex items-center gap-2"><span class="text-yellow-500">✓</span> Isolate Variables</span>
             <span class="flex items-center gap-2"><span class="text-yellow-500">✓</span> Automate Verification</span>
          </div>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>