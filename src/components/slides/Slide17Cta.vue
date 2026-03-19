<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';

const props = defineProps<{
  id: number
  number:number;
  onRestart: () => void
}>()
</script>

<template>
  <BaseSlide :id="props.id" :number="props.number">
    <div class="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
      <span class="mb-6 inline-block rounded-full bg-pink-900 px-3 py-1 text-sm font-semibold text-pink-300">🔥 Call to Action</span>
      <h2 class="mb-12 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
        Bắt Đầu Level-Up Từ Hôm Nay!
      </h2>

      <div class="flex gap-12">
        <img src="/assets/bravo.png" alt="Rocket"   class="inline-block w-48 max-w-xs mx-auto mb-12" />
      <div class="mb-12 w-full max-w-2xl space-y-6 text-left text-xl font-bold text-white">
        <div class="flex items-center rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:border-pink-500">
          <span class="mr-6 text-4xl">🛠️</span>
          <span>Thử nghiệm Logpoint thay vì <code>console.log</code> trong task tới.</span>
        </div>
        <div class="flex items-center rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:border-pink-500">
          <span class="mr-6 text-4xl">📝</span>
          <span>QA: Vọc thử Charles Proxy đổi API Reponse.</span>
        </div>
        <div class="flex items-center rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:border-pink-500">
          <span class="mr-6 text-4xl">💪</span>
          <span>Tích cực Pair-debug chéo Role để mở rộng góc nhìn.</span>
        </div>
      </div>

</div>
      <button
        type="button"
        class="transform rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition hover:scale-105"
        @click="onRestart"
      >
        Xem lại từ đầu 🚀
      </button>
    </div>
  </BaseSlide>
</template>