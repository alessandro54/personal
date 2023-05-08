<script lang="ts">
	import { IcosahedronGeometry, MeshStandardMaterial } from 'three';
	import { T, useFrame } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { goto } from '$app/navigation';

	let rotation: number = 0;

	useFrame(() => {
		rotation += 0.004;
	});

	$: material = new MeshStandardMaterial({ color: '#38bdf8' });
	interactivity();
</script>

<T.DirectionalLight position.y={15} position.z={10} />
<T.Mesh
	interactive
	rotation.x={rotation}
	rotation.y={rotation}
	rotation.z={rotation}
	on:pointerenter={() => {
		material.color.set('#6366f1');
	}}
	on:pointerleave={() => {
		material.color.set('#38bdf8');
	}}
	on:click={() => {
		material.color.set('#f59e0b');
		goto('/');
	}}
	geometry={new IcosahedronGeometry(3.3)}
	{material}
/>
