export interface CardInterface {
    suit: string,
    name: string
};

type styleOptions = {
	[key: string]: string
};

type styleOptions1 = {
	[key: string]: number
};

export const PIPS_COLOR_MAP: styleOptions = {
	'Hearts': 'red',
	'Daimonds': 'red',
	'Clubs': 'black',
	'Spades': 'black'
};

export const PIPS_SUIT_MAP: styleOptions = {
	'Hearts': '&#9829;',
	'Daimonds': '&#9830;',
	'Clubs': '&#9831;',
	'Spades': '&#9828;',
};