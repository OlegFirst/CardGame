import { useEffect, useState, memo } from 'react';

import { 
	CardInterface,
	PIPS_COLOR_MAP,
	PIPS_SUIT_MAP
} from '../../../constants/settings';

const Card = (props: CardInterface) => {
	const {
		suit,
		name
	} = props;
	
	const style = {
		color: PIPS_COLOR_MAP[suit]
	};
	
	return (
		<section
			className="card"
			style={style}
		>
			<div className="card__top">
				{name}
			</div>
			
			<div className="card__center">				
				<span dangerouslySetInnerHTML={{__html: PIPS_SUIT_MAP[suit]}}></span>
			</div>
			
			<div className="card__bottom">
				{name}
			</div>
		</section>
	);
};

export default memo(Card);