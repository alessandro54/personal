import { writable, type Writable } from 'svelte/store';

export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeStore {
	subscribe: Writable<Theme>['subscribe'];
	set: (value: Theme) => void;
}

const createTheme = (): ThemeStore | undefined => {
	if (typeof window === 'undefined') return undefined; // ? Guard condition

	const initialValue = (localStorage.getItem('theme') as Theme) ?? 'auto';

	const { subscribe, set }: Writable<Theme> = writable(initialValue);

	const setDarkTheme = (): void => {
		document.documentElement.classList.add('dark');
	};

	const setLightTheme = (): void => {
		document.documentElement.classList.remove('dark');
	};

	const setTheme = (theme: Theme): void => {
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		if (theme === 'auto') prefersDark ? setDarkTheme() : setLightTheme();
		else theme === 'dark' ? setDarkTheme() : setLightTheme();
		localStorage.setItem('theme', theme);
		set(theme);
	};

	setTheme(initialValue);

	return {
		subscribe,
		set: (value: Theme) => setTheme(value)
	};
};

export const theme = createTheme();
