<script lang="ts">
	import { t } from '$lib/stores/i18n';
	import { T, useFrame } from '@threlte/core';
	import { interactivity, useGltf, HTML, OrbitControls } from '@threlte/extras';
	import { MeshLambertMaterial } from 'three';
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import { spring } from 'svelte/motion';

	const gltf = useGltf('/models/arrow.glb');
	interactivity();
	const scale = spring(1);
	let rotation = 0;

	useFrame((state, delta) => {
		rotation += delta;
	});
</script>

{#if $gltf}
	<T.PerspectiveCamera makeDefault position={[12, 10, 17]} fov={20}>
		<OrbitControls
			target.y={0.75}
			maxPolarAngle={85 * DEG2RAD}
			minPolarAngle={20 * DEG2RAD}
			maxAzimuthAngle={45 * DEG2RAD}
			minAzimuthAngle={-45 * DEG2RAD}
			enableZoom={false}
		/>
	</T.PerspectiveCamera>
	<T.DirectionalLight position={[10, 10, 4]} />
	<T.AmbientLight intensity={0.3} />

	<T.Mesh
		scale={$scale}
		position={[-2, 0, 0]}
		rotation.z={-Math.PI / 2}
		geometry={$gltf.nodes['Vert001'].geometry}
		material={new MeshLambertMaterial({ color: '#38bdf8' })}
	>
		<HTML
			position={[-0.8, 0.1, -2]}
			rotation.z={Math.PI / 2}
			rotation.x={-Math.PI / 7}
			transform
			pointerEvents="none"
			zIndexRange={[0, 0]}
		>
			<button class="p-1 text-xs text-cyan-500 rounded border bg-slate-200 border-cyan-800">
				{$t('experience.arrowSection.indication')}
			</button>
		</HTML>
</T.Mesh>
{/if}
