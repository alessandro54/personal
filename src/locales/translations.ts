import en from './en';
import es from './es';
import ru from './ru';

export default {
	...en,
	...es,
	...ru
};

export enum Locale {
  EN = 'en',
  ES = 'es',
	RU = 'ru'
}

export type Translation = {
	[key: string]: string | Translation;
}
