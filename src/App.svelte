<script lang="ts">
	import Tool from "./lib/Tool.svelte";
</script>

<main class="p-4 bg-zinc-50 dark:bg-zinc-800">
	<h1 class="text-2xl font-bold">Lua Minifier</h1>
	<h2 class="font-bold">Input</h2>
	<Tool />
	<h2 class="font-bold">About this tool</h2>
	<div class="dark:bg-zinc-700 p-1 rounded-sm">
		<p>
			This tool uses <a
				href="https://mths.be/luamin"
				class="bg-sky-50 rounded-md px-1 underline font-mono text-sky-400 dark:bg-sky-900 hover:bg-sky-200 hover:text-sky-900 transition-colors"
				>luamin.js</a
			> to minify Lua code.
		</p>
		<p>
			Made by <a
				href="https://realja.me"
				class="bg-sky-50 rounded-md px-1 underline font-mono text-sky-400 dark:bg-sky-900 hover:bg-sky-200 hover:text-sky-900 transition-colors"
				>realjame</a
			>
			<a
				rel="me"
				href="https://wetdry.world/@jame"
				class="bg-sky-50 rounded-md px-1 underline font-mono text-sky-400 dark:bg-sky-900 hover:bg-sky-200 hover:text-sky-900 transition-colors"
				>@jame@wetdry.world</a
			>
		</p>
	</div>
</main>
