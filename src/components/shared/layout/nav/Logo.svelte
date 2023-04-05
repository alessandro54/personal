<script lang="ts">
	import { IcosahedronGeometry, MeshStandardMaterial } from 'three';
	import { DirectionalLight, Mesh, useFrame } from '@threlte/core';
	import { goto } from '$app/navigation';

	let rotation: number = 0;
	useFrame(() => {
		rotation += 0.004;
	});

	$: material = new MeshStandardMaterial({ color: '#38bdf8' });
</script>

<DirectionalLight position={{ y: 15, z: 10 }} />
<Mesh
	interactive
	rotation={{
		x: rotation,
		y: rotation,
		z: rotation
	}}
	on:pointerenter={() => {
		material.color.set('#6366f1');
	}}
	on:pointerleave={() => {
		material.color.set('#38bdf8');
	}}
	on:click={() => {
		material.color.set('#f59e0b');
		goto('/')
	}}
	geometry={new IcosahedronGeometry(3.3)}
	{material}
/>
