<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';

const props = defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto w-full max-w-5xl text-center">
      <h2 class="mb-12 text-4xl font-bold text-white">
        Từ "Fix Bug" đến "Observability"
      </h2>

      <img
        src="/assets/fixbug.webp"
        alt="Curse"
        class="inline-block w-full max-w-xs mx-auto mb-12"
      />
      <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          class="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-left"
        >
          <div
            class="mb-4 flex items-center border-b border-slate-700 pb-2 text-2xl font-bold text-slate-300"
          >
            <span class="mr-2 text-red-400">❌</span> Tư duy Basic (Reactive)
          </div>
          <ul class="space-y-3 text-slate-400">
            <li>• Sửa lỗi random, thử sai cầu may.</li>
            <li>• Đợi User/QA report lỗi rồi mới cuống cuồng tìm.</li>
            <li>• Xem Bug là kẻ thù cần phải tiêu diệt nhanh chóng.</li>
          </ul>
        </div>
        <div
          class="rounded-2xl border border-purple-500/50 bg-gradient-to-br from-slate-800 to-purple-900/40 p-8 text-left"
        >
          <div
            class="mb-4 flex items-center border-b border-purple-500/30 pb-2 text-2xl font-bold text-purple-300"
          >
            <span class="mr-2 text-green-400">✅</span> Tư duy Advanced
            (Proactive)
          </div>
          <ul class="space-y-3 text-white">
            <li>• Sửa lỗi = Hiểu hệ thống đang làm gì sai.</li>
            <li>
              • Observability: Xây dựng code tự báo cáo qua Metrics/Traces.
            </li>
            <li>• Xem Bug = Data quý giá giúp hiểu sâu hệ thống.</li>
          </ul>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>
