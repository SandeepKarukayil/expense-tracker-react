import React, { useRef, useState } from 'react';
import classes from './Login.module.css';
import { checkValidData } from '../utils/validate';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();
	const email = useRef(null);
	const password = useRef(null);
	const confirmPassword = useRef(null);

	// check validation
	const handleButtonClick = () => {
		console.log(email.current.value);
		console.log(password.current.value);
		const message = checkValidData(
			email.current.value,
			password.current.value,
			!isSignInForm
				? confirmPassword.current.value
				: password.current.value
		);

		setErrorMessage(message);

		if (message) return;

		if (!isSignInForm) {
			//signup logic

			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value,
				confirmPassword.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					console.log(user);

					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..

					setErrorMessage(errorCode + '-' + errorMessage);
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					navigate('/browse');

					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		}
	};

	const toggleSignIn = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<>
			<div className={classes.card}>
				<h3> {isSignInForm ? 'Sign in' : 'Sign Up'}</h3>
				<div className={classes.input}>
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							type="email"
							placeholder="Email"
							ref={email}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							ref={password}
							required
						/>
						{!isSignInForm && (
							<input
								type="password"
								placeholder="Confirm Password"
								ref={confirmPassword}
								required
							/>
						)}
						<p className={classes.error}>{errorMessage}</p>

						<button onClick={handleButtonClick}>
							{isSignInForm ? 'SignIn' : 'SignUp'}
						</button>

						<div
							className={classes.signupSignin}
							onClick={toggleSignIn}>
							{isSignInForm
								? "Don't have an account? Sign Up Now"
								: 'Already Registered? Sign In Now'}
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
