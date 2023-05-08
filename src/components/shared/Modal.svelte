<script lang="ts">
	export let showModal: boolean; // boolean

	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	on:keydown={(e) => {
		if (e.key === 'Escape') dialog.close();
	}}
	class="w-full h-1/2 sm:w-1/2 rounded-xl p-5"
>
	<div on:click|stopPropagation on:keydown|stopPropagation>
		<slot name="header" />
		<slot />
		<hr class="mt-5"/>
		<div class="mt-5 sm:mt-6 flex w-full justify-end">
			<button
				on:click={() => dialog.close()}
				class="inline-flex w-1/4 justify-center rounded-md bg-sky-200 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
			>
				Close
			</button>
		</div>
	</div>
</dialog>
