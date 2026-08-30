<template>
	<div class="size-full flex flex-col">
		<slot name="app-bar" />

		<div class="flex-1 relative">
			<div class="absolute inset-0 z-0 overflow-y-auto flex flex-col">
				<slot name="body" />
			</div>
		</div>

		<slot name="bottom-navigation-bar" />
	</div>
</template>
