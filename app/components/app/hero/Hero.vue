<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import NuxtLogo from '~/assets/img/nuxt.svg?url';
import FigmaLogo from '~/assets/img/figma.svg?url';

const frameworks = [
	{
		key: 'nuxt',
		href: 'https://nuxt.ui.alixan.kz/',
		img: NuxtLogo,
		category: 'frameworkLabel',
		accent: '#00c690',
	},
	{
		key: 'figma',
		href: 'https://www.figma.com/design/isvdD0xllqbqFak7jsjeWH/Alixan-UI?node-id=4-135',
		img: FigmaLogo,
		category: 'designLabel',
		accent: '#a259ff',
	},
];
</script>

<template>
	<div class="size-full min-h-150 px-6 py-24 space-y-20">
		<div class="space-y-6">
			<SectionTitle>{{ $t('hero.title') }}</SectionTitle>
			<SectionSubtitle>
				{{ $t('hero.subtitle') }}
			</SectionSubtitle>
		</div>

		<div class="flex flex-wrap gap-6">
			<a
				v-for="framework in frameworks"
				:key="framework.key"
				:href="framework.href"
				:style="{ '--card-accent': framework.accent }"
				class="w-full min-w-0 max-w-xl p-6 space-y-6 border rounded-4xl bg-[color-mix(in_srgb,var(--card-accent)_3%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
			>
				<div class="flex gap-6">
					<div class="min-w-0 flex-1 space-y-4">
						<div class="flex items-center justify-between">
							<div class="space-y-4">
								<Status :label="$t(`hero.${framework.category}`)" type="success" size="sm" />
								<h1 class="font-bold md:text-4xl max-md:text-3xl">
									{{ $t(`main.frameworks.${framework.key}.label`) }}
								</h1>
							</div>
							<div
								class="size-20 p-4 flex items-center justify-center rounded-3xl border bg-[color-mix(in_srgb,var(--card-accent)_8%,transparent)] md:hidden"
							>
								<img
									:src="framework.img"
									:alt="framework.key"
									class="size-full"
								/>
							</div>
						</div>
						<p class="text-muted-foreground md:text-lg max-md:text-md">
							{{ $t(`main.frameworks.${framework.key}.description`) }}
						</p>
						<span
							class="inline-flex items-center justify-center gap-2 border font-medium h-9 rounded-lg px-3 text-md md:h-12 md:rounded-2xl md:px-5 md:text-lg bg-[color-mix(in_srgb,var(--card-accent)_3%,transparent)]"
						>
							{{ $t('hero.open') }}
							<ArrowRight class="size-5 md:size-7" aria-hidden="true" />
						</span>
					</div>
					<div
						class="size-42 shrink-0 p-6 flex items-center justify-center rounded-4xl border bg-[color-mix(in_srgb,var(--card-accent)_8%,transparent)] max-md:hidden"
					>
						<img :src="framework.img" :alt="framework.key" class="size-full" />
					</div>
				</div>
			</a>
		</div>
	</div>
</template>
