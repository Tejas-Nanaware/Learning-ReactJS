import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
			<p>Continue to Checkout?</p>
			<Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
			<Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
		</Auxiliary>
	);
}

export default OrderSummary;