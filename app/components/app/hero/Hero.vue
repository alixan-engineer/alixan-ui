<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import NuxtLogo from '~/assets/img/nuxt.svg?url';

const frameworks = [
	{
		key: 'nuxt',
		href: 'https://nuxt.ui.alixan.kz/',
		img: NuxtLogo,
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
				class="max-w-xl p-6 space-y-6 border rounded-4xl bg-[#00c69008]"
			>
				<div class="flex gap-6">
					<div class="flex-1 space-y-4">
						<div class="flex items-center justify-between">
							<div class="space-y-4">
								<Status :label="$t('hero.frameworkLabel')" type="success" size="sm" />
								<h1 class="font-bold md:text-4xl max-md:text-3xl">
									{{ $t(`main.frameworks.${framework.key}.label`) }}
								</h1>
							</div>
							<div
								class="size-20 p-4 flex items-center justify-center rounded-3xl border bg-[#00c69014] md:hidden"
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
						<Button
							variant="outlined"
							color="secondary"
							size="responsive"
							class="bg-[#00c69008]!"
						>
							{{ $t('hero.open') }}
							<template #trailing>
								<ArrowRight />
							</template>
						</Button>
					</div>
					<div
						class="size-42 p-6 flex items-center justify-center rounded-4xl border bg-[#00c69014] max-md:hidden"
					>
						<img :src="framework.img" :alt="framework.key" class="size-full" />
					</div>
				</div>
			</a>
		</div>
	</div>
</template>
