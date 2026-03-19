<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
</script>

<template>
  <BaseSlide id="slide-11" number="11">
    <div class="mx-auto w-full max-w-6xl">
      <div class="mb-4 flex items-center justify-center gap-3">
        <img src="/assets/tester.png" alt="QA"   class="inline-block  w-48 -rotate-12" /> <h2 class="text-4xl font-bold text-white tracking-tight">Vũ Khí Hạng Nặng Của QA/Tester</h2>
      </div>
       

      <div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
       
        <div class="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-6 border border-slate-700 transition-all hover:border-slate-500">
          <div class="mb-4 text-4xl group-hover:scale-110 transition-transform">✍️</div>
          <h3 class="mb-2 text-xl font-bold text-white">Art of Reporting</h3>
          <p class="text-sm leading-relaxed text-slate-400">
            Không chỉ là Steps/Expected. Một QA giỏi tìm ra <b>"Minimal Path"</b> (đường ngắn nhất) để tái hiện lỗi, đính kèm <code>Console Log</code> và <code>Network Trace</code> ngay trong ticket.
          </p>
        </div>

        <div class="group relative overflow-hidden rounded-2xl border border-pink-500/30 bg-slate-800/50 p-6 transition-all hover:bg-pink-500/10">
          <div class="mb-4 text-4xl group-hover:scale-110 transition-transform">🕵️</div>
          <h3 class="mb-2 text-xl font-bold text-pink-400">MITM Proxy & Mocking</h3>
          <p class="text-sm leading-relaxed text-slate-400">
            Sử dụng <b>Proxyman/Charles</b> để <i>Map Local</i>. Ép API trả về lỗi 500, 403 hoặc data cực lớn để test độ bền của UI mà không cần can thiệp vào Source Code.
          </p>
        </div>

        <div class="group relative overflow-hidden rounded-2xl border border-pink-500/30 bg-slate-800/50 p-6 transition-all hover:bg-pink-500/10">
          <div class="mb-4 text-4xl group-hover:scale-110 transition-transform">🤖</div>
          <h3 class="text-xl font-bold text-pink-400">Visual Regression AI</h3>
          <p class="text-sm leading-relaxed text-slate-400">
            Ứng dụng <b>Applitools</b> hoặc <b>Playwright Visual</b> để phát hiện lệch pixel, sai font hoặc vỡ layout tự động trên hàng trăm kích thước màn hình cùng lúc.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 border border-slate-700">
          <h4 class="mb-3 flex items-center gap-2 font-bold text-pink-300">
            <span class="text-xl">📦</span> Network Interception (The HAR Power)
          </h4>
          <p class="text-md text-slate-400 leading-relaxed">
            Thay vì quay video màn hình, hãy <b>Export file .HAR</b> (HTTP Archive). Dev chỉ cần import file này là có thể "replay" lại toàn bộ phiên làm việc của Tester với đầy đủ Header, Cookie và Token.
          </p>
        </div>

        <div class="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 border border-slate-700">
          <h4 class="mb-3 flex items-center gap-2 font-bold text-pink-300">
            <span class="text-xl">🧪</span> State Injection & Time Travel
          </h4>
          <p class="text-md text-slate-400 leading-relaxed">
            Dùng DevTools để ép <b>State</b> của ứng dụng vào một kịch bản hiếm gặp (ví dụ: giỏ hàng có 1000 item). Tiết kiệm 90% thời gian setup data ảo bằng tay thông qua Database.
          </p>
        </div>
      </div>

      <div class="mt-8 flex items-center justify-center gap-4 rounded-full border border-pink-500/20 bg-pink-500/5 py-3 shadow-inner">
        <span class="animate-pulse text-pink-500 font-mono">⚡</span>
        <p class="text-sm font-semibold text-pink-100 italic">
          "QA giỏi không chỉ tìm ra Bug, mà còn cung cấp đủ dữ liệu để Dev sửa Bug trong 1 nốt nhạc."
        </p>
      </div>
    </div>
  </BaseSlide>
</template>