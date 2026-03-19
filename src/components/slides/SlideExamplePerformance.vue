<script setup lang="ts">
import {
  computed,
  nextTick,
  ref,
} from 'vue';

import BaseSlide from '../BaseSlide.vue';

type Status = 'idle' | 'profiling' | 'paused' | 'done';

type DemoRow = {
	id: number
	title: string
	score: string
	badge: string
};

const props = defineProps<{
	id: number
	number: number
}>();

const rowCount = ref(320);
const cpuMultiplier = ref(22);
const useOptimizedMode = ref(false);
const status = ref<Status>('idle');
const rows = ref<DemoRow[]>([]);
const logs = ref<string[]>(['Open Performance panel, then run the scenario.']);

const longTaskMs = ref(0);
const renderMs = ref(0);
const totalMs = ref(0);
const rootCause = ref('Waiting for profile run...');

const visibleRows = computed(() => {
	if (useOptimizedMode.value) {
		return rows.value.slice(0, 28);
	}

	return rows.value;
});

const estimatedFramesBlocked = computed(() => {
	return Math.max(1, Math.round(totalMs.value / 16.7));
});

function appendLog(message: string) {
	const timestamp = new Date().toLocaleTimeString([], { hour12: false });
	logs.value = [`[${timestamp}] ${message}`, ...logs.value].slice(0, 6);
}

function expensiveFormatter(index: number, heavyMode: boolean) {
	let acc = 0;
	const loops = heavyMode ? 3200 : 280;

	for (let step = 0; step < loops; step += 1) {
		acc += Math.sqrt(index * step + 17) % 11;
	}

	return acc.toFixed(1);
}

function simulateLongTask(multiplier: number) {
	const startedAt = performance.now();
	let checksum = 0;
	const loops = multiplier * 130000;

	for (let index = 0; index < loops; index += 1) {
		checksum += Math.sin(index) * Math.cos(index / 2);
	}

	return {
		duration: performance.now() - startedAt,
		checksum,
	};
}

function buildRows(count: number, heavyMode: boolean) {
	return Array.from({ length: count }, (_, index) => {
		const score = expensiveFormatter(index + 1, heavyMode);
		const badge = heavyMode ? 'Full render' : 'Virtualized';

		return {
			id: index + 1,
			title: `Trace item #${index + 1}`,
			score,
			badge,
		};
	});
}

function resetScenario() {
	rows.value = [];
	status.value = 'idle';
	longTaskMs.value = 0;
	renderMs.value = 0;
	totalMs.value = 0;
	rootCause.value = 'Waiting for profile run...';
	logs.value = ['Scenario reset. Ready for another profile.'];
}

async function runScenario() {
	status.value = 'profiling';
	rows.value = [];
	appendLog('Starting interaction. Record a new Performance trace now.');

	await nextTick();
	await new Promise((resolve) => globalThis.setTimeout(resolve, 60));

	const heavyMode = !useOptimizedMode.value;
	const itemCount = useOptimizedMode.value ? Math.min(rowCount.value, 36) : rowCount.value;

	const overallStart = performance.now();
	const longTaskResult = simulateLongTask(cpuMultiplier.value);
	const builtRows = buildRows(itemCount, heavyMode);

	longTaskMs.value = longTaskResult.duration;
	rootCause.value = heavyMode
		? 'Main thread blocked by CPU loop, then forced to paint too many expensive rows.'
		: 'Long task reduced and rendered rows capped, so the browser can recover faster.';

	status.value = 'paused';
	appendLog('Paused before DOM commit. Inspect builtRows and longTaskMs in DevTools.');

	debugger;

	const renderStart = performance.now();
	rows.value = builtRows;
	await nextTick();
	renderMs.value = performance.now() - renderStart;

	totalMs.value = performance.now() - overallStart;
	status.value = 'done';
	appendLog(`Profile complete. Total blocking time: ${totalMs.value.toFixed(1)}ms.`);
}
</script>

