<script lang="ts">
	//@ts-ignore
	import luamin from "lua-format";
	import type { FormatSettings } from "./SettingsType";

	export let formatSettings: FormatSettings;
	const byteSize = (str: string): number => new Blob([str]).size;
	const clampNum = (val: number, min: number, max: number): number =>
		Math.min(Math.max(val, min), max);
	function calcPercentage(x: number, y: number, fixed = 2): string {
		const percent = clampNum((x / y) * 100, 0, 100) || 0;
		return percent.toFixed(fixed);
	}

	let input = "";
	let formatted = "";
	let formatError = false;
	function formatCode() {
		try {
			formatted = luamin.Minify(input, formatSettings).split("\n").pop() || "";
			formatError = false;
		} catch (error) {
			formatted = error as string;
			formatError = true;
		}
		console.log(formatSettings);
	}

	function copyText() {
		navigator.clipboard.writeText(formatted);
	}
</script>

<!-- 
	local isRobloxCool = true -- Convert the boolean to a string then concatenate
	print("Roblox is cool: " .. tostring(isRobloxCool)) -- -> Roblox is cool: true
-->
<!-- 
	local a=true;print("Roblox is cool: "..tostring(a))
-->

<div>
	<textarea
		cols="30"
		rows="10"
		bind:value={input}
		on:input={formatCode}
		class="border border-black resize dark:bg-gray-800 font-mono p-1 rounded-sm"
	></textarea>
	<h2 class="font-bold">Minified result</h2>
	<pre
		class={`${formatError ? "failed-true" : "failed-false"} transition-all duration-500 p-1 rounded-sm mt-1 mb-2`}><textarea
			readonly
			class="w-full p-1 bg-gray-800 text-gray-50 text-wrap block resize-y"
			>{formatted || " "}</textarea
		></pre>
	<button
		on:click={copyText}
		class="bg-green-600 px-2 py-0.5 text-white ring-offset-0 hover:ring-2 hover:ring-green-300 hover:bg-green-500 transition-all rounded-sm"
		>Copy</button
	>
	<!-- compression results -->
	<dl>
		<dt class="font-bold">Before</dt>
		<dd>{byteSize(input)} bytes</dd>
		<dt class="font-bold">After</dt>
		<dd>{byteSize(formatted)} bytes</dd>
		<dt class="font-bold">Compression ratio</dt>
		<dd>
			{calcPercentage(byteSize(formatted), byteSize(input))}%
		</dd>
	</dl>
</div>
