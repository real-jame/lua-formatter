<script lang="ts">
	import Settings from "./lib/Settings.svelte";
	import type { FormatSettings } from "./lib/SettingsType";
	import Tool from "./lib/Tool.svelte";

	let formatSettings: FormatSettings = {
		RenameVariables: true,
		RenameGlobals: false,
		SolveMath: true,
	};
</script>

<main class="p-4 dark:bg-zinc-800">
	<h1 class="text-2xl font-bold">Lua Minifier</h1>
	<h2 class="font-bold">Input</h2>
	<Tool {formatSettings} />
	<Settings {formatSettings} />
	<h2 class="font-bold">About this tool</h2>
	<p>
		This tool uses <a
			href="https://www.npmjs.com/package/lua-format"
			class="bg-sky-50 rounded-md px-1 underline font-mono text-sky-400 dark:bg-sky-900"
			>luamin.js</a
		> to minify Lua code.
	</p>
	<footer>
		<p>
			Made by <a
				href="https://realja.me"
				class="bg-sky-50 rounded-md px-1 underline font-mono text-sky-400 dark:bg-sky-900"
				>realjame</a
			>
			<a
				rel="me"
				href="https://wetdry.world/@jame"
				class="bg-sky-50 rounded-md px-1 underline font-mono text-sky-400 dark:bg-sky-900"
				>@jame@wetdry.world</a
			>
		</p>
	</footer>
</main>
