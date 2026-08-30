<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';
</script>

<template>
	<header class="max-md:h-16 md:h-24 border-b">
		<div class="size-full max-w-container mx-auto px-4 flex items-center gap-6">
			<IconButton
				variant="ghost"
				color="default"
				size="responsive"
				href="https://alixan.kz/"
			>
				<ArrowLeft />
			</IconButton>
			<Logo />
		</div>
	</header>
</template>
