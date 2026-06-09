<script setup lang="ts">
import { computed, resolveComponent, useAttrs } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import { cn } from '~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type IconButtonVariant = 'filled' | 'outlined' | 'ghost';
type IconButtonColor = 'default' | 'primary' | 'secondary' | 'destructive';
type IconButtonSize = 'sm' | 'md' | 'lg';
type IconButtonTarget = '_blank' | '_self' | '_parent' | '_top';

interface IconButtonProps {
	label?: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: IconButtonVariant;
	color?: IconButtonColor;
	size?: IconButtonSize;
	to?: RouteLocationRaw;
	href?: string;
	target?: IconButtonTarget;
}

const props = withDefaults(defineProps<IconButtonProps>(), {
	type: 'button',
	variant: 'ghost',
	color: 'default',
	size: 'md',
	to: undefined,
	href: undefined,
	target: undefined,
});

const attrs = useAttrs();
const NuxtLink = resolveComponent('NuxtLink');

const sizeClasses: Record<IconButtonSize, string> = {
	sm: 'size-9 rounded-lg [&_svg]:size-4',
	md: 'size-11 rounded-xl [&_svg]:size-6',
	lg: 'size-12 rounded-2xl [&_svg]:size-7',
};

const toneClasses: Record<
	IconButtonVariant,
	Record<IconButtonColor, string>
> = {
	filled: {
		default:
			'border-foreground bg-foreground text-background hover:bg-foreground/90 focus-visible:bg-foreground/90',
		primary:
			'border-primary bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:bg-primary/90',
		secondary:
			'border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80',
		destructive:
			'border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:bg-destructive/90',
	},
	outlined: {
		default:
			'border-border bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground',
		primary:
			'border-primary/25 bg-transparent text-primary hover:bg-primary/10 focus-visible:bg-primary/10',
		secondary:
			'border-border bg-secondary/70 text-secondary-foreground hover:bg-secondary focus-visible:bg-secondary',
		destructive:
			'border-destructive/25 bg-transparent text-destructive hover:bg-destructive/10 focus-visible:bg-destructive/10',
	},
	ghost: {
		default:
			'border-transparent bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground',
		primary:
			'border-transparent bg-transparent text-primary hover:bg-primary/10 focus-visible:bg-primary/10',
		secondary:
			'border-transparent bg-transparent text-secondary-foreground hover:bg-secondary focus-visible:bg-secondary',
		destructive:
			'border-transparent bg-transparent text-destructive hover:bg-destructive/10 focus-visible:bg-destructive/10',
	},
};

const iconButtonClass = computed(() =>
	cn(
		'inline-flex shrink-0 items-center justify-center border font-medium cursor-pointer focus-visible:outline-none',
		sizeClasses[props.size],
		toneClasses[props.variant][props.color],
		attrs.class,
	),
);
</script>

<template>
	<component
		:is="to ? NuxtLink : href ? 'a' : 'button'"
		v-bind="{ ...attrs, class: undefined }"
		:to="to"
		:href="href"
		:target="target"
		:type="to || href ? undefined : type"
		:aria-label="label"
		:class="iconButtonClass"
	>
		<slot />
	</component>
</template>
