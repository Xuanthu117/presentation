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
      <h2 class="mb-8 text-center text-4xl font-bold text-white tracking-tight">
        8 Chiến Thuật <span class="text-cyan-400">Debug</span> Phổ Biến
      </h2>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-xl border border-slate-700 bg-slate-800/40 p-4 transition-all hover:bg-slate-800">
          <div class="mb-3 text-2xl text-cyan-400 font-bold">01</div>
          <h3 class="mb-2 font-bold text-white">Backtracking</h3>
          <p class="text-md leading-relaxed text-slate-400">
            Lần ngược từ điểm crash về phía trước. "Dữ liệu sai từ đâu chui ra?" - Cực kỳ hiệu quả cho logic Front-end.
          </p>
        </div>

        <div class="rounded-xl border border-slate-700 bg-slate-800/40 p-4 transition-all hover:bg-slate-800">
          <div class="mb-3 text-2xl text-purple-400 font-bold">02</div>
          <h3 class="mb-2 font-bold text-white">Cause Elimination</h3>
          <p class="text-md leading-relaxed text-slate-400">
            Liệt kê mọi nguyên nhân có thể, sau đó dùng test để loại trừ từng cái (Binary Search logic).
          </p>
        </div>

        <div class="rounded-xl border border-slate-700 bg-slate-800/40 p-4 transition-all hover:bg-slate-800">
          <div class="mb-3 text-2xl text-yellow-400 font-bold">03</div>
          <h3 class="mb-2 font-bold text-white">Program Slicing</h3>
          <p class="text-md leading-relaxed text-slate-400">
            Cô lập một đoạn code nghi vấn và chạy nó trong môi trường test riêng biệt (Unit Test / Sandbox).
          </p>
        </div>

        <div class="rounded-xl border border-slate-700 bg-slate-800/40 p-4 transition-all hover:bg-slate-800">
          <div class="mb-3 text-2xl text-pink-400 font-bold">04</div>
          <h3 class="mb-2 font-bold text-white">Rubber Ducking</h3>
          <p class="text-md leading-relaxed text-slate-400">
            Giải thích dòng code cho "chú vịt cao su". Khi bạn nói ra thành lời, não bộ sẽ tự nhận diện điểm vô lý.
          </p>
        </div>

        <div class="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-4 transition-all hover:bg-indigo-500/10 shadow-lg">
          <div class="mb-3 text-2xl text-indigo-400 font-bold">05</div>
          <h3 class="mb-2 font-bold text-white italic">Static Analysis</h3>
          <p class="text-md leading-relaxed text-slate-400">
            Sử dụng ESLint, SonarQube để bắt lỗi "ngớ ngẩn" (typo, unused var) ngay khi đang gõ code.
          </p>
        </div>

        <div class="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-4 transition-all hover:bg-indigo-500/10 shadow-lg">
          <div class="mb-3 text-2xl text-indigo-400 font-bold">06</div>
          <h3 class="mb-2 font-bold text-white italic">Memory Profiling</h3>
          <p class="text-md leading-relaxed text-slate-400">
            Phân tích Heap Snapshot để tìm <b>Memory Leaks</b>. Đặc biệt quan trọng cho Single Page Apps (Vue/React).
          </p>
        </div>

        <div class="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-4 transition-all hover:bg-indigo-500/10 shadow-lg">
          <div class="mb-3 text-2xl text-indigo-400 font-bold">07</div>
          <h3 class="mb-2 font-bold text-white italic">Binary Search (Git)</h3>
          <p class="text-md leading-relaxed text-slate-400">
            Dùng <code>git bisect</code> để tìm ra chính xác Commit nào đã làm hỏng hệ thống. "Cỗ máy thời gian" của Dev.
          </p>
        </div>

        <div class="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-4 transition-all hover:bg-indigo-500/10 shadow-lg">
          <div class="mb-3 text-2xl text-indigo-400 font-bold">08</div>
          <h3 class="mb-2 font-bold text-white italic">Brute Force</h3>
          <p class="text-md leading-relaxed text-slate-400">
            Cách cuối cùng: In log mọi nơi. Chỉ dùng khi bạn hoàn toàn mất phương hướng và cần "soi sáng" luồng data.
          </p>
        </div>
      </div>

      <div class="mt-8 flex flex-col md:flex-row gap-6 items-center justify-between border-t border-slate-700 pt-6">
        <div class="flex items-center gap-4">
          <div class="h-3 w-3 rounded-full bg-slate-400"></div>
          <span class="text-md text-slate-400 italic">Reactive: Đợi bug xảy ra mới sửa</span>
        </div>
        <div class="text-2xl text-slate-600 hidden md:block">⟷</div>
        <div class="flex items-center gap-4">
          <div class="h-3 w-3 rounded-full bg-cyan-400 animate-pulse"></div>
          <span class="text-md text-cyan-400 font-bold">Proactive: Dùng Tool & Analysis để chặn bug từ sớm</span>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>