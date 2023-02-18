import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
function App() {
	const [count, setCount] = useState(0);
	const [isDisable, setIsDisable] = useState(false);
	return (
		<>
			<ButtonGroup
				orientation="vertical"
				aria-label="vertical outlined button group">
				<Button
					disabled={isDisable}
					key="one"
					onClick={() => {
						setCount(count + 1);
					}}>
					click:{count}
				</Button>
				<Button
					disabled={isDisable}
					key="two"
					onClick={() => {
						setCount(0);
					}}>
					CLEAR
				</Button>
				<Button
					key="three"
					onClick={() => setIsDisable(!isDisable)}>
					{isDisable ? "ABLE" : "DISABLE"}
				</Button>
			</ButtonGroup>
		</>
	);
}

export default App;
