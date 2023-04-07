import { type Writable, writable, type Updater } from 'svelte/store';

enum Theme {
	Light = 'light',
	Dark = 'dark',
	Auto = 'auto'
}
type ThemeStore = {
	subscribe: Writable<Theme>['subscribe'];
	set: (n: string) => void;
	update: (cb: Updater<Theme>) => void;
};

export const theme = (): ThemeStore => {
	const store = writable(Theme.Auto);
	const { subscribe, set, update } = store;
	const isBrowser = typeof window !== 'undefined';

	const setTheme = (theme: Theme) => {
		if (theme === Theme.Dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		set(theme);
	};

	if (isBrowser) {
		// If is not saved in localStorage, check if the user has a dark theme
		if (localStorage.getItem('theme') !== null) {
			setTheme(localStorage.getItem('theme') as Theme);
		}
		if (matchMedia('(prefers-color-scheme: dark)').matches) {
			//Dark mode
			localStorage.setItem('theme', 'dark');
		} else {
			//Light mode
			localStorage.setItem('theme', 'light');
		}
	}

	return {
		subscribe,
		set: (t: string) => {
			if (isBrowser) window.localStorage.setItem('theme', t);
			setTheme(t as Theme);
			set(t as Theme);
		},
		update: (t: Updater<Theme>) => update(t)
	};
};
