import * as runtime from '$lib/paraglide/runtime';
import { createI18n } from '@inlang/paraglide-sveltekit';
export const i18n = createI18n(runtime,{
	// https://github.com/opral/inlang-paraglide-js/issues/233 
	// exclude images files : .png, .jpg, .svg
	exclude:[/^\/.*\.(svg|jpg|jpeg|png)$/]
});
