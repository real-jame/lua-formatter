<!-- unused because the lua format library i used actually wasn't good at formatting -->
<!-- so i switched to one that works but can only minify, and has no options. -->

<script lang="ts">
	import localforage from "localforage";
	import type { FormatSettings } from "./SettingsType";

	export let formatSettings: FormatSettings & Record<string, any>;

	async function handleChange(event: any, key: string) {
		formatSettings = {
			...formatSettings,
			[key]:
				event.target.type === "checkbox"
					? event.target.checked
					: event.target.value,
		};
		try {
			await localforage.setItem("formatSettings", formatSettings);
			console.log("Settings saved successfully!", formatSettings);
		} catch (error) {
			console.error("Error saving settings:", error);
		}
	}
</script>

<h2 class="font-bold">Options</h2>
<div
	class="border border-black bg-zinc-100 dark:bg-zinc-700 flex flex-col p-1 rounded-sm"
>
	<label>
		<select
			class="border border-black rounded-sm dark:bg-zinc-950"
			bind:value={formatSettings.Mode}
			on:change={(event) => handleChange(event, "Mode")}
		>
			<option value="minify">Minify</option>
			<option value="beautify">Beautify</option>
		</select> Mode
	</label>
	<label>
		<input
			type="checkbox"
			bind:checked={formatSettings.RenameVariables}
			on:change={(event) => handleChange(event, "RenameVariables")}
		/> Rename Variables
	</label>
	<label>
		<input
			type="checkbox"
			bind:checked={formatSettings.RenameGlobals}
			on:change={(event) => handleChange(event, "RenameGlobals")}
		/> Rename Globals
	</label>
	<label>
		<input
			type="checkbox"
			bind:checked={formatSettings.SolveMath}
			on:change={(event) => handleChange(event, "SolveMath")}
		/> Solve Math
	</label>
	<!-- {#each Object.entries(formatSettings) as [key, value]}
		<label>
			{key}
			{#if typeof value === "boolean"}
				<input
					type="checkbox"
					bind:checked={formatSettings[key]}
					on:change={(event) => handleChange(event, key)}
				/>
			{:else if typeof value === }
				<p>todo</p>
			{/if}
		</label>
	{/each} -->
</div>
