<script lang="ts">
	//@ts-ignore
	import luamin from "luamin";
	import { onMount } from "svelte";
	import localforage from "localforage";

	type Data = {
		input: string;
		formatted: string;
		formatError: boolean;
	};

	// utility functions for calculating size
	const byteSize = (str: string): number => new Blob([str]).size;
	const clampNum = (val: number, min: number, max: number): number =>
		Math.min(Math.max(val, min), max);
	function calcPercentage(x: number, y: number, fixed = 2): string {
		const percent = clampNum((x / y) * 100, 0, 100) || 0;
		return percent.toFixed(fixed);
	}

	let data = {
		input: "",
		formatted: "",
		formatError: false,
	} as Data;

	async function formatCode() {
		try {
			data.formatted = luamin.minify(data.input);
			data.formatError = false;
		} catch (error) {
			data.formatted = error as string;
			data.formatError = true;
		}

		try {
			await localforage.setItem("data", data);
		} catch (error) {
			console.error("Error saving input:", error);
		}
	}

	function copyText() {
		navigator.clipboard.writeText(data.formatted);
	}

	onMount(async () => {
		try {
			const savedData = (await localforage.getItem("data")) as Data;
			if (savedData) {
				data = savedData;
			}
		} catch (error) {
			console.error("Error loading input/output data:", error);
		}
	});
</script>

<div>
	<textarea
		rows="10"
		bind:value={data.input}
		on:input={formatCode}
		class="border w-full border-black resize dark:bg-zinc-700 font-mono p-1 rounded-sm"
	></textarea>
	<h2 class="font-bold">Minified result</h2>
	<pre
		class={`${data.formatError ? "failed-true" : "failed-false"} transition-colors duration-500 p-1 rounded-sm mt-1`}><textarea
			readonly
			class="w-full p-1 bg-zinc-900 text-gray-50 text-wrap block resize-y"
			>{data.formatted || " "}</textarea
		></pre>
	<button
		on:click={copyText}
		class="bg-green-600 px-2 py-0.5 my-2 text-white ring-offset-0 hover:ring-2 hover:ring-green-300 hover:bg-green-500 transition-all rounded-sm"
		>Copy</button
	>
	<!-- compression results -->
	<dl class="dark:bg-zinc-700 rounded-sm p-1">
		<dt class="font-bold">Before</dt>
		<dd>{byteSize(data.input)} bytes</dd>
		<dt class="font-bold">After</dt>
		<dd>{byteSize(data.formatted)} bytes</dd>
		<dt class="font-bold">Compression ratio</dt>
		<dd>
			{calcPercentage(byteSize(data.formatted), byteSize(data.input))}%
		</dd>
	</dl>
</div>
