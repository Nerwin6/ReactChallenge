// src/App.js
import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Settings from './Components/Settings'
import Sidebar from './Components/Sidebar'

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<Router>
			<div
				className={`app-container ${
					isSidebarOpen ? 'sidebar-open' : ''
				}`}
			>
				<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
				<div
					className={`main-container ${isSidebarOpen ? 'open' : ''}`}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
