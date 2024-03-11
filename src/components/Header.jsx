import React from 'react';
import classes from './Header.module.css';

function Header() {
	return (
		<>
			<header>
				<nav className={classes.navigation}>
					<div className={classes.titleContainer}>
						<h1>Expense Tracker</h1>
					</div>
					<div className={classes.navContainer}>
						<h3>Home</h3>
						<h3>Products </h3>
						<h3>About Us</h3>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;
