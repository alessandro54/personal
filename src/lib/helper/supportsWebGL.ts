// This only works when content is rendered (onMount)
const supportsWebGL = (doc: Document): boolean => {
	try {
		const canvas = doc.createElement('canvas') as HTMLCanvasElement;
		const context: WebGLRenderingContext | RenderingContext | null =
			canvas.getContext('webgl2') ?? canvas?.getContext('webgl');

		if (context) {
			const rendererInfo = context.getExtension('WEBGL_debug_renderer_info');
			if (rendererInfo != null) {
				return true;
			}
		} else {
			throw new Error('WebGL is not supported');
		}
	} catch (error) {
		return false;
	}
	return false;
};

export default supportsWebGL;
