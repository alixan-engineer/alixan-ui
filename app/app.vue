<script setup lang="ts">
import { favicon } from './config/site/favicon';

const { locale } = useI18n();

usePageMeta();

useHead({
	htmlAttrs: { lang: locale.value },
	link: favicon,
});
</script>

<template>
	<div
		class="size-full max-w-container mx-auto px-4 py-6 space-y-10 overflow-y-auto z-40"
	>
		<NuxtPage />
	</div>

	<Wallpaper />
</template>
