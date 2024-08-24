import React from "react";
import Card from "./Card.jsx"
import Clock from "./clock.jsx"

//include images into your bundle


//create your first component
const SecondsCounter = ({seconds}) => {
	
	return( 
		<div className="container-fluid d-flex justify-content-center gap-2 p-3 bg-black">
			<Clock/>
			<Card number={Math.floor (seconds % 1000000/100000)} />
			<Card number={Math.floor (seconds % 100000/10000)} />
			<Card number={Math.floor (seconds % 10000/1000)} />
			<Card number={Math.floor (seconds % 1000/100)} />
			<Card number={Math.floor (seconds % 100/10)}/>
			<Card number={seconds % 10}/>
		</div>
	)
};

export default SecondsCounter;
