import en from './en';
import es from './es';
import ru from './ru';

export default {
	...en,
	...es,
	...ru
};

export type Translation = {
	[key: string]: string | Translation;
};

export enum Locale {
	EN = 'en',
	ES = 'es',
	RU = 'ru'
}
export const supportedLocales = [
	{ id: Locale.EN, name: 'English', default: true },
	{ id: Locale.ES, name: 'Español' },
	{ id: Locale.RU, name: 'Русский' }
];
