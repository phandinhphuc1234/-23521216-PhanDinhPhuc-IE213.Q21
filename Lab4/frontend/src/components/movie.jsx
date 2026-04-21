import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Movie({ user }) {
	const { id } = useParams();

	return (
		<div className="container py-4">
			<h2>Movie {id}</h2>
			<p>{user ? 'Đã đăng nhập.' : 'Chưa đăng nhập.'}</p>
			<Link to={`/movies/${id}/review`}>Add review</Link>
		</div>
	);
}

export default Movie;
