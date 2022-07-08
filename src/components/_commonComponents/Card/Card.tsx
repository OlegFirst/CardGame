import { useEffect, useState, memo } from 'react';

import { CardInterface } from '../../../constants/settings';

const PIPS_COLOR_MAP = {
	'Hearts': 'red',
	'Daimonds': 'red',
	'Clubs': 'black',
	'Spades': 'black',
};

const Card = (props: CardInterface) => {
	const {
		suit,
		name
	} = props;
	
	// const [cardStyle, setCardStyle] = useState({});
	
	// useEffect(() => {
		// if (suit === 'Hearts' || suit === 'Daimonds') {
			// setCardStyle({ color: 'red' });
		// } else {
			// setCardStyle({ color: 'black' });
		// }
	// }, []);
	
	// const style = {
		// color: PIPS_COLOR_MAP[suit]
	// };	
	
	return (
		<section
			className="card"
			// style={style}
		>
			<div className="card__top">
				{name}
			</div>
			
			<div className="card__center">
				{ suit === 'Hearts'
					&&
					<span>&#9829;</span>
				}
				
				{ suit === 'Daimonds'
					&&
					<span>&#9830;</span>
				}
				
				{ suit === 'Clubs'
					&&
					<span>&#9831;</span>
				}
				
				{ suit === 'Spades'
					&&
					<span>&#9828;</span>
				}
			</div>
			
			<div className="card__bottom">
				{name}
			</div>
		</section>
	);
};

export default memo(Card);