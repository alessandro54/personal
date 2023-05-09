<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { HTML, OrbitControls, interactivity} from '@threlte/extras';
	import { Color, MeshStandardMaterial, IcosahedronGeometry } from 'three';
	import { spring } from 'svelte/motion';

	const getRandomColor = () =>
		`#${Math.floor(Math.random() * 16777215).toString(16)}`;

	let material = new MeshStandardMaterial({
		color: new Color(getRandomColor())
	});

  useFrame(() => {
		rotation += 0.004;
	});

  let rotation: number = 0;

	const onClick = () => {
		material.color.set(getRandomColor());
		material = material;
	};

  $: material = new MeshStandardMaterial({ color: '#38bdf8' });
  interactivity();

	let isHovering = false;
	let isPointerDown = false;

	let htmlPosZ = spring(0);
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
	}}
	geometry={new IcosahedronGeometry(3.3)}
	{material}
/>

