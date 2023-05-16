<script lang="ts">
	import type { PageData } from './$types';
	import { Canvas, T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import urlFor from '$lib/helper/img/urlFor';

	export let data: PageData;
</script>

<section
	class="w-full h-full bg-gray-50 dark:bg-gray-800 grid place-items-center"
>
	<div>
		<img
			src={urlFor(data.hero.image).width(200).url()}
			alt={data.hero.firstName}
			class="rounded-full"
		/>
		<Canvas>
			<T.PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40}>
				<OrbitControls
					maxPolarAngle={90 * DEG2RAD}
					minPolarAngle={90 * DEG2RAD}
					enableZoom={false}
				/>
			</T.PerspectiveCamera>
			<T.DirectionalLight position.y={15} position.z={10} />
			<T.Mesh rotation.x={90 * DEG2RAD}>
				<T.CylinderGeometry args={[2, 2, 0.3, 64]} />
				<T.MeshStandardMaterial color="pink" />
			</T.Mesh>
		</Canvas>
		{data.hero.firstName}
	</div>
</section>
