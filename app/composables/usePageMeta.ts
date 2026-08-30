import { siteConfig } from '~/config/site/site';

interface PageMetaOptions {
	title?: string;
	description?: string;
	img?: string;
}

export const usePageMeta = (payload?: PageMetaOptions): void => {
	const { t } = useI18n();
	const route = useRoute();

	const metaTitle = t(payload?.title || siteConfig.title);
	const metaDescription = t(payload?.description || siteConfig.description);
	const metaImage = payload?.img || siteConfig.ogImage;

	useSeoMeta({
		title: metaTitle,
		description: metaDescription,
		ogType: 'website',
		ogSiteName: siteConfig.name,
		ogTitle: metaTitle,
		ogDescription: metaDescription,
		ogUrl: siteConfig.url + route.path,
		ogImage: metaImage,
		twitterCard: 'summary_large_image',
		twitterTitle: metaTitle,
		twitterDescription: metaDescription,
		twitterImage: metaImage,
	});
};
