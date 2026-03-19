<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue';

import BaseSlide from '../BaseSlide.vue';

const props = defineProps<{
    id: number
    number: number
}>();

const quantity = ref(1);
const unitPrice = 49;
const discountCode = ref('SAVE10');
const enableExpress = ref(false);
const requestStatus = ref<'idle' | 'running' | 'paused' | 'done'>('idle');
const logs = ref<string[]>(['Ready to debug checkout flow.']);

const subtotal = computed(() => quantity.value * unitPrice);
const shippingFee = computed(() => (enableExpress.value ? 15 : 0));
const expectedDiscount = computed(() => (discountCode.value === 'SAVE10' ? 10 : 0));

// The intentionally buggy logic (Simulating an edge case bug)
const buggyDiscount = computed(() => {
    // BUG: If quantity is > 2, the discount is completely removed instead of applied once.
    return quantity.value > 2 ? 0 : expectedDiscount.value;
});

const finalTotal = computed(() => subtotal.value + shippingFee.value - buggyDiscount.value);

function appendLog(message: string) {
    const timestamp = new Date().toLocaleTimeString([], { hour12: false });
    logs.value = [`[${timestamp}] ${message}`, ...logs.value].slice(0, 5);
}

function increaseQuantity() {
    quantity.value += 1;
    appendLog(`User updated quantity: ${quantity.value}`);
}

function resetDemo() {
    quantity.value = 1;
    discountCode.value = 'SAVE10';
    enableExpress.value = false;
    requestStatus.value = 'idle';
    logs.value = ['Checkout state reset.'];
}

function runCheckoutDebugger() {
    requestStatus.value = 'running';
    appendLog('Initializing payment processor...');

    const payload = {
        quantity: quantity.value,
        unitPrice,
        discountCode: discountCode.value,
        enableExpress: enableExpress.value,
    };

    setTimeout(() => {
        appendLog('Breakpoint hit! Inspect [payload] in Scope panel.');
        requestStatus.value = 'paused';
        
        // --- INSTRUCTION FOR PRESENTER ---
        // When the browser pauses here, show the audience how to hover over 'payload'
        // and how to use the 'Watch' panel to track 'discount'.
        // ---------------------------------
        debugger; 

        let discount = 0;
        if (payload.discountCode === 'SAVE10') {
            // BUG REPRODUCED IN FUNCTION:
            discount = payload.quantity > 2 ? 0 : 10;
        }

        const total = (payload.quantity * payload.unitPrice) + (payload.enableExpress ? 15 : 0) - discount;

        requestStatus.value = 'done';
        appendLog(`Transaction complete. Final Total: $${total}`);
    }, 500);
}
</script>

