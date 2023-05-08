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
	class="w-1/2"
>
	<div on:click|stopPropagation on:keydown|stopPropagation>
		<slot name="header">
			<hr />
		</slot>
		<hr />
		<button on:click={() => dialog.close()}>close modal</button>
	</div>
</dialog>
