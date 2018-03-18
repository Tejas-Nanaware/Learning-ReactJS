import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const OrderSummary = (props) => {
	const ingredientList = Object.keys(props.ingredients)
		.map(igKey => {
			return (
				<li>
					<span style={{textTransform: 'capitalize'}}>{igKey}: </span>{props.ingredients[igKey]}
				</li>);
		});
	return (
		<Auxiliary>
			<h3>Your Order</h3>
			<p>Your burger will have</p>
			<ul>
				{ingredientList}
			</ul>
			<p>Checkout</p>
		</Auxiliary>
	);
}

export default OrderSummary;