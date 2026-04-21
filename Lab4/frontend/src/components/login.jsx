import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ login }) {
	const navigate = useNavigate();

	function handleLogin() {
		login({ name: 'User' });
		navigate('/movies');
	}

	return (
		<div className="container py-4">
			<h2>Login</h2>
			<button type="button" className="btn btn-primary" onClick={handleLogin}>
				Login User
			</button>
		</div>
	);
}

export default Login;
