<script lang="ts">
  import { T } from '@threlte/core'
  import { useGltf } from '@threlte/extras'
  import { MeshBasicMaterial } from 'three'

	const gltf = useGltf('/models/arrow.glb')
	console.log(gltf)

</script>

{#if $gltf}
	<T.PerspectiveCamera position={[1,10,6]}/>
	<T.Mesh
		geometry={$gltf.scene.children[0].geometry}
		material={new MeshBasicMaterial({ color: '#38bdf8' })}
	/>
{/if}