<template>
	<BaseSlide :id="props.id" :number="props.number">
		<div class="mx-auto w-full max-w-6xl">
			<div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
				<div>
					<div class="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1">
						<span class="text-xs font-bold uppercase tracking-widest text-orange-300">Performance + Debugger Demo</span>
					</div>
					<h2 class="text-4xl font-extrabold tracking-tight text-white">
						Find the Root Cause of a Slow Interaction
					</h2>
					<p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
						Mô phỏng một interaction chậm với <span class="font-mono text-orange-300">long task</span>,
						<span class="font-mono text-orange-300"> slow render</span>, rồi dừng tại
						<span class="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-cyan-300">debugger</span>
						để tách vấn đề thành từng phần nhỏ.
					</p>
				</div>

				<div class="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
					DevTools → Performance → Record → Run Scenario
				</div>
			</div>

			<div class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_330px]">
				<div class="flex flex-col gap-6">
					<div class="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
						<div class="flex items-center justify-between border-b border-slate-800 bg-slate-800/50 px-5 py-3">
							<div class="flex items-center gap-3">
								<div class="flex gap-1.5">
									<div class="h-3 w-3 rounded-full bg-red-500/80"></div>
									<div class="h-3 w-3 rounded-full bg-amber-500/80"></div>
									<div class="h-3 w-3 rounded-full bg-emerald-500/80"></div>
								</div>
								<h3 class="text-sm font-bold text-slate-300">DashboardInteraction.ts</h3>
							</div>

							<span
								class="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
								:class="{
									'bg-slate-700 text-slate-300': status === 'idle',
									'bg-amber-500/20 text-amber-400 animate-pulse': status === 'profiling',
									'bg-red-500/20 text-red-400': status === 'paused',
									'bg-emerald-500/20 text-emerald-400': status === 'done',
								}"
							>
								{{ status }}
							</span>
						</div>

						<div class="grid grid-cols-1 gap-0 xl:grid-cols-[320px_1fr]">
							<div class="border-b border-slate-800 p-5 xl:border-b-0 xl:border-r">
								<h4 class="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Scenario Controls</h4>

								<div class="space-y-4">
									<label class="block text-sm text-slate-300">
										<div class="mb-1 flex items-center justify-between">
											<span>Rows to render</span>
											<span class="font-mono text-cyan-300">{{ rowCount }}</span>
										</div>
										<input v-model="rowCount" type="range" min="80" max="500" step="20" class="w-full accent-cyan-500" />
									</label>

									<label class="block text-sm text-slate-300">
										<div class="mb-1 flex items-center justify-between">
											<span>CPU work multiplier</span>
											<span class="font-mono text-cyan-300">{{ cpuMultiplier }}</span>
										</div>
										<input v-model="cpuMultiplier" type="range" min="6" max="40" step="2" class="w-full accent-orange-500" />
									</label>

									<label class="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-300">
										<input v-model="useOptimizedMode" type="checkbox" class="h-4 w-4 accent-emerald-500" />
										Apply fix mode: cap rows and reduce formatter cost
									</label>
								</div>

								<div class="mt-5 grid grid-cols-2 gap-3">
									<button
										type="button"
										class="rounded-lg bg-orange-500 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-orange-400"
										@click="runScenario"
									>
										Run Scenario
									</button>
									<button
										type="button"
										class="rounded-lg border border-slate-600 px-4 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-slate-800"
										@click="resetScenario"
									>
										Reset
									</button>
								</div>

								<div class="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
									<h5 class="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Root Cause</h5>
									<p class="text-sm leading-relaxed text-slate-300">{{ rootCause }}</p>
								</div>
							</div>

							<div class="p-5">
								<div class="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
									<div class="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
										<div class="text-[10px] font-bold uppercase tracking-widest text-red-300">Long Task</div>
										<div class="mt-2 text-2xl font-extrabold text-white">{{ longTaskMs.toFixed(1) }}ms</div>
									</div>
									<div class="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
										<div class="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Render</div>
										<div class="mt-2 text-2xl font-extrabold text-white">{{ renderMs.toFixed(1) }}ms</div>
									</div>
									<div class="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
										<div class="text-[10px] font-bold uppercase tracking-widest text-amber-300">Total</div>
										<div class="mt-2 text-2xl font-extrabold text-white">{{ totalMs.toFixed(1) }}ms</div>
									</div>
									<div class="rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
										<div class="text-[10px] font-bold uppercase tracking-widest text-purple-300">Blocked Frames</div>
										<div class="mt-2 text-2xl font-extrabold text-white">{{ estimatedFramesBlocked }}</div>
									</div>
								</div>

								<div class="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
									<div class="mb-3 flex items-center justify-between">
										<h4 class="text-xs font-bold uppercase tracking-widest text-slate-500">Rendered Rows</h4>
										<span class="text-xs text-slate-500">
											{{ visibleRows.length }} rows shown{{ useOptimizedMode ? ' (capped)' : '' }}
										</span>
									</div>

									<div class="grid max-h-[330px] grid-cols-1 gap-2 overflow-y-auto pr-1 md:grid-cols-2">
										<div
											v-for="row in visibleRows"
											:key="row.id"
											class="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2"
										>
											<div class="flex items-center justify-between gap-3">
												<span class="truncate text-sm font-medium text-slate-200">{{ row.title }}</span>
												<span class="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wider text-slate-400">
													{{ row.badge }}
												</span>
											</div>
											<div class="mt-1 text-xs text-cyan-300">score: {{ row.score }}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="rounded-2xl border border-slate-700 bg-[#0d1117] p-4 shadow-inner">
						<div class="mb-2 flex items-center justify-between px-2">
							<span class="text-[10px] font-bold uppercase tracking-widest text-slate-500">Hot Path Preview</span>
							<span class="text-[10px] text-orange-400">Breakpoint before commit</span>
						</div>
						<pre class="overflow-x-auto text-[13px] leading-relaxed text-slate-300 font-mono"><code><span class="text-purple-400">const</span> startedAt = <span class="text-blue-400">performance</span>.<span class="text-blue-400">now</span>();
