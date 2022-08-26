interface PopUpProps {
	onClick: () => void
};

const PopUp = ({ onClick }: PopUpProps) => {
	return (
		<section className="pop-up">
			<div className="pop-up__content">
				<main className="pop-up__text">
					Text
				</main>
				
				<div className="pop-up__footer">
					<button
						className="pop-up__button"
						onClick={onClick}
					>
						OK
					</button>
				</div>
			</div>
		</section>
	);
}

export default PopUp;