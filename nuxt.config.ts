import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './app/config/site/site';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devServer: {
		port: 9001,
	},
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	site: {
		url: siteConfig.url,
		name: siteConfig.name,
	},
	app: {
		rootId: 'root',
	},
	css: ['~/assets/css/tailwind.css'],
	features: {
		inlineStyles: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
	components: [{ path: '~/components', pathPrefix: false }],
	modules: [
		'@nuxtjs/sitemap',
		[
			'@nuxtjs/i18n',
			{
				defaultLocale: 'en',
				strategy: 'prefix_except_default',
				detectBrowserLanguage: false,
				locales: [
					{ code: 'en', name: 'English', file: 'en.json' },
					{ code: 'ru', name: 'Русский', file: 'ru.json' },
					{ code: 'kk', name: 'Қазақша', file: 'kk.json' },
				],
			},
		],
		['@nuxtjs/google-fonts', { families: { Geist: true } }],
		'@nuxtjs/color-mode',
	],
	sitemap: {
		autoLastmod: true,
	},
	colorMode: {
		preference: 'system',
		fallback: 'light',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storage: 'cookie',
		storageKey: 'nuxt-color-mode',
	},
});
