import React from 'react';
import { Link } from 'react-router-dom';

function MoviesList() {
	return (
		<div className="container py-4">
			<h2>Movies List</h2>
			<p>Danh sách phim.</p>
			<Link to="/movies/1">Xem phim mẫu</Link>
		</div>
	);
}

export default MoviesList;
