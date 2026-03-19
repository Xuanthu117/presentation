<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';

const props = defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto w-full max-w-6xl">
      <div class="mb-4 flex items-center justify-center gap-3">
        <h2 class="text-4xl font-bold text-white uppercase tracking-tighter">Vũ khí hạng nặng: <span class="text-blue-400">Backend (BE)</span></h2>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="group relative rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 flex flex-col justify-between transition-all hover:border-blue-500/50">
          <div>
            <h3 class="mb-4 text-lg font-bold text-white border-b border-blue-500/30 pb-2 flex items-center gap-2">
              <span class="text-blue-400">💻</span> Runtime & IDE
            </h3>
            <ul class="space-y-4 text-md text-slate-300">
              <li>
                <b class="text-blue-200">Remote Debugging:</b> 
                Kết nối IDE trực tiếp với ứng dụng đang chạy trong Docker hoặc Staging qua JDWP/Debugger port.
              </li>
              <li>
                <b class="text-blue-200">Evaluate Expression:</b> 
                Chạy thử các đoạn code logic ngay tại thời điểm breakpoint mà không cần khởi động lại server.
              </li>
              <li>
                <b class="text-blue-200">Database Profiler:</b> 
                Sử dụng SQL Explain để tìm nguyên nhân Slow Query trực tiếp từ IDE.
              </li>
            </ul>
          </div>
          <div class="mt-4 flex justify-between items-center border-t border-slate-800 pt-3">
            <span class="text-md text-blue-400/60 font-mono italic">Local/Staging</span>
            <div class="flex gap-1">
              <div class="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <div class="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
            </div>
          </div>
        </div>

        <div class="group relative rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 flex flex-col justify-between transition-all hover:border-cyan-500/50">
          <div>
            <h3 class="mb-4 text-lg font-bold text-white border-b border-cyan-500/30 pb-2 flex items-center gap-2">
              <span class="text-cyan-400">📡</span> Observability
            </h3>
            <ul class="space-y-4 text-md text-slate-300">
              <li>
                <b class="text-cyan-200">Distributed Tracing (Jaeger):</b> 
                Truy vết một request đi qua bao nhiêu Microservices và tắc nghẽn ở đâu.
              </li>
              <li>
                <b class="text-cyan-200">Kibana Query:</b> 
                Sử dụng <code>traceId</code> để gôm tất cả log của 1 phiên giao dịch từ hàng triệu dòng log.
              </li>
              <li>
                <b class="text-cyan-200">Grafana Alerts:</b> 
                Tự động báo động khi tỷ lệ lỗi 5xx vượt ngưỡng (Threshold).
              </li>
            </ul>
          </div>
          <div class="mt-4 flex justify-between items-center border-t border-slate-800 pt-3">
            <span class="text-md text-cyan-400/60 font-mono italic">Infrastructure</span>
            <div class="flex gap-1">
              <div class="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
              <div class="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
            </div>
          </div>
        </div>

        <div class="group relative rounded-2xl border border-red-500/20 bg-slate-900/60 p-6 flex flex-col justify-between transition-all hover:border-red-500/50">
          <div>
            <h3 class="mb-4 text-lg font-bold text-white border-b border-red-500/30 pb-2 flex items-center gap-2">
              <span class="text-red-400">🚨</span> Prod Safety
            </h3>
            <div class="space-y-4">
              <div class="rounded-lg bg-red-500/5 p-3 border border-red-500/10">
                <b class="text-sm text-red-300">Sentry Breadcrumbs</b>
                <p class="text-md text-slate-400 mt-1 italic">
                  Xem lại "lịch sử hành vi" của ứng dụng 5 phút trước khi crash: Request nào đã gọi, DB trả về gì?
                </p>
              </div>
              <div class="rounded-lg bg-slate-800 p-3 border border-slate-700">
                <b class="text-sm text-slate-200">Memory Dump Analysis</b>
                <p class="text-md text-slate-400 mt-1 italic">
                  Phân tích file Heap Dump để tìm thủ phạm gây OutOfMemory (OOM).
                </p>
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-between items-center border-t border-slate-800 pt-3">
            <span class="text-md text-red-400/60 font-mono italic">Production</span>
            <div class="flex gap-1">
              <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
              <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
              <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 rounded-xl bg-blue-500/5 border border-blue-500/20 p-4 text-center">
        <p class="text-md text-slate-400">
          💡 <span class="text-blue-400 font-bold uppercase">Golden Rule:</span> 
          Trong Backend, <b>Logs</b> là lịch sử, <b>Metrics</b> là hiện tại, và <b>Tracing</b> là bản đồ. Thiếu 1 trong 3, bạn đang "mù" khi debug Production.
        </p>
      </div>
    </div>
  </BaseSlide>
</template>