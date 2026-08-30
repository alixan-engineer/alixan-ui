<script setup lang="ts">
type ColorModePreference = 'system' | 'light' | 'dark';

const colorMode = useColorMode();

const themeOptions: Array<{ label: string; value: ColorModePreference }> = [
	{ label: 'Системная', value: 'system' },
	{ label: 'Светлая', value: 'light' },
	{ label: 'Темная', value: 'dark' },
];

const setTheme = (value: ColorModePreference): void => {
	colorMode.preference = value;
};
</script>

<template>
	<div>
		<Select
			:model-value="colorMode.preference"
			:options="themeOptions"
			@change="setTheme($event.value as ColorModePreference)"
		/>
	</div>
</template>
