import { derived, type Writable, writable } from 'svelte/store';

import translations, { type Translation, Locale } from '../../locales/translations';

type TranslationVars = { [key: string]: string };

export const locale: Writable<Locale> = writable(Locale.EN);

const translate = (locale: Locale, key: string, vars: TranslationVars): string => {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	let text: string | Translation = translations[locale];

	for (const part of key.split('.')) {
		if (typeof text === 'object' && text !== null) {
			text = text[part];
		} else {
			throw new Error(`no translation found for ${locale}.${key}`);
		}
	}

	if (typeof text === 'object' && text !== null && 'toString' in text) {
		text = text.toString();
	}

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`%{ ${k} }`, 'g');
		if (typeof text === 'string') text = text.replace(regex, vars[k]);
	});

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);
	return text;
};

export const t = derived(
	locale,
	($locale: Locale) =>
		(key: string, vars: TranslationVars = {}): string =>
			translate($locale, key, vars)
);
