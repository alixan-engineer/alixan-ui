<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';
</script>

<template>
	<header
		class="w-full h-14 max-sm:px-2 sm:px-4 flex items-center gap-4 bg-secondary dark:bg-background/30 border z-30 rounded-full"
	>
		<IconButton
			variant="ghost"
			color="default"
			href="https://alixan.kz/"
			:label="$tn('app.back')"
		>
			<ArrowLeft />
		</IconButton>
		<Logo />
		<div class="flex-1" />
		<HeaderSettings />
	</header>
</template>
