type TnValue = string | number | boolean | null | undefined;
type Tn = (value: TnValue) => string;

declare module '#app' {
	interface NuxtApp {
		$tn: Tn;
	}
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$tn: Tn;
	}
}

export {};
