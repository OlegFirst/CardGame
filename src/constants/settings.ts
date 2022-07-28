export interface CardInterface {
    suit: string,
    name: string
};

export interface CardComponentInterface {
    suit: string,
    name: string,
	isHide: boolean
};

type StyleOptions = {
	[key: string]: string
};

export const PIPS_COLOR_MAP: StyleOptions = {
	'Hearts': 'red',
	'Daimonds': 'red',
	'Clubs': 'black',
	'Spades': 'black'
};

export const PIPS_SUIT_MAP: StyleOptions = {
	'Hearts': '&#9829;',
	'Daimonds': '&#9830;',
	'Clubs': '&#9831;',
	'Spades': '&#9828;',
};