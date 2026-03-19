<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';

const props = defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto w-full max-w-6xl text-center">
      <div class="mb-6 flex flex-col items-center">
        <h2 class="text-4xl font-extrabold text-white uppercase tracking-tighter">Vũ khí hạng nặng: <span class="text-pink-400">Tester / QA</span></h2>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="group relative rounded-3xl border border-pink-500/30 bg-slate-800/40 p-8 text-left transition-all hover:bg-slate-800/60">
          <div class="absolute -top-4 left-6 bg-pink-600 px-4 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg">UI Automation Debug</div>
          <h3 class="mb-6 text-xl font-bold text-white flex items-center gap-2">
            <span class="text-pink-400">🎭</span> Visual Traceability
          </h3>
          <div class="space-y-6">
            <div class="space-y-2">
              <b class="text-pink-300 text-sm italic">Cypress / Playwright Dashboard:</b>
              <p class="text-md text-slate-400 leading-relaxed">
                <b>• Time-travel Debugging:</b> Di chuột qua từng dòng lệnh test để xem trạng thái UI tại đúng thời điểm đó.
              </p>
              <p class="text-md text-slate-400 leading-relaxed">
                <b>• Trace Viewer:</b> Xem lại toàn bộ Network, Console logs và DOM snapshot của một lần chạy lỗi trên CI/CD.
              </p>
            </div>
            <div class="space-y-2">
              <b class="text-pink-300 text-sm italic">Cross-browser Consistency:</b>
              <p class="text-md text-slate-400 leading-relaxed">
                <b>• Selenium / BrowserStack:</b> Debug lỗi chỉ xuất hiện trên một trình duyệt hoặc thiết bị cụ thể (ví dụ: Mobile Safari).
              </p>
            </div>
          </div>
        </div>

        <div class="group relative rounded-3xl border border-indigo-500/30 bg-slate-800/40 p-8 text-left transition-all hover:bg-slate-800/60">
          <div class="absolute -top-4 left-6 bg-indigo-600 px-4 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg">Protocol & Load</div>
          <h3 class="mb-6 text-xl font-bold text-white flex items-center gap-2">
            <span class="text-indigo-400">📡</span> API & Performance
          </h3>
          <div class="space-y-6">
            <div class="space-y-2">
              <b class="text-indigo-300 text-sm italic">Postman Advanced:</b>
              <p class="text-md text-slate-400 leading-relaxed">
                <b>• Scripting:</b> Tự động kiểm tra JSON Schema và Validate dữ liệu trả về ngay khi chạy test.
              </p>
              <p class="text-md text-slate-400 leading-relaxed">
                <b>• Mock Servers:</b> Giả lập API khi Backend chưa sẵn sàng để test sớm logic của Frontend.
              </p>
            </div>
            <div class="space-y-2">
              <b class="text-indigo-300 text-sm italic">Performance Bottlenecks:</b>
              <p class="text-md text-slate-400 leading-relaxed">
                <b>• JMeter / k6:</b> Debug lỗi "Race Condition" hoặc "Memory Leak" khi hệ thống bị quá tải bởi hàng nghìn request cùng lúc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-left">
          <p class="text-md font-bold uppercase text-slate-500 mb-1">QA Goal #1</p>
          <p class="text-xs text-slate-300">Không chỉ báo "lỗi", mà hãy báo "tại sao lỗi" kèm log/video.</p>
        </div>
        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-left">
          <p class="text-md font-bold uppercase text-slate-500 mb-1">QA Goal #2</p>
          <p class="text-xs text-slate-300">Xây dựng bộ Test Case gối đầu (Regression) tự động hóa hoàn toàn.</p>
        </div>
        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-left">
          <p class="text-md font-bold uppercase text-slate-500 mb-1">QA Goal #3</p>
          <p class="text-xs text-slate-300">Đảm bảo lỗi đã được fix "tận gốc" và không làm hỏng tính năng khác.</p>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>