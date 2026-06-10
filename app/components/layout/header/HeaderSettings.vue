<script setup lang="ts">
import { Check, Contrast, Globe } from '@lucide/vue';

type Locale = 'en' | 'ru' | 'kk';
type ColorModePreference = 'system' | 'light' | 'dark';

const colorMode = useColorMode();
const { locale, setLocale } = useI18n();

const themeOpen = ref<boolean>(false);
const langOpen = ref<boolean>(false);

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

const setTheme = (value: ColorModePreference) => {
	colorMode.preference = value;
};
</script>

<template>
	<!-- Theme -->
	<DropdownMenu
		v-model:open="themeOpen"
		width="180px"
		height="380px"
		position="bottomRight"
	>
		<template #trigger>
			<IconButton
				variant="ghost"
				color="default"
				:label="$tn('settings.theme')"
			>
				<Contrast />
			</IconButton>
		</template>
		<div class="py-1">
			<div
				v-for="theme in themeOptions"
				:key="theme.value"
				:class="
					cn(
						'min-h-9 w-full flex items-center gap-3 rounded-md px-3 text-left text-md hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
					)
				"
				@click="
					setTheme(theme.value);
					themeOpen = false;
				"
			>
				<span class="min-w-0 flex-1 truncate">{{ theme.label }}</span>
				<Check v-if="colorMode.preference === theme.value" class="size-4" />
			</div>
		</div>
	</DropdownMenu>

	<!-- Lang -->
	<DropdownMenu
		v-model:open="langOpen"
		width="180px"
		height="380px"
		position="bottomRight"
	>
		<template #trigger>
			<IconButton
				variant="ghost"
				color="default"
				:label="$tn('settings.language')"
			>
				<Globe />
			</IconButton>
		</template>
		<div class="py-1">
			<div
				v-for="lang in languageOptions"
				:key="lang.value"
				:class="
					cn(
						'min-h-9 w-full flex items-center gap-3 rounded-md px-3 text-left text-md hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
					)
				"
				@click="
					changeLocale(lang.value);
					langOpen = false;
				"
			>
				<span class="min-w-0 flex-1 truncate">{{ lang.label }}</span>
				<Check v-if="locale === lang.value" class="size-4" />
			</div>
		</div>
	</DropdownMenu>
</template>
