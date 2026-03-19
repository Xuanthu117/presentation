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
      <div class="mb-12 text-center">
        <h2 class="text-4xl font-black tracking-tight text-white uppercase">
          Chân Dung <span class="text-purple-500 italic">"The Master Debugger"</span>
        </h2>
        <p class="mt-2 text-slate-400 font-medium">Kỹ năng code đưa bạn vào nghề, kỹ năng Debug đưa bạn lên đỉnh cao.</p>
      </div>

      <div class="relative mb-16 flex items-center justify-center py-10">
        <div class="absolute h-80 w-80 rounded-full border-2 border-dashed border-purple-500/10 animate-[spin_20s_linear_infinite]"></div>
        
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4 relative z-10">
          <div class="group flex flex-col items-center">
            <div class="mb-4 flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-purple-500/20 bg-slate-800 shadow-lg transition-all group-hover:-translate-y-2 group-hover:border-purple-500 group-hover:shadow-purple-500/20">
              <div class="text-center">
                <div class="mb-1 text-4xl transition-transform group-hover:scale-110">🧘‍♂️</div>
                <div class="text-md font-black uppercase tracking-tighter text-purple-400">Stoicism</div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-white leading-tight">Bình tĩnh tuyệt đối<br/>khi Prod sập</p>
          </div>

          <div class="group flex flex-col items-center">
            <div class="mb-4 flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-purple-500/20 bg-slate-800 shadow-lg transition-all group-hover:-translate-y-2 group-hover:border-purple-500 group-hover:shadow-purple-500/20">
              <div class="text-center">
                <div class="mb-1 text-4xl transition-transform group-hover:scale-110">🕵️‍♂️</div>
                <div class="text-md font-black uppercase tracking-tighter text-purple-400">Evidence</div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-white leading-tight">Tuyệt đối<br/>không đoán mò</p>
          </div>

          <div class="group flex flex-col items-center">
            <div class="mb-4 flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-purple-500/20 bg-slate-800 shadow-lg transition-all group-hover:-translate-y-2 group-hover:border-purple-500 group-hover:shadow-purple-500/20">
              <div class="text-center">
                <div class="mb-1 text-4xl transition-transform group-hover:scale-110">⏳</div>
                <div class="text-md font-black uppercase tracking-tighter text-purple-400">Persistence</div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-white leading-tight">Kiên nhẫn<br/>đến tận cùng</p>
          </div>

          <div class="group flex flex-col items-center">
            <div class="mb-4 flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-purple-500/20 bg-slate-800 shadow-lg transition-all group-hover:-translate-y-2 group-hover:border-purple-500 group-hover:shadow-purple-500/20">
              <div class="text-center">
                <div class="mb-1 text-4xl transition-transform group-hover:scale-110">🤝</div>
                <div class="text-md font-black uppercase tracking-tighter text-purple-400">Culture</div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-white leading-tight">Văn hóa<br/>không đổ lỗi</p>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900/40 p-10 text-center shadow-2xl">
        <div class="relative z-10">
          <p class="mb-4 text-lg font-medium tracking-wide text-slate-400 line-through decoration-red-500/50 decoration-2">
            Junior: Code nhanh để xong việc
          </p>
          <div class="space-y-2">
            <h3 class="text-4xl font-black text-white">
              Senior: <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic">Master of Debugging</span>
            </h3>
            <p class="text-sm font-bold text-purple-400 uppercase tracking-[0.3em]">Understand the system, Rule the world</p>
          </div>
        </div>
        <div class="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div class="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
    </div>
  </BaseSlide>
</template>