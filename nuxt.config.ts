import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './app/config/site/site';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devServer: { port: 9001 },
	devtools: {
		enabled: true,
		timeline: { enabled: true },
	},
	app: {
		rootId: 'root',
	},
	css: ['~/assets/css/tailwind.css'],
	features: { inlineStyles: true },
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: ['@vue/devtools-core', '@vue/devtools-kit', '@lucide/vue'],
		},
	},
	components: [{ path: '~/components', pathPrefix: false }],
	modules: [
		'@nuxtjs/i18n',
		['@nuxtjs/google-fonts', { families: { Geist: { wght: '200..900' } } }],
		'@nuxtjs/sitemap',
		'@nuxtjs/color-mode',
		'nuxt-svgo-loader',
		'nuxt-lottie',
	],
	site: {
		url: siteConfig.url,
		name: siteConfig.name,
	},
	sitemap: {
		autoLastmod: true,
	},
	i18n: {
		vueI18n: './configs/i18n.config.ts',
		defaultLocale: 'ru',
		strategy: 'prefix_except_default',
		detectBrowserLanguage: false,
		locales: [
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'ru', name: 'Русский', file: 'ru.json' },
			{ code: 'kk', name: 'Қазақша', file: 'kk.json' },
		],
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
	lottie: {
		componentName: 'Lottie',
		lottieFolder: '/assets/lottie',
		autoFolderCreation: true,
	},
});
