import Card from '../_commonComponents/Card/Card';
import Cards from '../Cards/Cards';

import { 
	CardInterface
} from '../../constants/settings';

interface InPlayProps {
	inPlayCards: {
		firstIndex: number,
		lastIndex: number
	},
	cardList: CardInterface[]
};

const InPlay = ({ cardList, inPlayCards }: InPlayProps) => {
	if (inPlayCards.firstIndex === 0 && inPlayCards.lastIndex === 0) {
		return null;
	}
	
	return (
		<section className="in-play">		
			<ul className="in-play__items">
				{ cardList.map((item: CardInterface, index: number) => {
					const { suit, name } = item;
					const key = suit + index;
					const isHide = index > inPlayCards.firstIndex || index < inPlayCards.lastIndex
					
					return (
						<li
							className="in-play__item"
							key={key}
						>
							<Card
								suit={suit}
								name={name}
								isHide={isHide}
							/>
						</li>
					)
				}) }
			</ul>
		</section>
	);
}

export default InPlay;