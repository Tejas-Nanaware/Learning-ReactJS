import React from 'react';
import classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';

const Burger = (props) => {
	return(
		<div className={classes.Burger}>
			<Ingredients type='bread-top'/>
			<Ingredients type='salad'/>
			<Ingredients type='bacon'/>
			<Ingredients type='cheese'/>
			<Ingredients type='meat'/>
			<Ingredients type='bread-bottom'/>

		</div>
	);
};

export default Burger;