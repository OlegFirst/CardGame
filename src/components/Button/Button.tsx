interface ButtonProps {
	click: () => void
};

const Button = ({ click }:  ButtonProps) => {
	return (
		<button
			className="button"
			onClick={click}
		>
			Start
		</button>
	);
}

export default Button;