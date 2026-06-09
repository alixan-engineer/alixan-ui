<script setup lang="ts">
import { Check, ChevronDown } from '@lucide/vue';
import { computed, nextTick, ref } from 'vue';

import { cn } from '~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type SelectValue = string | number;

interface SelectOption {
	label: string;
	value: SelectValue;
	disabled?: boolean;
}

interface SelectProps {
	label?: string;
	placeholder?: string;
	options?: SelectOption[];
	disabled?: boolean;
	teleport?: boolean;
}

const props = withDefaults(defineProps<SelectProps>(), {
	label: '',
	placeholder: 'Select option',
	options: () => [],
	disabled: false,
	teleport: true,
});

const emit = defineEmits<{
	change: [option: SelectOption];
}>();

const model = defineModel<SelectValue | null>({ default: null });

const triggerRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const open = ref(false);
const menuStyle = ref<Record<string, string>>({});

const selectedOption = computed(
	() => props.options.find(option => option.value === model.value) ?? null,
);

const hasSelectedValue = computed(() => selectedOption.value !== null);
const isFocused = computed(() => open.value || hasSelectedValue.value);

const selectedLabel = computed(
	() => selectedOption.value?.label ?? props.placeholder,
);

const updateMenuPosition = () => {
	const trigger = triggerRef.value;

	if (!trigger || !import.meta.client) return;

	const rect = trigger.getBoundingClientRect();
	const width = rect.width;
	const offset = 4;

	if (!props.teleport) {
		menuStyle.value = {
			top: `calc(100% + ${offset}px)`,
			left: '0',
			minWidth: '100%',
			maxWidth: '100%',
		};
		return;
	}

	menuStyle.value = {
		top: `${rect.bottom + offset}px`,
		left: `${rect.left}px`,
		minWidth: `${width}px`,
		maxWidth: `${Math.min(width, window.innerWidth - 16)}px`,
	};
};

const openSelect = async (): Promise<void> => {
	if (props.disabled) return;
	open.value = true;
	await nextTick();
	updateMenuPosition();
	window.addEventListener('resize', closeSelect);
	window.addEventListener('scroll', closeSelect, true);
	document.addEventListener('mousedown', closeSelectOnOutside, true);
};

const closeSelect = () => {
	open.value = false;
	window.removeEventListener('resize', closeSelect);
	window.removeEventListener('scroll', closeSelect, true);
	document.removeEventListener('mousedown', closeSelectOnOutside, true);
};

const closeSelectOnOutside = (event: MouseEvent) => {
	const target = event.target;
	if (!(target instanceof Node)) return;
	if (triggerRef.value?.contains(target) || menuRef.value?.contains(target))
		return;
	closeSelect();
};

const toggleSelect = () => (open.value ? closeSelect() : openSelect());

const selectOption = (option: SelectOption) => {
	if (option.disabled) return;
	model.value = option.value;
	emit('change', option);
	closeSelect();
};

onBeforeUnmount(closeSelect);
</script>

<template>
	<div :class="cn('relative w-full', label ? 'min-h-14' : '', $attrs.class)">
		<label
			v-if="label"
			:class="
				cn(
					'pointer-events-none absolute left-3 z-10 px-1 text-base font-normal transition-all duration-200 text-muted-foreground',
					isFocused ? 'top-1.5 text-xs' : 'top-4',
					disabled ? 'text-muted-foreground/50' : '',
				)
			"
		>
			{{ label }}
		</label>

		<button
			ref="triggerRef"
			type="button"
			:disabled="disabled"
			:class="
				cn(
					'flex w-full items-center justify-between gap-2 border px-4 text-left hover:bg-secondary/40 focus-visible:bg-secondary/40 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
					label ? 'h-14 rounded-2xl pt-2' : 'h-11 rounded-xl',
					open ? 'border-primary' : 'border-border',
				)
			"
			@click="toggleSelect"
		>
			<span
				:class="
					cn(
						'truncate text-base',
						label && !hasSelectedValue ? 'text-transparent' : '',
						!hasSelectedValue && !label ? 'text-muted-foreground' : '',
					)
				"
			>
				{{ selectedLabel }}
			</span>
			<ChevronDown
				:class="
					cn(
						'size-5 mb-1.5 text-muted-foreground transition-transform',
						open ? 'rotate-180' : '',
					)
				"
			/>
		</button>

		<Teleport to="body" :disabled="!teleport">
			<div
				v-if="open && teleport"
				class="fixed inset-0 z-10000"
				@mousedown.stop="closeSelect"
				@click.stop
			/>
			<div
				v-if="open"
				ref="menuRef"
				:class="
					cn(
						'max-h-72 overflow-auto rounded-lg border bg-popover p-1 shadow-md',
						teleport ? 'fixed z-10001' : 'absolute z-9999',
					)
				"
				:style="menuStyle"
				@mousedown.stop
			>
				<button
					v-for="option in options"
					:key="option.value"
					type="button"
					:disabled="option.disabled"
					:class="
						cn(
							'min-h-9 w-full flex items-center gap-3 rounded-md px-3 text-left text-md hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
							model === option.value ? 'bg-secondary' : '',
						)
					"
					@click="selectOption(option)"
				>
					<span class="min-w-0 flex-1 truncate">{{ option.label }}</span>
					<Check v-if="model === option.value" class="size-4" />
				</button>
			</div>
		</Teleport>
	</div>
</template>
