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
	nitro: {
		prerender: {
			routes: ['/'],
		},
	},
	app: {
		rootId: 'root',
		head: {
			titleTemplate: '%s',
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: '',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap',
				},
			],
			meta: [
				{ name: 'theme-color', content: '#050505' },
				{ name: 'color-scheme', content: 'dark' },
			],
		},
	},
});
