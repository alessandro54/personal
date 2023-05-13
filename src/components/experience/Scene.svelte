<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { interactivity, useGltf, HTML, OrbitControls } from '@threlte/extras';
	import { MeshLambertMaterial, GridHelper } from 'three';
	import { spring } from 'svelte/motion';

	const gltf = useGltf('/models/arrow.glb');
	interactivity();
	const scale = spring(1);
	let rotation = 0;

	useFrame((state, delta) => {
		rotation += delta;
	});
</script>

<!--  X POS Y NEG -Z FRONT -->
{#if $gltf}
	<T.PerspectiveCamera makeDefault position={[2, 0.3, 25]} fov={20}>
		<OrbitControls
			enableZoom={false}
		/>
	</T.PerspectiveCamera>
	<T.AxesHelper/>
	<T.DirectionalLight position={[1, -3, 30]} />
	<T.AmbientLight intensity={0.3} />
	<T.Mesh
		scale={$scale}
		position={[-2, 0, 0]}
		rotation.z={-Math.PI / 2}
		geometry={$gltf.nodes['Vert001'].geometry}
		material={new MeshLambertMaterial({ color: '#38bdf8' })}
	>
	<HTML>
		<button class="hidden text-red-300 rounded bg-sky-300">
			Click me
		</button>
	</HTML>
</T.Mesh>
{/if}
