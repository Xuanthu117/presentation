<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
</script>

<template>
  <BaseSlide id="slide-10" number="10">
    <div class="mx-auto w-full max-w-6xl">
     
      <h2 class="mb-10 text-center text-4xl font-bold tracking-tight text-white">
        Backend Debugging: <span class="text-green-400">Hệ Thống Phân Tán</span>
      </h2>

      <div class="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
        <div class="space-y-6">
          <div class="group rounded-xl border border-slate-700 bg-slate-800/40 p-5 transition-all hover:bg-slate-800">
            <h3 class="mb-2 flex items-center font-bold text-green-400">
              <span class="mr-2 text-xl">🆔</span> Correlation ID & Context
            </h3>
            <p class="text-sm leading-relaxed text-slate-300">
              Gắn <code>X-Request-ID</code> vào Header. Khi một User báo lỗi, bạn có thể lọc toàn bộ hành trình của request đó qua 10 services khác nhau chỉ bằng 1 câu query duy nhất.
            </p>
          </div>

          <div class="group rounded-xl border border-slate-700 bg-slate-800/40 p-5 transition-all hover:bg-slate-800">
            <h3 class="mb-2 flex items-center font-bold text-green-400">
              <span class="mr-2 text-xl">📊</span> Distributed Tracing
            </h3>
            <p class="text-sm leading-relaxed text-slate-300">
              Sử dụng Jaeger/OpenTelemetry để vẽ biểu đồ <b>Gantt Chart</b>. Phát hiện các request đang chạy tuần tự (Sequential) thay vì song song (Parallel) gây lãng phí thời gian.
            </p>
          </div>

          <div class="group rounded-xl border border-slate-700 bg-slate-800/40 p-5 transition-all hover:bg-slate-800">
            <h3 class="mb-2 flex items-center font-bold text-green-400">
              <span class="mr-2 text-xl">⚔️</span> Race Condition & Idempotency
            </h3>
            <p class="text-sm leading-relaxed text-slate-300">
              Sử dụng <b>Redis Distributed Lock</b> để ngăn chặn 2 request cùng sửa một bản ghi Database tại cùng một thời điểm (ví dụ: trừ tiền ví điện tử).
            </p>
          </div>
        </div>

        <div class="flex flex-col rounded-2xl border border-red-500/30 bg-slate-900/80 p-6 shadow-2xl shadow-red-900/10">
          <h3 class="mb-4 flex items-center border-b border-slate-800 pb-3 text-xl font-bold text-white">
            <span class="mr-2 text-2xl text-red-500">🛡️</span> Resilience Patterns
          </h3>
          
          <div class="mb-6 space-y-3">
            <p class="text-sm font-medium text-slate-200 italic">"Don't let one slow service kill the whole cluster."</p>
            <p class="text-md leading-relaxed text-slate-400">
              Khi Service A gọi Service B đang bị "lag", Service A sẽ bị treo thread và cạn kiệt tài nguyên. Đây gọi là <b>Cascading Failure</b>.
            </p>
          </div>

          <div class="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
            <div class="mb-3 flex items-center justify-between">
              <span class="text-md font-bold uppercase tracking-widest text-red-500">Cơ chế Circuit Breaker (Bộ ngắt mạch)</span>
              <span class="rounded bg-red-500/20 px-2 py-0.5 text-md text-red-200">Pro Tip</span>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-md">1</div>
                <div>
                  <p class="text-md font-bold text-slate-200 uppercase">Closed State</p>
                  <p class="text-md] text-slate-400 leading-tight">Mọi thứ bình thường. Request được chuyển tiếp.</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-md">2</div>
                <div>
                  <p class="text-md font-bold text-slate-200 uppercase">Open State (Ngắt)</p>
                  <p class="text-md] text-slate-400 leading-tight">Lỗi vượt ngưỡng (ví dụ 50% fail). Chặn đứng mọi request để Service B có thời gian "hồi sức".</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-md">3</div>
                <div>
                  <p class="text-md font-bold text-slate-200 uppercase">Half-Open</p>
                  <p class="text-md] text-slate-400 leading-tight">Cho phép một lượng nhỏ request đi qua để test xem Service B đã sống lại chưa.</p>
                </div>
              </div>
            </div>

            <p class="mt-4 border-t border-red-500/20 pt-3 text-md] font-medium text-red-200 italic">
              👉 Debug thực tế: Khi thấy lỗi 503 (Service Unavailable) hàng loạt, hãy check ngay trạng thái của Circuit Breaker thay vì chỉ đọc log code.
            </p>
          </div>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>