import { useEffect, useState } from "react";

const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const DotMatrix = () => {
	const [spinnerFrame, setSpinnerFrame] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSpinnerFrame((prev) => (prev + 1) % frames.length);
		}, 80);
		return () => clearInterval(interval);
	}, []);

	return <div>{frames[spinnerFrame]}</div>;
};

export default DotMatrix;
