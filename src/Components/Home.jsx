// src/components/Home.js
import React from 'react'
import './Home.css' // Import the CSS file for styling
const Home = () => {
	// Sample data for the table
	const tableData = [
		{ id: 1, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 4, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 5, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 6, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 7, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 8, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 9, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 10, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 11, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 12, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 13, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 14, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 15, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 1, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 4, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 5, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 6, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 7, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 8, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 9, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 10, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 11, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 12, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 13, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 14, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 15, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 1, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 4, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 5, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 6, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 7, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 8, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 9, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 10, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 11, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 12, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 13, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 14, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 15, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 16, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 17, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 18, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 19, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 20, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 21, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 22, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 23, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 24, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 25, name: 'Charlie Brown', age: 35, city: 'Seattle' },
		{ id: 26, name: 'John Doe', age: 25, city: 'New York' },
		{ id: 27, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
		{ id: 28, name: 'Bob Johnson', age: 28, city: 'Chicago' },
		{ id: 29, name: 'Alice Williams', age: 22, city: 'San Francisco' },
		{ id: 30, name: 'Charlie Brown', age: 35, city: 'Seattle' }
	]

	return (
		<div className="main-content center-content">
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Age</th>
							<th>City</th>
						</tr>
					</thead>
					<tbody>
						{tableData.map((row) => (
							<tr key={row.id}>
								<td>{row.id}</td>
								<td>{row.name}</td>
								<td>{row.age}</td>
								<td>{row.city}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home
