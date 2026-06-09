type TnValue = string | number | boolean | null | undefined;

interface I18nTranslator {
	t: (key: string) => string;
	te: (key: string) => boolean;
}

export default defineNuxtPlugin({
	name: 'tn',
	enforce: 'post',
	setup(nuxtApp) {
		const { t, te } = nuxtApp.$i18n as I18nTranslator;

		const tn = (value: TnValue): string => {
			if (typeof value !== 'string') return String(value ?? '');
			return te(value) ? t(value) : value;
		};

		nuxtApp.vueApp.config.globalProperties.$tn = tn;

		return {
			provide: {
				tn,
			},
		};
	},
});
