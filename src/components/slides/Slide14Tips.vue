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
      <div class="mb-10 text-center">
        <span class="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 text-md font-bold text-cyan-400">
          ⚡ Actionable & AI Tips
        </span>
        <h2 class="text-4xl font-extrabold text-white tracking-tight">Tips Thực Chiến & Ứng Dụng AI</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div class="space-y-4">
          <h3 class="flex items-center gap-2 text-lg font-bold text-slate-400 uppercase tracking-widest mb-4">
            <span class="h-1 w-8 bg-slate-700"></span> Core Principles
          </h3>
          
          <div class="flex items-center rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:translate-x-2">
            <span class="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xl font-bold text-cyan-400">1</span>
            <p class="text-[15px] text-white">Luôn <b>Reproduce</b> được lỗi trước khi gõ phím. Nếu không tái hiện được, bạn đang "đoán" chứ không phải "sửa".</p>
          </div>

          <div class="flex items-center rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:translate-x-2">
            <span class="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xl font-bold text-cyan-400">2</span>
            <p class="text-[15px] text-white">Đọc kỹ <b>Error Message</b>. Hint luôn nằm ở dòng đầu hoặc cuối Stack Trace. Đừng bỏ qua "Caused by...".</p>
          </div>

          <div class="flex items-center rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:translate-x-2">
            <span class="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xl font-bold text-cyan-400">3</span>
            <p class="text-[15px] text-white"><b>Isolate</b>: Chia nhỏ để trị. Comment code hoặc dùng <i>Git Stash</i> để cô lập vùng nghi vấn.</p>
          </div>
        </div>

        <div class="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6 shadow-2xl shadow-purple-900/10">
          <h3 class="flex items-center gap-2 text-lg font-bold text-purple-400 uppercase tracking-widest mb-6">
             <span class="h-1 w-8 bg-purple-500/30"></span> AI Pair Programmer Tips
          </h3>

          <div class="space-y-6">
            <div class="group">
              <h4 class="flex items-center gap-2 font-bold text-white mb-1">
                <span class="text-purple-400">🤖</span> Prompt "Context-First"
              </h4>
              <p class="text-md text-slate-400 leading-relaxed">
                Đừng chỉ đưa lỗi. Hãy đưa: <b>Code hiện tại + Lỗi + Mong muốn</b>. AI sẽ phân tích được data flow thay vì chỉ check cú pháp.
              </p>
            </div>

            <div class="group">
              <h4 class="flex items-center gap-2 font-bold text-white mb-1">
                <span class="text-purple-400">🔍</span> "Explain this Stack Trace"
              </h4>
              <p class="text-md text-slate-400 leading-relaxed">
                Dán toàn bộ log lỗi vào AI và hỏi: <i>"Phân tích nguyên nhân tiềm ẩn và liệt kê 3 bước kiểm tra nhanh."</i>
              </p>
            </div>

            <div class="group">
              <h4 class="flex items-center gap-2 font-bold text-white mb-1">
                <span class="text-purple-400">🧪</span> AI-Generated Unit Tests
              </h4>
              <p class="text-md text-slate-400 leading-relaxed">
                Sau khi fix, hãy yêu cầu AI: <i>"Viết 5 test cases bao gồm edge cases cho hàm này để tránh regression."</i>
              </p>
            </div>

            <div class="mt-4 rounded-lg bg-slate-900/80 p-3 border border-purple-500/20">
              <p class="text-md text-purple-300 italic">
                ⚠️ Cảnh báo: Luôn kiểm tra lại code AI gợi ý. Nó có thể "hallucinate" (ảo tưởng) ra các hàm không tồn tại trong project của bạn.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <div class="relative inline-block">
          <span class="absolute -left-6 -top-4 text-4xl text-slate-700">“</span>
          <p class="text-2xl italic text-slate-300">
            If you can’t explain the bug → <span class="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">bạn chưa thực sự hiểu nó</span>
          </p>
          <span class="absolute -right-6 -bottom-4 text-4xl text-slate-700">”</span>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>