<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';

const props = defineProps<{
  id: number
  number:number
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto w-full max-w-5xl">
      <h2 class="mb-6 text-center text-4xl font-bold tracking-tight text-white italic">
        Debug = <span class="text-cyan-400">Scientific Method</span>
      </h2>
      <p class="mb-10 text-center text-slate-400">
        Đừng "đoán" bug. Hãy tiếp cận nó như một nhà khoa học đang làm thí nghiệm.
      </p>

      <div class="relative grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-2">
        <div class="group relative flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-cyan-400/50">
          <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-xl font-bold text-cyan-400">1</div>
          <h3 class="mb-2 font-bold text-white">Observe</h3>
          <p class="text-center text-md] leading-relaxed text-slate-400 italic">
            Thu thập log, screenshot, network trace. Xác định lỗi là gì?
          </p>
        </div>

        <div class="group relative flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-purple-400/50">
          <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-xl font-bold text-purple-400">2</div>
          <h3 class="mb-2 font-bold text-white">Reproduce</h3>
          <p class="text-center text-md] leading-relaxed text-slate-400 italic">
            Tìm "Minimal Path" để lỗi luôn xảy ra. Nếu không tái hiện được = Chưa hiểu lỗi.
          </p>
        </div>

        <div class="group relative flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-yellow-400/50">
          <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20 text-xl font-bold text-yellow-400">3</div>
          <h3 class="mb-2 font-bold text-white">Hypothesis</h3>
          <p class="text-center text-md] leading-relaxed text-slate-400 italic">
            Đưa ra giả thuyết: "Tôi tin rằng lỗi do biến X bị null tại hàm Y".
          </p>
        </div>

        <div class="group relative flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-pink-400/50">
          <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20 text-xl font-bold text-pink-400">4</div>
          <h3 class="mb-2 font-bold text-white">Test</h3>
          <p class="text-center text-md] leading-relaxed text-slate-400 italic">
            Dùng Breakpoint/Log để chứng minh giả thuyết đúng hay sai.
          </p>
        </div>

        <div class="group relative flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-green-400/50">
          <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-xl font-bold text-green-400">5</div>
          <h3 class="mb-2 font-bold text-white">Verify</h3>
          <p class="text-center text-md] leading-relaxed text-slate-400 italic">
            Sửa code và chạy lại test case ở bước 2. Đảm bảo không gây Side Effect.
          </p>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center">
        <div class="relative overflow-hidden rounded-2xl border-2 border-dashed border-yellow-500/40 bg-yellow-500/5 px-8 py-6 text-center">
          <div class="mb-2 text-md font-bold uppercase tracking-[0.2em] text-yellow-500/60 underline underline-offset-4">The Golden Rule</div>
          <div class="text-2xl font-black text-yellow-400">
            CHỈ THAY ĐỔI <span class="rounded bg-yellow-400 px-2 py-0.5 text-slate-900">01 BIẾN SỐ</span> MỖI LẦN!
          </div>
          <p class="mt-3 text-md text-slate-400 italic">
            Nếu bạn đổi 3 thứ cùng lúc và bug biến mất, bạn sẽ không bao giờ biết thứ nào thực sự là thủ phạm.
          </p>
          <div class="absolute -right-4 -top-4 h-16 w-16 rotate-12 bg-yellow-500/10 blur-xl"></div>
        </div>
      </div>

      <div class="mt-6 flex justify-center">
        <p class="text-md text-slate-500 flex items-center gap-2">
          <span class="flex h-4 w-4 items-center justify-center rounded-full border border-slate-600 text-md">!</span>
          Nếu bước 4 thất bại, quay lại bước 3 để đưa ra giả thuyết mới. Đừng nản chí!
        </p>
      </div>
    </div>
  </BaseSlide>
</template>