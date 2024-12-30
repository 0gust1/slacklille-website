<script lang="ts">
	import { WebGlShader } from 'svader';
	import { default as fx1 } from './fx1.frag?raw';
	import { default as fx2 } from './fx2.frag?raw';
	import { default as fx3 } from './fx3.frag?raw';
	import { getAllezLaaaa } from '$lib/uiState.svelte';

	const shaders = [fx1, fx2, fx3];
	// randomly select a shader
	
	const allez = getAllezLaaaa();
	const randomShaderIndex = Math.floor(Math.random() * shaders.length);
	allez.setAllezFx(randomShaderIndex);
	const shaderCode = shaders[randomShaderIndex];
</script>

<WebGlShader
	code={shaderCode}
	parameters={[
		{
			name: 'u_resolution',
			value: 'resolution'
		},
		{
			name: 'u_offset',
			value: 'offset'
		},
		{
			name: 'u_time',
			value: 'time'
		}
	]}
>
	<div class="fallback">WebGL not supported in this environment.</div>
</WebGlShader>