<span class="text-purple-400">const</span> longTask = <span class="text-blue-400">simulateLongTask</span>(cpuMultiplier);
<span class="text-purple-400">const</span> rows = <span class="text-blue-400">buildRows</span>(rowCount, <span class="text-orange-400">true</span>);

<span class="text-amber-400 font-bold bg-amber-400/10 px-1">debugger;</span>

state.rows = rows;
<span class="text-purple-400">await</span> <span class="text-blue-400">nextTick</span>();
<span class="text-purple-400">const</span> total = performance.now() - startedAt;</code></pre>
					</div>
				</div>

				<div class="flex flex-col gap-4">
					<div class="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5">
						<h3 class="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-300">Presenter Script</h3>
						<ol class="space-y-3 text-[13px] leading-relaxed text-slate-300">
							<li>1. Start with fix mode off and run a Performance recording.</li>
							<li>2. Point at the long purple/yellow block on the main thread timeline.</li>
							<li>3. When debugger pauses, inspect <span class="font-mono text-cyan-300">builtRows.length</span> and <span class="font-mono text-cyan-300">longTaskMs</span>.</li>
							<li>4. Turn fix mode on and run again to compare scripting and render costs.</li>
						</ol>
					</div>

					<div class="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
						<h3 class="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-300">Breakdown Strategy</h3>
						<ul class="space-y-3 text-[13px] leading-relaxed text-slate-300">
							<li>Long Task: isolate CPU-heavy synchronous work first.</li>
							<li>Render Cost: count DOM nodes and expensive formatting next.</li>
							<li>Fix: batch work, virtualize rows, and avoid heavy per-item computation.</li>
						</ul>
					</div>

					<div class="flex-1 rounded-2xl border border-slate-700 bg-black p-4">
						<h3 class="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">Trace Logs</h3>
						<div class="space-y-1 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-400">
							<div
								v-for="entry in logs"
								:key="entry"
								class="border-b border-slate-800/50 pb-1 pt-1"
							>
								<span class="text-slate-600">&gt;</span> {{ entry }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</BaseSlide>
</template>
