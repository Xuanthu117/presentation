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
        <h2 class="text-4xl font-bold text-white uppercase tracking-tighter">Devtool: <span class="text-orange-400">Frontend (FE)</span></h2>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="lg:col-span-2 rounded-2xl border border-orange-500/30 bg-slate-800/60 p-6 shadow-xl relative overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-5 grayscale pointer-events-none">🌐</div>
          
          <div class="mb-6 flex items-center gap-3 border-b border-orange-500/20 pb-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-3xl">🛠️</div>
            <div>
              <h3 class="text-xl font-bold text-white">Chrome DevTools (Power Features)</h3>
              <p class="text-xs text-slate-400">Hơn cả việc kiểm tra phần tử, đây là một môi trường gỡ lỗi toàn diện.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div class="space-y-4">
              <div>
                <h4 class="text-sm font-bold text-orange-300 uppercase mb-2">Network & Performance</h4>
                <ul class="space-y-2 text-md text-slate-300">
                  <li><b>• Throttling:</b> Giả lập mạng 3G/Slow 3G để check Race Condition.</li>
                  <li><b>• HAR Export:</b> Xuất log mạng để BE/QA có thể "xem lại" lỗi.</li>
                  <li><b>• Lighthouse:</b> Phân tích Core Web Vitals và Performance bottlenecks.</li>
                </ul>
              </div>
              <div>
                <h4 class="text-sm font-bold text-orange-300 uppercase mb-2">Sources (The Real Debugger)</h4>
                <ul class="space-y-2 text-md text-slate-300">
                  <li><b>• Conditional Breakpoints:</b> Chỉ dừng khi biến thỏa mãn điều kiện.</li>
                  <li><b>• Logpoints:</b> In log mà không cần sửa code (không cần console.log).</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="text-sm font-bold text-orange-300 uppercase mb-2">Elements & Console</h4>
                <ul class="space-y-2 text-md text-slate-300">
                  <li><b>• DOM Breakpoints:</b> Tự động dừng khi một element bị thay đổi style/attr.</li>
                  <li><b>• CSS Mirror Editing:</b> Sửa CSS trực tiếp và đồng bộ ngược lại source.</li>
                  <li><b>• Console Utilities:</b> Sử dụng <code>$0</code> (item đang chọn) hoặc <code>copy()</code> dữ liệu.</li>
                </ul>
              </div>
              <div class="rounded-lg bg-orange-500/5 p-3 border border-orange-500/10">
                <p class="text-md text-orange-200/70 italic">
                  💡 <b>Pro Tip:</b> Nhấn <code>Cmd + Shift + P</code> để mở Command Menu, giúp tìm nhanh mọi tính năng ẩn.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="group rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 transition-all hover:bg-emerald-500/10">
            <h4 class="mb-2 font-bold text-emerald-400 flex items-center gap-2">
               <span class="text-xl transition-transform group-hover:rotate-180">🟢</span> Vue / React Devtools
            </h4>
            <ul class="text-md text-slate-400 space-y-1">
              <li>• Theo dõi <b>Re-render</b>: Tại sao component chạy lại quá nhiều?</li>
              <li>• Chỉnh sửa <b>Props/State</b> trực tiếp để test các case đặc biệt.</li>
            </ul>
          </div>

          <div class="group rounded-xl border border-purple-500/30 bg-purple-500/5 p-4 transition-all hover:bg-purple-500/10">
            <h4 class="mb-2 font-bold text-purple-400 flex items-center gap-2">
               <span class="text-xl transition-transform group-hover:scale-110">🟣</span> Pinia / Redux Devtools
            </h4>
            <ul class="text-md text-slate-400 space-y-1">
              <li>• <b>State Snapshot:</b> Lưu lại trạng thái app lúc lỗi và gửi cho đồng nghiệp.</li>
              <li>• <b>Action Tracing:</b> Lỗi này do Action nào kích hoạt?</li>
            </ul>
          </div>

          <div class="group rounded-xl border border-blue-500/30 bg-blue-500/5 p-4 transition-all hover:bg-blue-500/10">
            <h4 class="mb-1 text-sm font-bold text-blue-400 flex items-center justify-center gap-2">
              Postman / Insomnia
            </h4>
            <p class="text-md text-slate-500 text-center leading-relaxed">
              Dùng để <b>Isolate</b>: Kiểm tra xem lỗi do Logic Backend trả về sai hay do Frontend hiển thị sai.
            </p>
          </div>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>