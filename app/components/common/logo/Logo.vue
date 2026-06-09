<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
	<NuxtLink :to="localePath('/')" class="flex items-center gap-2">
		<img
			src="/favicon.svg"
			alt="Alixan UI"
			priority
			width="32"
			height="32"
			class="size-8"
		/>
		<span class="text-xl font-semibold">Alixan UI</span>
	</NuxtLink>
</template>
