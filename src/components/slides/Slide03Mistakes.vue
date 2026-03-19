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
        <h2 class="text-4xl font-bold text-white tracking-tight">Những Sai Lầm "Kinh Điển" Khi Debug</h2>
      </div>
      <p class="mb-10 text-center text-slate-400">
        Fix bug không khó, cái khó là vượt qua những thói quen xấu tích tụ theo thời gian.
      </p>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div class="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-slate-900/50 p-6 transition-all hover:bg-red-950/10">
          <div class="mb-4 text-4xl group-hover:scale-110 transition-transform">🖨️</div>
          <h3 class="mb-2 text-lg font-bold text-white">Console.log "Vô Tội Vạ"</h3>
          <p class="text-md leading-relaxed text-slate-400 italic">
            Rải log khắp nơi nhưng không có <b>Context</b>. Kết quả: Terminal trắng xóa, log rác lọt lên Production, che khuất lỗi thực sự.
          </p>
        </div>

        <div class="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-slate-900/50 p-6 transition-all hover:bg-red-950/10">
          <div class="mb-4 text-4xl group-hover:scale-110 transition-transform">👉👈</div>
          <h3 class="mb-2 text-lg font-bold text-white">Đổ Lỗi Cho Ngoại Cảnh</h3>
          <p class="text-md leading-relaxed text-slate-400 italic">
            "Máy em vẫn chạy", "Do mạng chậm", "Do cache trình duyệt". Từ chối thừa nhận logic sai lệch là rào cản lớn nhất để tìm ra Root Cause.
          </p>
        </div>

        <div class="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-slate-900/50 p-6 transition-all hover:bg-red-950/10">
          <div class="mb-4 text-4xl group-hover:scale-110 transition-transform">🤖</div>
          <h3 class="mb-2 text-lg font-bold text-white">Tin AI Mù Quáng</h3>
          <p class="text-md leading-relaxed text-slate-400 italic">
            Copy-paste giải pháp từ ChatGPT mà không hiểu luồng dữ liệu của dự án. AI có thể sửa lỗi cú pháp nhưng thường làm sai lệch <b>Business Logic</b>.
          </p>
        </div>

        <div class="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-slate-900/50 p-6 transition-all hover:bg-red-950/10">
          <div class="mb-4 text-4xl group-hover:scale-110 transition-transform">🔀</div>
          <h3 class="mb-2 text-lg font-bold text-white">Thay Đổi Ổ Ạt</h3>
          <p class="text-md leading-relaxed text-slate-400 italic">
            Vừa sửa code, vừa cập nhật thư viện, vừa đổi config môi trường. Nếu hết lỗi, bạn cũng không biết cái nào thực sự hiệu quả.
          </p>
        </div>
      </div>

      <div class="mt-10 rounded-2xl border border-slate-700 bg-slate-800/30 p-8 shadow-inner">
        <h4 class="mb-6 text-center text-md font-bold uppercase tracking-widest text-slate-500">
          Sự Thật Phũ Phàng: 80% Bug Đến Từ Đâu?
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-2xl font-black text-red-500">45%</div>
            <div class="mt-1 text-md font-bold text-slate-200">Unmanaged State</div>
            <p class="mt-2 text-md] text-slate-500">Dữ liệu bị mutate bất ngờ, race conditions hoặc sync sai giữa các component.</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-black text-red-500">30%</div>
            <div class="mt-1 text-md font-bold text-slate-200">Edge Case "Quên" Test</div>
            <p class="mt-2 text-md] text-slate-500">Dữ liệu null/undefined, mảng rỗng, hoặc payload API trả về cấu hình lạ.</p>
          </div>
          <div class="text-center">
            <div class="text-2xl font-black text-red-500">25%</div>
            <div class="mt-1 text-md font-bold text-slate-200">Side Effects (Legacy)</div>
            <p class="mt-2 text-md] text-slate-500">Sửa chỗ này nhưng vỡ chỗ kia do thiếu <b>Regression Testing</b>.</p>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <div class="inline-block rounded-full bg-red-500/10 px-6 py-2 border border-red-500/20">
           <p class="text-md font-semibold text-red-400 italic">
            👉 "Sửa Bug mà không hiểu tại sao mình sửa được, chính là tạo ra Bug tiếp theo."
          </p>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>