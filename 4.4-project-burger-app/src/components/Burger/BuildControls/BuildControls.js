import React from 'react';
import classes from './BuildControl.css';
import BuildControlElements from './BuildControlElements/BuildControlElements';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl => (
			<BuildControlElements 
				key={ctrl.label} 
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemoved(ctrl.type)}
				disabled={props.disabled[ctrl.type]}/>
		))}
		<button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
	</div>
);

export default BuildControls;