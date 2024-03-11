import React from 'react';
import classes from './signup.module.css';

function SignUp() {
	return (
		<>
			<div className={classes.nav}>
				<h3>Winners Never Quit , Quitters never Win.</h3>
				<div className={classes.profileBlock}>
					<p>
						Your profile is <em>64%</em> completed. A completed
						profile has higher chances of accurate expenses.
						<span>Complete Now</span>
					</p>
				</div>
			</div>
		</>
	);
}

export default SignUp;
