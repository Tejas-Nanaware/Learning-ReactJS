import React from 'react';
import classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';

const Burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
	.map(igkey => {
		return [...Array(props.ingredients[igkey])].map((_, i) => {
			return <Ingredients key = {igkey+i} type={igkey} />
		});
	}).reduce((arr, el) => {
		return arr.concat(el)
	}, []);
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Kindly add something!</p>
	}
	return(
		<div className={classes.Burger}>
			<Ingredients type='bread-top'/>
			{transformedIngredients}
			<Ingredients type='bread-bottom'/>

		</div>
	);
};

export default Burger;