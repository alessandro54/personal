import { writable, type Writable, type Updater } from 'svelte/store';

export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeStore {
	subscribe: Writable<Theme>['subscribe'];
	set: (theme: Theme) => void;
	update: (updater: Updater<Theme>) => void;
}

export const theme = (): ThemeStore => {
	const store: Writable<Theme> = writable('auto');

	const setTheme = (theme: Theme): void => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
		store.set(theme);
	};

	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme) {
			setTheme(savedTheme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		}
	}

	return {
		subscribe: store.subscribe,
		set: setTheme,
		update: store.update
	};
};
