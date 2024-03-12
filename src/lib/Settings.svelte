<script lang="ts">
	import type { FormatSettings } from "./SettingsType";

	export let formatSettings: FormatSettings;
</script>

<h2 class="font-bold">Options</h2>
<div class="border border-black flex flex-col w-1/2 p-1 rounded-sm">
	<label>
		<select class="border border-black dark:bg-zinc-950">
			<option value="minify">Minify</option>
			<option value="beautify">Beautify</option>
		</select> Mode
	</label>
	<label>
		<input type="checkbox" bind:checked={formatSettings.RenameVariables} /> Rename
		Variables
	</label>
	<label>
		<input type="checkbox" bind:checked={formatSettings.RenameGlobals} /> Rename
		Globals
	</label>
	<label>
		<input type="checkbox" bind:checked={formatSettings.SolveMath} /> Solve Math
	</label>
	<!-- <label>
		<select class="border border-black">
			<option value="minify">Light</option>
			<option value="beautify">Dark</option>
		</select> Theme
	</label> -->
</div>
