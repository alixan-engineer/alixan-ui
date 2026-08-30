<script setup lang="ts">
type Locale = 'en' | 'ru' | 'kk';

const { locale, setLocale } = useI18n();

const languageOptions: Array<{ label: string; value: Locale }> = [
	{ label: 'English', value: 'en' },
	{ label: 'Русский', value: 'ru' },
	{ label: 'Қазақша', value: 'kk' },
];

const changeLocale = async (value: Locale): Promise<void> => {
	useHead({
		htmlAttrs: { lang: value },
	});
	await setLocale(value);
};
</script>

<template>
	<div>
		<Select
			:model-value="locale"
			:options="languageOptions"
			@change="changeLocale($event.value as Locale)"
		/>
	</div>
</template>
