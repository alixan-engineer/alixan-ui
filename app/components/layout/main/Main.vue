<script setup lang="ts">
import { ArrowUpRight, Blocks, Code2, Smartphone, Triangle } from '@lucide/vue';

const frameworks = [
	{
		key: 'nuxt',
		href: 'https://nuxt.ui.alixan.kz',
		isReady: true,
		icon: Code2,
		accent: 'from-emerald-400/20 via-cyan-400/10 to-transparent',
		iconClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
	},
	{
		key: 'angular',
		isReady: false,
		icon: Triangle,
		accent: 'from-rose-400/18 via-red-400/10 to-transparent',
		iconClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-300',
	},
	{
		key: 'flutter',
		isReady: false,
		icon: Smartphone,
		accent: 'from-sky-400/20 via-blue-400/10 to-transparent',
		iconClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-300',
	},
];
</script>

<template>
	<main class="flex-1 mx-auto grid place-items-center">
		<div class="w-full max-w-6xl space-y-5 md:space-y-7">
			<div class="mx-auto max-w-4xl space-y-4 text-center md:space-y-5">
				<h1
					class="mx-auto max-w-4xl text-balance text-[2.45rem] font-semibold leading-[0.95] tracking-normal text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
				>
					{{ $tn('main.title') }}
				</h1>

				<p
					class="mx-auto max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg md:text-xl md:leading-8"
				>
					{{ $tn('main.description') }}
				</p>
			</div>

			<div class="grid gap-3 md:grid-cols-3 md:gap-4">
				<component
					:is="framework.isReady ? 'a' : 'button'"
					v-for="framework in frameworks"
					:key="framework.key"
					:href="framework.isReady ? framework.href : undefined"
					:rel="framework.isReady ? 'noreferrer' : undefined"
					:type="framework.isReady ? undefined : 'button'"
					:disabled="framework.isReady ? undefined : true"
					class="group relative flex min-h-37 overflow-hidden rounded-[1.75rem] border bg-background/78 p-4 text-left shadow-sm backdrop-blur-xl transition md:min-h-68 md:p-5"
					:class="
						framework.isReady
							? 'hover:-translate-y-1 hover:border-foreground/25 hover:bg-card hover:shadow-2xl hover:shadow-foreground/10'
							: 'cursor-not-allowed'
					"
				>
					<div
						class="absolute inset-0 bg-linear-to-br opacity-90 transition group-hover:opacity-100"
						:class="framework.accent"
					/>
					<div
						class="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent"
					/>

					<div class="relative flex w-full flex-col justify-between gap-5">
						<div class="flex items-start justify-between gap-3">
							<div
								class="flex size-11 items-center justify-center rounded-2xl border border-foreground/5"
								:class="framework.iconClass"
							>
								<component
									:is="framework.icon"
									class="size-5"
									aria-hidden="true"
								/>
							</div>

							<Status
								:label="
									$tn(
										framework.isReady
											? 'main.status.ready'
											: 'main.status.soon',
									)
								"
								:type="framework.isReady ? 'success' : 'warning'"
							/>
						</div>

						<div class="space-y-4">
							<div class="space-y-2">
								<h2 class="text-3xl font-semibold md:text-4xl">
									{{ $tn(`main.frameworks.${framework.key}.label`) }}
								</h2>
								<p
									class="max-w-sm text-sm leading-6 text-muted-foreground md:text-base md:leading-7"
								>
									{{ $tn(`main.frameworks.${framework.key}.description`) }}
								</p>
							</div>

							<div
								class="flex items-center justify-between gap-3 border-t pt-3 text-sm font-medium"
							>
								<span>
									{{ $tn(`main.frameworks.${framework.key}.action`) }}
								</span>
								<ArrowUpRight
									v-if="framework.isReady"
									class="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									aria-hidden="true"
								/>
								<Blocks
									v-else
									class="size-4 text-muted-foreground"
									aria-hidden="true"
								/>
							</div>
						</div>
					</div>
				</component>
			</div>

			<div
				class="text-center text-xs font-medium text-muted-foreground sm:text-sm mb-6"
			>
				{{ $tn('main.note') }}
			</div>
		</div>
	</main>
</template>
