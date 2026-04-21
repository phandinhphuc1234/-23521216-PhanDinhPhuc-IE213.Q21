import React from 'react';
import { Link, useParams } from 'react-router-dom';

function AddReview({ user }) {
	const { id } = useParams();

	return (
		<div className="container py-4">
			<h2>Add Review for Movie {id}</h2>
			<p>{user ? 'Đã đăng nhập.' : 'Vui lòng đăng nhập để thêm review.'}</p>
			<Link to={`/movies/${id}`}>Quay lại phim</Link>
		</div>
	);
}

export default AddReview;
