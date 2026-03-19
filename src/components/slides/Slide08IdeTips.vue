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
      <h2 class="mb-10 text-center text-4xl font-bold text-white tracking-tight">
        <span class="text-blue-400">VS Code</span> / IDE Debugging
      </h2>

      <div class="mb-8 grid grid-cols-2 gap-4 text-center md:grid-cols-4 lg:gap-6">
        <div class="group rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-red-500/50">
          <div class="mb-2 text-3xl transition-transform group-hover:scale-110">🔴</div>
          <h3 class="text-md font-bold text-white">Breakpoint</h3>
          <p class="mt-1 text-md] leading-snug text-slate-400 font-medium">Dừng code tại dòng chỉ định để "đóng băng" trạng thái.</p>
        </div>
        <div class="group rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-cyan-500/50">
          <div class="mb-2 text-3xl transition-transform group-hover:scale-110">⏭️</div>
          <h3 class="text-md font-bold text-white">Step Over/Into</h3>
          <p class="mt-1 text-md] leading-snug text-slate-400 font-medium">Kiểm soát luồng thực thi: Đi qua hoặc đi sâu vào hàm.</p>
        </div>
        <div class="group rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-purple-500/50">
          <div class="mb-2 text-3xl transition-transform group-hover:scale-110">🔍</div>
          <h3 class="text-md font-bold text-white">Inspect Vars</h3>
          <p class="mt-1 text-md] leading-snug text-slate-400 font-medium">Di chuột xem giá trị biến hoặc thay đổi chúng ngay khi runtime.</p>
        </div>
        <div class="group rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-pink-500/50">
          <div class="mb-2 text-3xl transition-transform group-hover:scale-110">📚</div>
          <h3 class="text-md font-bold text-white">Call Stack</h3>
          <p class="mt-1 text-md] leading-snug text-slate-400 font-medium">Truy ngược call stack của lỗi: Hàm nào đã kích hoạt hàm này?</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-5 shadow-lg">
          <h3 class="mb-2 flex items-center gap-2 text-lg font-bold text-cyan-400">
            <span class="h-2 w-2 rounded-full bg-cyan-400"></span>
            Conditional Breakpoints
          </h3>
          <p class="text-md leading-relaxed text-slate-300">
            Dừng code dựa trên biểu thức logic. <br/>
            <code class="mt-2 block rounded bg-slate-800 px-2 py-1 text-md text-cyan-200 italic">Example: item.id === 999 && isError === true</code>
          </p>
        </div>

        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-5 shadow-lg">
          <h3 class="mb-2 flex items-center gap-2 text-lg font-bold text-purple-400">
            <span class="h-2 w-2 rounded-full bg-purple-400"></span>
            Logpoints (Zero Cleanup)
          </h3>
          <p class="text-md leading-relaxed text-slate-300">
            Ghi log trực tiếp vào Debug Console mà <b>không cần thêm <code>console.log</code></b> vào code. Không lo quên xóa log khi đẩy lên git.
          </p>
        </div>

        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-5 shadow-lg md:col-span-2 lg:col-span-1">
          <h3 class="mb-2 flex items-center gap-2 text-lg font-bold text-amber-400">
            <span class="h-2 w-2 rounded-full bg-amber-400"></span>
            Watch Expressions
          </h3>
          <p class="text-md leading-relaxed text-slate-300">
            Theo dõi sự thay đổi của một biến hoặc một biểu thức phức tạp liên tục mà không cần Re-eval liên tục trong console.
          </p>
        </div>
      </div>

      <div class="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 md:flex-row">
        <div class="flex-1">
          <h4 class="text-lg font-bold text-indigo-300">💡 Tip: Debugging Source Maps</h4>
          <p class="mt-1 text-md text-slate-400 leading-relaxed">
            Kết nối trực tiếp DevTools trên Browser với VS Code. Bạn có thể đặt Breakpoint trong VS Code và Browser sẽ dừng lại chính xác tại dòng code TypeScript đã được biên dịch.
          </p>
        </div>
        <div class="shrink-0 rounded-lg bg-indigo-500/20 px-4 py-2 text-md font-mono text-indigo-300 border border-indigo-500/30">
          launch.json configuration
        </div>
      </div>
    </div>
  </BaseSlide>
</template>