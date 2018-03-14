import React from 'react';

const Joke = (props) => {
		return(
			<div className='container'>
				<p>{ props.joke }</p>
			</div>
		);
};
export default Joke;