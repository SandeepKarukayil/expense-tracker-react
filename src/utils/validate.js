export const checkValidData = (email, password, confirmPassword, isSignUp) => {
	if (!email || !password) {
		return 'email and password are required';
	}

	if (isSignUp && !confirmPassword) {
		return 'confirm password is required';
	}

	const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
		email
	);
	const passwordRegex =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (!emailRegex) return 'Enter Valid Email';
	if (!passwordRegex)
		return 'Password requires atleast 1 upper or lower letter, number and special characters';
	if (!isSignUp && password != confirmPassword)
		return 'Passwords donot match ';
	return null;
};
