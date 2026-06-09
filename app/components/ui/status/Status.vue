<script setup lang="ts">
import { computed, useAttrs } from 'vue';

import { cn } from '~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type StatusType = 'success' | 'warning' | 'info' | 'error';
type StatusSize = 'sm' | 'md' | 'lg';

interface StatusProps {
	label?: string;
	type?: StatusType;
	size?: StatusSize;
}

const props = withDefaults(defineProps<StatusProps>(), {
	label: undefined,
	type: 'info',
	size: 'md',
});

const attrs = useAttrs();

const sizeClasses: Record<StatusSize, string> = {
	sm: 'h-7 gap-1.5 rounded-full px-2.5 text-sm',
	md: 'h-8 gap-2 rounded-full px-3 text-sm',
	lg: 'h-10 gap-2.5 rounded-full px-4 text-base [&_.status-dot]:size-2',
};

const toneClasses: Record<StatusType, string> = {
	success:
		'border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:border-emerald-400/35 dark:bg-emerald-400/20 dark:text-emerald-300 [&_.status-dot]:bg-emerald-500',
	warning:
		'border-amber-500/35 bg-amber-500/20 text-amber-700 dark:border-amber-400/35 dark:bg-amber-400/20 dark:text-amber-300 [&_.status-dot]:bg-amber-500',
	info: 'border-blue-500/30 bg-blue-500/15 text-blue-700 dark:border-blue-400/35 dark:bg-blue-400/20 dark:text-blue-300 [&_.status-dot]:bg-blue-500',
	error:
		'border-red-500/30 bg-red-500/15 text-red-700 dark:border-red-400/35 dark:bg-red-400/20 dark:text-red-300 [&_.status-dot]:bg-red-500',
};

const statusClass = computed(() =>
	cn(
		'inline-flex w-fit items-center justify-center border font-medium',
		sizeClasses[props.size],
		toneClasses[props.type],
		attrs.class,
	),
);
</script>

<template>
	<div v-bind="{ ...attrs, class: undefined }" :class="statusClass">
		<span class="status-dot size-1.5 rounded-full" aria-hidden="true" />
		<span>
			<slot>
				{{ label }}
			</slot>
		</span>
	</div>
</template>