<template>
    <BaseSlide :id="props.id" :number="props.number">
        <div class="mx-auto w-full max-w-6xl">
            <div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <div class="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span class="text-xs font-bold uppercase tracking-widest text-cyan-400">Interactive Demo</span>
                    </div>
                    <h2 class="text-4xl font-extrabold tracking-tight text-white">
                        DevTools Debugger in 60s
                    </h2>
                    <p class="mt-3 max-w-2xl text-md leading-relaxed text-slate-300">
                        Stop guessing with <code>console.log()</code>. Open DevTools, trigger the bug, and use the <span class="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-cyan-300">debugger</span> keyword to freeze the application state exactly where it fails.
                    </p>
                </div>

                <div class="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 px-5 py-3 shadow-lg">
                    <div class="text-2xl">⌨️</div>
                    <div class="text-md font-medium text-amber-200">
                        Press <kbd class="rounded border border-amber-500/30 bg-amber-950 px-2 py-1 font-mono">F12</kbd> or <kbd class="rounded border border-amber-500/30 bg-amber-950 px-2 py-1 font-mono">Cmd+Opt+I</kbd> to start.
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
                
                <div class="flex flex-col gap-6">
                    <div class="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
                        <div class="flex items-center justify-between border-b border-slate-800 bg-slate-800/50 px-5 py-3">
                            <div class="flex items-center gap-3">
                                <div class="flex gap-1.5">
                                    <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
                                    <div class="h-3 w-3 rounded-full bg-amber-500/80"></div>
                                    <div class="h-3 w-3 rounded-full bg-emerald-500/80"></div>
                                </div>
                                <h3 class="text-md font-bold text-slate-300">CheckoutService.ts</h3>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500">Status:</span>
                                <span class="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors"
                                    :class="{
                                        'bg-slate-700 text-slate-300': requestStatus === 'idle',
                                        'bg-amber-500/20 text-amber-400 animate-pulse': requestStatus === 'running',
                                        'bg-red-500/20 text-red-400': requestStatus === 'paused',
                                        'bg-emerald-500/20 text-emerald-400': requestStatus === 'done',
                                    }">
                                    {{ requestStatus }}
                                </span>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="border-b border-slate-800 p-5 md:border-b-0 md:border-r">
                                <div class="mb-4 flex items-center justify-between">
                                    <h4 class="text-xs font-bold uppercase tracking-widest text-slate-500">App State</h4>
                                    <button type="button" class="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-300" @click="increaseQuantity">
                                        <span class="text-cyan-400">+</span> Quantity
                                    </button>
                                </div>

                                <div class="space-y-2 font-mono text-md">
                                    <div class="flex justify-between rounded bg-slate-950/50 px-3 py-2 text-slate-300">
                                        <span class="text-slate-500">quantity:</span>
                                        <span class="font-bold" :class="quantity > 2 ? 'text-amber-400' : 'text-cyan-400'">{{ quantity }}</span>
                                    </div>
                                    <div class="flex justify-between rounded bg-slate-950/50 px-3 py-2 text-slate-300">
                                        <span class="text-slate-500">unitPrice:</span>
                                        <span class="text-cyan-400">${{ unitPrice }}</span>
                                    </div>
                                    <div class="flex justify-between rounded bg-slate-950/50 px-3 py-2 text-slate-300">
                                        <span class="text-slate-500">discountCode:</span>
                                        <span class="text-emerald-400">"{{ discountCode }}"</span>
                                    </div>
                                </div>

                                <label class="mt-5 flex cursor-pointer items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-md text-slate-300 hover:bg-slate-800">
                                    <input v-model="enableExpress" type="checkbox" class="h-4 w-4 rounded border-slate-600 bg-slate-900 accent-cyan-500" />
                                    Express Shipping (+$15)
                                </label>
                            </div>

                            <div class="bg-slate-900/30 p-5">
                                <h4 class="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">UI Render (Result)</h4>
                                
                                <div class="space-y-2 text-md">
                                    <div class="flex justify-between text-slate-400">
                                        <span>Subtotal:</span>
                                        <span class="font-mono">${{ subtotal }}</span>
                                    </div>
                                    <div class="flex justify-between text-emerald-400/80" v-if="expectedDiscount > 0">
                                        <span>Expected Discount:</span>
                                        <span class="font-mono">-${{ expectedDiscount }}</span>
                                    </div>
                                    <div class="flex justify-between font-bold text-red-400" v-if="buggyDiscount !== expectedDiscount">
                                        <span class="flex items-center gap-2"><span class="text-lg leading-none">🐛</span> Actual Discount:</span>
                                        <span class="font-mono">-${{ buggyDiscount }}</span>
                                    </div>
                                    <div class="my-3 border-t border-slate-800"></div>
                                    <div class="flex justify-between text-lg font-bold text-white">
                                        <span>Total:</span>
                                        <span class="font-mono">${{ finalTotal }}</span>
                                    </div>
                                </div>

                                <div class="mt-6 flex gap-3">
                                    <button type="button" class="flex-1 rounded-lg bg-cyan-500 py-2.5 text-md font-bold text-slate-950 transition-all hover:bg-cyan-400 active:scale-95 shadow-lg shadow-cyan-500/20" @click="runCheckoutDebugger">
                                        ▶ Run Debugger
                                    </button>
                                    <button type="button" class="rounded-lg border border-slate-600 bg-transparent px-4 py-2.5 text-md font-bold text-slate-300 transition-all hover:bg-slate-800 active:scale-95" @click="resetDemo">
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-2xl border border-slate-700 bg-[#0d1117] p-4 shadow-inner">
                        <div class="mb-2 flex items-center justify-between px-2">
                            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500">Source Code Preview</span>
                            <span class="text-[10px] text-amber-500">⚠️ Bug hidden below</span>
                        </div>
                        <pre class="overflow-x-auto text-[13px] leading-relaxed text-slate-300 font-mono"><code><span class="text-purple-400">function</span> <span class="text-blue-400">processPayment</span>(payload) {
    <span class="text-slate-500">// Execution will pause here! Inspect 'payload'</span>
    <span class="text-amber-400 font-bold bg-amber-400/10 px-1">debugger;</span> 

    <span class="text-purple-400">let</span> discount = <span class="text-orange-400">0</span>;
    <span class="text-purple-400">if</span> (payload.discountCode === <span class="text-emerald-400">'SAVE10'</span>) {
        <span class="text-slate-500">// BUG: Edge case missing! What if quantity > 2?</span>
        discount = payload.quantity > <span class="text-orange-400">2</span> ? <span class="text-orange-400">0</span> : <span class="text-orange-400">10</span>; 
    }
    <span class="text-purple-400">return</span> (payload.quantity * payload.unitPrice) - discount;
}</code></pre>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5">
                        <h3 class="mb-3 flex items-center gap-2 text-md font-bold text-indigo-300 uppercase tracking-widest">
                            <span class="text-lg">🎤</span> Presenter Script
                        </h3>
                        <ol class="space-y-3 text-[13px] leading-relaxed text-slate-300">
                            <li class="flex gap-2">
                                <span class="font-bold text-indigo-400">1.</span>
                                <span>Click <b class="text-cyan-400">+ Quantity</b> until it reaches 3. Note the bug in the UI.</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="font-bold text-indigo-400">2.</span>
                                <span>Open DevTools (Sources tab).</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="font-bold text-indigo-400">3.</span>
                                <span>Click <b class="text-cyan-400 bg-cyan-500/10 px-1 rounded">Run Debugger</b>.</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="font-bold text-indigo-400">4.</span>
                                <span>Show audience the <b class="text-amber-400">Call Stack</b> and hover over the <b class="text-amber-400">payload</b> object.</span>
                            </li>
                        </ol>
                    </div>

                    <div class="flex-1 rounded-2xl border border-slate-700 bg-black p-4 flex flex-col">
                        <h3 class="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">Application Logs</h3>
                        <div class="flex-1 space-y-1 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-400">
                            <div v-for="(entry, index) in logs" :key="index" class="border-b border-slate-800/50 pb-1 pt-1" :class="index === 0 ? 'text-slate-200' : 'text-slate-500'">
                                <span class="text-slate-600">></span> {{ entry }}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </BaseSlide>
</template>