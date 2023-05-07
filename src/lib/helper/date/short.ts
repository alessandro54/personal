const format = (date: string): { year: number; month: string } => {
	const [year, month] = date.split('-').slice(0, 2);
	return {
		year: parseInt(year.slice(-2), 10),
		month: intToMonth(parseInt(month, 10) - 1)
	};
};

const intToMonth = (month: number): string => {
	return [
		'jan',
		'feb',
		'mar',
		'apr',
		'may',
		'jun',
		'jul',
		'aug',
		'sep',
		'oct',
		'nov',
		'dec'
	][month];
};

export default format;
