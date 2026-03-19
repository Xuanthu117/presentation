<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
</script>

<template>
  <BaseSlide id="slide-9" number="09">
    <div class="mx-auto w-full max-w-6xl">
      <h2 class="mb-10 text-center text-4xl font-bold tracking-tight text-white">
        Frontend Debugging: <span class="text-cyan-400">Basic</span> to <span class="text-purple-500">Deep Dive</span>
      </h2>

      <div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div class="group rounded-2xl border border-slate-700 bg-slate-800/40 p-6 transition-all hover:bg-slate-800">
          <div class="mb-4 flex items-center gap-3">
            <span class="text-3xl transition-transform group-hover:scale-110">🎨</span>
            <h3 class="text-xl font-bold text-white">Lớp Ngoài (UI)</h3>
          </div>
          <ul class="space-y-3 text-sm text-slate-400">
            <li class="flex gap-2">
              <span class="text-cyan-500 font-bold">✔</span>
              <span><b>Network:</b> Kiểm tra <code>Payload</code> (Data gửi đi) & <code>Preview</code> (Data trả về) để biết lỗi tại BE hay FE.</span>
            </li>
            <li class="flex gap-2">
              <span class="text-cyan-500 font-bold">✔</span>
              <span><b>DevTools:</b> Debug State realtime qua Pinia/Vue DevTools thay vì gõ <code>console.log</code>.</span>
            </li>
            <li class="flex gap-2">
              <span class="text-cyan-500 font-bold">✔</span>
              <span><b>CSS Box Model:</b> Xử lý lỗi layout/vỡ frame bằng tính năng <i>Inspect Element</i>.</span>
            </li>
          </ul>
        </div>

        <div class="group rounded-2xl border border-cyan-500/30 bg-slate-800/40 p-6 transition-all hover:bg-slate-800">
          <div class="mb-4 flex items-center gap-3">
            <span class="text-3xl transition-transform group-hover:scale-110">🔥</span>
            <h3 class="text-xl font-bold text-cyan-400">Hiệu năng (Perf)</h3>
          </div>
          <ul class="space-y-3 text-sm text-slate-400">
            <li class="flex gap-2">
              <span class="text-cyan-500 font-bold">✔</span>
              <span><b>Flamegraphs:</b> Tìm "Long Tasks" hoặc các component bị Re-render liên tục gây giật lag (Jank).</span>
            </li>
            <li class="flex gap-2">
              <span class="text-cyan-500 font-bold">✔</span>
              <span><b>Optimization:</b> Sử dụng <code>memo</code>, <code>v-once</code> hoặc <code>shallowRef</code> để giảm tải tính toán.</span>
            </li>
            <li class="flex gap-2">
              <span class="text-cyan-500 font-bold">✔</span>
              <span><b>Throttling:</b> Giả lập mạng chậm (3G) hoặc CPU yếu để test trải nghiệm người dùng cuối.</span>
            </li>
          </ul>
        </div>

        <div class="group rounded-2xl border border-purple-500/30 bg-slate-800/40 p-6 transition-all hover:bg-slate-800">
          <div class="mb-4 flex items-center gap-3">
            <span class="text-3xl transition-transform group-hover:scale-110">🧠</span>
            <h3 class="text-xl font-bold text-purple-400">Chuyên sâu (Core)</h3>
          </div>
          <ul class="space-y-3 text-sm text-slate-400">
            <li class="flex gap-2">
              <span class="text-purple-500 font-bold">✔</span>
              <span><b>Memory Leak:</b> Dùng <code>Heap Snapshot</code> tìm Detached DOM (Element đã bị xóa khỏi UI nhưng vẫn nằm trong RAM).</span>
            </li>
            <li class="flex gap-2">
              <span class="text-purple-500 font-bold">✔</span>
              <span><b>SSR/Hydration:</b> Debug lỗi lệch data giữa Client và Server (Hydration Mismatch) trong Nuxt/Next.js.</span>
            </li>
            <li class="flex gap-2">
              <span class="text-purple-500 font-bold">✔</span>
              <span><b>Event Loop:</b> Debug Task vs Microtask để hiểu luồng thực thi async phức tạp.</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-cyan-950/20 px-8 py-5 text-center transition-all hover:scale-[1.01]">
        <div class="relative z-10 flex flex-col items-center justify-center gap-2">
          <span class="text-xl font-bold text-cyan-100">
            💡 <span class="text-cyan-400 italic">"The Console is not enough."</span>
          </span>
          <p class="max-w-2xl text-sm text-slate-400 leading-relaxed">
            Hơn 80% bug Frontend nghiêm trọng không nằm ở Syntax, mà nằm ở <b>Data Flow</b> sai lệch, 
            <b>State</b> không đồng nhất và <b>Memory Leak</b> làm chậm trình duyệt theo thời gian.
          </p>
        </div>
        <div class="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl"></div>
        <div class="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
    </div>
  </BaseSlide>
</template>