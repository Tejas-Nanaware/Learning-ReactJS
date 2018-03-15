import React from 'react';
import classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';

const Burger = (props) => {
	const transformedIngredients = Object.keys(props.ingredients)
	.map(igkey => {
		return [...Array(props.ingredients[igkey])].map((_, i) => {
			return <Ingredients key = {igkey+i} type={igkey} />
		});
	});
	return(
		<div className={classes.Burger}>
			<Ingredients type='bread-top'/>
			{transformedIngredients}
			<Ingredients type='bread-bottom'/>

		</div>
	);
};

export default Burger;