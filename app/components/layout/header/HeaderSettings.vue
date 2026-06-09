<script setup lang="ts">
import { Settings } from '@lucide/vue';

type Locale = 'en' | 'ru' | 'kk';
type ColorModePreference = 'system' | 'light' | 'dark';

const colorMode = useColorMode();
const { locale, setLocale } = useI18n();

const isOpen = ref<boolean>(false);

const languageOptions: Array<{ label: string; value: Locale }> = [
	{ label: 'English', value: 'en' },
	{ label: 'Русский', value: 'ru' },
	{ label: 'Қазақша', value: 'kk' },
];

const themeOptions: Array<{ label: string; value: ColorModePreference }> = [
	{ label: 'System', value: 'system' },
	{ label: 'Light', value: 'light' },
	{ label: 'Dark', value: 'dark' },
];

const changeLocale = async (value: Locale) => {
	useHead({
		htmlAttrs: { lang: value },
	});
	await setLocale(value);
};

const setTheme = (value: ColorModePreference): void => {
	colorMode.preference = value;
};
</script>

<template>
	<DropdownMenu
		v-model:open="isOpen"
		width="320px"
		height="380px"
		position="bottomRight"
	>
		<template #trigger>
			<IconButton variant="ghost" color="default" :label="$tn('app.settings')">
				<Settings />
			</IconButton>
		</template>

		<div class="space-y-5 px-3 py-5">
			<div class="space-y-2">
				<p class="px-1 text-sm font-medium text-muted-foreground">
					{{ $tn('settings.language') }}
				</p>
				<Select
					:model-value="locale"
					:options="languageOptions"
					@change="changeLocale($event.value as Locale)"
				/>
			</div>

			<div class="space-y-2">
				<p class="px-1 text-sm font-medium text-muted-foreground">
					{{ $tn('settings.theme') }}
				</p>
				<Select
					:model-value="colorMode.preference"
					:options="themeOptions"
					@change="setTheme($event.value as ColorModePreference)"
				/>
			</div>
		</div>
	</DropdownMenu>
</template>
