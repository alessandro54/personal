import en from './en';
import es from './es';

export default {
	...en,
	...es
};

export enum Locale {
  EN = 'en',
  ES = 'es',
}

export type Translation = {
	[key: string]: string | Translation;
}
