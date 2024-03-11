import React from 'react';
import classes from './Browse.module.css';
import { useNavigate } from 'react-router-dom';
function Browse({ isProfileComplete, userDisplayName }) {
	const navigate = useNavigate();
	const handleForm = () => {
		navigate('/signup');
	};
	return (
		<>
			<section className={classes.incomplete}>
				<h3>Welcome to Expense Tracker</h3>
				{isProfileComplete ? (
					<h1>{userDisplayName}!</h1>
				) : (
					<div className={classes.incompleteBlock}>
						Your profile is incomplete.
						<span>
							<button onClick={handleForm}>Complete now</button>
						</span>
					</div>
				)}
			</section>
		</>
	);
}

export default Browse;
