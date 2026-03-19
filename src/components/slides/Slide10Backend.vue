<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';

const props = defineProps<{
  id: number
  number: number
}>();
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto w-full max-w-6xl">
      <div class="mb-10 text-center">
       
        <h2 class="text-4xl font-extrabold tracking-tight text-white">
          Backend Debugging: <span class="text-emerald-400">Hệ Thống Phân Tán</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        
        <div class="space-y-5 lg:col-span-5">
          <div class="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/40 p-5 transition-all hover:border-indigo-500/50 hover:bg-slate-800/80">
            <div class="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <h3 class="mb-2 flex items-center gap-3 font-bold text-white">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">🆔</span>
              Correlation ID
            </h3>
            <p class="text-md leading-relaxed text-slate-400">
              Gắn <code>X-Request-ID</code> vào Header. Khi User báo lỗi, bạn lọc được toàn bộ hành trình của request qua 10 services khác nhau chỉ bằng 1 câu query.
            </p>
          </div>

          <div class="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/40 p-5 transition-all hover:border-emerald-500/50 hover:bg-slate-800/80">
            <div class="absolute left-0 top-0 h-full w-1 bg-emerald-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <h3 class="mb-2 flex items-center gap-3 font-bold text-white">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">📊</span>
              Distributed Tracing
            </h3>
            <p class="text-md leading-relaxed text-slate-400">
              Dùng Jaeger/OpenTelemetry vẽ <b>Gantt Chart</b>. Trực quan hóa "nút thắt cổ chai" (Bottleneck) để biết request đang chạy tuần tự hay song song.
            </p>
          </div>

          <div class="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/40 p-5 transition-all hover:border-amber-500/50 hover:bg-slate-800/80">
            <div class="absolute left-0 top-0 h-full w-1 bg-amber-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <h3 class="mb-2 flex items-center gap-3 font-bold text-white">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">⚔️</span>
              Race Condition
            </h3>
            <p class="text-md leading-relaxed text-slate-400">
              Sử dụng <b>Distributed Lock</b> (Redis) hoặc Idempotency Key để ngăn chặn 2 request cùng sửa một bản ghi Database tại cùng một thời điểm.
            </p>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0d1117] shadow-2xl">
            <div class="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-3">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500">Datadog / Jaeger Tracing</span>
              </div>
              <div class="flex gap-2 font-mono text-[10px] text-slate-400">
                <span class="rounded bg-slate-800 px-2 py-1">Trace ID: <span class="text-indigo-400">req-9f8a7b</span></span>
                <span class="rounded bg-red-500/10 px-2 py-1 text-red-400">Error: 500</span>
              </div>
            </div>

            <div class="flex-1 p-5 font-mono text-xs">
              <div class="relative mb-2 flex justify-between text-[10px] text-slate-600 border-b border-slate-800 pb-1">
                <span>0ms</span>
                <span>50ms</span>
                <span>100ms</span>
                <span>150ms</span>
                <span>200ms</span>
              </div>

              <div class="relative space-y-3 pt-2">
                <div class="flex items-center gap-3">
                  <div class="w-24 shrink-0 truncate text-slate-300">API Gateway</div>
                  <div class="relative h-4 w-full rounded bg-slate-800/50">
                    <div class="absolute left-0 top-0 h-full w-full rounded bg-blue-500/80"></div>
                  </div>
                  <div class="w-8 shrink-0 text-right text-slate-500">200ms</div>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-24 shrink-0 pl-3 text-slate-400">↳ Auth</div>
                  <div class="relative h-4 w-full rounded bg-slate-800/50">
                    <div class="absolute left-[5%] top-0 h-full w-[20%] rounded bg-emerald-500/80"></div>
                  </div>
                  <div class="w-8 shrink-0 text-right text-slate-500">40ms</div>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-24 shrink-0 pl-3 text-slate-400">↳ Order_Svc</div>
                  <div class="relative h-4 w-full rounded bg-slate-800/50">
                    <div class="absolute left-[25%] top-0 h-full w-[70%] rounded bg-purple-500/80"></div>
                  </div>
                  <div class="w-8 shrink-0 text-right text-slate-500">140ms</div>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-24 shrink-0 pl-6 text-slate-500">↳ Redis Lock</div>
                  <div class="relative h-4 w-full rounded bg-slate-800/50">
                    <div class="absolute left-[30%] top-0 h-full w-[5%] rounded bg-amber-500/80"></div>
                  </div>
                  <div class="w-8 shrink-0 text-right text-slate-500">10ms</div>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-24 shrink-0 pl-6 text-slate-500">↳ DB Update</div>
                  <div class="relative h-4 w-full rounded bg-slate-800/50">
                    <div class="absolute left-[35%] top-0 h-full w-[60%] rounded bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                    <span class="absolute left-[40%] top-0 text-[10px] text-white font-bold leading-4">Deadlock detected</span>
                  </div>
                  <div class="w-8 shrink-0 text-right text-red-400">120ms</div>
                </div>
              </div>
            </div>
            
            <div class="border-t border-slate-800 bg-slate-900/30 p-3 text-center">
              <p class="text-[11px] text-slate-400 italic">
                👉 Nhìn vào biểu đồ, ta thấy lỗi thực sự nằm ở <b>DB Update</b> (Race Condition), nhưng nếu không có <b>Trace ID</b>, log sẽ chỉ báo "API Gateway Timeout 500".
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </BaseSlide>
</template>