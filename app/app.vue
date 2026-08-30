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
	<NuxtPage />
</template>
