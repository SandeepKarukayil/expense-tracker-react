import React from 'react';
import Login from './Login';
import Browse from './Browse';
import classes from './Body.module.css';
import { useEffect, useState } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	useNavigate,
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import SignUp from './SignUp';

function Body() {
	const dispatch = useDispatch();
	const [isProfileComplete, setIsProfileComplete] = useState(false);
	const [userDisplayName, setUserDisplayName] = useState('');
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Login />,
		},
		{
			path: '/browse',
			element: (
				<Browse
					isProfileComplete={isProfileComplete}
					userDisplayName={userDisplayName}
				/>
			),
		},
		{
			path: '/signup',
			element: (
				<SignUp
					setIsProfileComplete={setIsProfileComplete}
					setUserDisplayName={setUserDisplayName}
				/>
			),
		},
	]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, email, displayName } = user;
				// ...
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
					})
				);
				// setIsProfileComplete(user);
			} else {
				// User is signed out
				// ...
				dispatch(removeUser());
			}
		});
	}, []);

	return (
		<div className={classes.content}>
			<RouterProvider router={appRouter} />
		</div>
	);
}

export default Body;
