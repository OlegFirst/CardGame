import Card from '../_commonComponents/Card/Card';

interface InPlayProps {
	inPlayCards: Object
};

const InPlay = ({ inPlayCards }: InPlayProps) => {
	console.log(inPlayCards)
	
	return (
		<section className="in-play">
			<ul className="in-play__items">
				
			</ul>
		</section>
	);
}

export default InPlay;