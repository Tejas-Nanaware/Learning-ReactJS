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
		{controls.map(ctrl => (
			<BuildControlElements 
				key={ctrl.label} 
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemoved(ctrl.type)}
			/>
		))}
	</div>
);

export default BuildControls;