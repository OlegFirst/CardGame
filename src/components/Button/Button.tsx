interface ButtonProps {
	onClick: () => void
};

const Button = ({ onClick }:  ButtonProps) => {
	return (
		<button
			className="button"
			onClick={onClick}
		>
			Start
		</button>
	);
}

export default Button;
