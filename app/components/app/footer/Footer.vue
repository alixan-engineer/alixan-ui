<script setup lang="ts"></script>

<template>
	<footer class="border-t md:pt-12 max-md:pt-8 pb-4 px-4 space-y-10">
		<div class="w-full max-w-container mx-auto flex gap-3 max-md:flex-col">
			<Logo />
			<div class="flex-1" />
			<div class="flex gap-4">
				<LangButton class="max-md:w-full" />
				<ThemeButton class="max-md:w-full" />
			</div>
		</div>

		<p class="md:text-lg max-md:text-md text-muted-foreground text-center">
			© 2026 Alixan
		</p>
	</footer>
</template>
