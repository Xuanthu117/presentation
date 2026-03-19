<script setup lang="ts">
import BaseSlide from '../BaseSlide.vue';
</script>

<template>
  <BaseSlide id="slide-12" number="12">
    <div class="mx-auto w-full max-w-6xl">
      <h2 class="mb-12 text-center text-4xl font-bold tracking-tight text-white italic">
        <img src="/public/assets/womm.avif" alt="Curse" class="inline-block  w-48 -rotate-12" />
        Tiêu Diệt Lời Nguyền <span class="text-red-500">"Works On My Machine"</span>
        
      </h2>

      <div class="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="relative rounded-2xl border border-red-900/30 bg-red-950/10 p-6 opacity-60 transition-all hover:opacity-100">
          <div class="absolute -right-4 -top-4 text-4xl">🚩</div>
          <h3 class="mb-4 border-b border-red-900/50 pb-2 text-xl font-bold text-red-500">Toxic Mindset</h3>
          <p class="mb-3 font-bold text-slate-200">"Máy tôi chạy bình thường, chắc tại máy bạn!"</p>
          <ul class="space-y-2 text-sm text-slate-400">
            <li>• Phớt lờ context khác biệt (OS, Node version, Env).</li>
            <li>• Đổ lỗi qua lại giữa Dev - Tester - Ops.</li>
            <li>• Để mặc lỗi tồn tại trên Staging/Production.</li>
          </ul>
        </div>

        <div class="relative rounded-2xl border border-green-500/30 bg-green-950/10 p-6 shadow-2xl shadow-green-900/20 scale-105">
          <div class="absolute -right-4 -top-4 text-4xl">🚀</div>
          <h3 class="mb-4 border-b border-green-900/50 pb-2 text-xl font-bold text-green-400">Engineering Mindset</h3>
          <p class="mb-3 font-bold text-slate-200">"Đồng bộ Context - Giải quyết tận gốc"</p>
          <ul class="space-y-2 text-sm text-slate-400">
            <li>• <b>Pair-debugging:</b> Cùng nhìn vào một luồng dữ liệu.</li>
            <li>• <b>Context Sharing:</b> Gửi file HAR, Logs, và Screenshot.</li>
            <li>• <b>Reproducibility:</b> "Nếu không tái hiện được, chưa thể sửa được".</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-indigo-500/30 bg-slate-800/50 p-6">
          <h3 class="mb-3 flex items-center gap-2 text-lg font-bold text-indigo-400">
            <span class="text-xl">📜</span> Contract Testing (Pact.io)
          </h3>
          <p class="text-sm leading-relaxed text-slate-300">
            Ngăn chặn việc Backend đổi tên field <code>user_id</code> thành <code>id</code> làm sập Frontend. 
            <b>CI/CD sẽ báo lỗi ngay lập tức</b> nếu Backend phá vỡ "hợp đồng" JSON mà Frontend đã ký kết.
          </p>
        </div>

        <div class="rounded-2xl border border-cyan-500/30 bg-slate-800/50 p-6">
          <h3 class="mb-3 flex items-center gap-2 text-lg font-bold text-cyan-400">
            <span class="text-xl">🐳</span> Dev Containers & Dockerize
          </h3>
          <p class="text-sm leading-relaxed text-slate-300">
            Đóng gói toàn bộ môi trường (Node, DB, Tools) vào Docker. 
            Tất cả mọi người trong team chạy trên <b>cùng một hệ điều hành ảo</b>. Loại bỏ 100% xung đột do phiên bản phần mềm khác nhau.
          </p>
        </div>
      </div>

      <div class="mt-10 rounded-xl bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 p-1">
        <div class="rounded-lg bg-slate-900 px-6 py-4 text-center">
          <p class="text-sm font-medium text-slate-300">
            👉 Bí quyết: <span class="text-indigo-400">Automation</span> giảm sai sót con người + <span class="text-cyan-400">Empathy</span> (Thấu cảm) để hỗ trợ đồng đội.
          </p>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>