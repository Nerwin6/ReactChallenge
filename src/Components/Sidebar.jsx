// src/components/Sidebar.js
import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css' // Import the CSS file for styling

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<div className={`sidebar ${isOpen ? 'open' : ''}`}>
			<button
				className={`hamburger ${isOpen ? 'white' : ''}`}
				onClick={toggleSidebar}
			>
				☰
			</button>
			<ul>
				<li>
					<Link to="/" className="sidebar-link">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" className="sidebar-link">
						About
					</Link>
				</li>
				<li>
					<Link to="/settings" className="sidebar-link">
						Settings
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
