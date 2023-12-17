// About.js
import React, { useEffect, useRef } from 'react'
import Card from './Card'
import './About.css'

const About = () => {
	const leftCardRef = useRef(null)
	const rightCardRef = useRef(null)
	const secondLeftCardRef = useRef(null)

	useEffect(() => {
		const options = {
			threshold: 0.5
		}

		const handleIntersection = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in')
					observer.unobserve(entry.target)
				}
			})
		}

		const observer = new IntersectionObserver(handleIntersection, options)

		if (leftCardRef.current && leftCardRef.current.firstChild)
			observer.observe(leftCardRef.current.firstChild)
		if (rightCardRef.current && rightCardRef.current.firstChild)
			observer.observe(rightCardRef.current.firstChild)
		if (secondLeftCardRef.current && secondLeftCardRef.current.firstChild)
			observer.observe(secondLeftCardRef.current.firstChild)

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div className="about-container">
			<Card
				ref={leftCardRef}
				title="Left Card"
				content="This is the content of the left card."
				style={{
					transform: 'translateX(0)'
				}}
				className="card"
			/>
			<p className="explanation">
				This is an explanation paragraph between the left and right
				cards. It provides additional context or information.
			</p>
			<Card
				ref={rightCardRef}
				title="Right Card"
				content="This is the content of the right card."
				style={{
					transform: 'translateX(0)'
				}}
				className="card"
			/>
			<p className="explanation">
				Another explanation paragraph between the right and left cards.
				You can customize the content of these paragraphs based on your
				needs.
			</p>
			<Card
				ref={secondLeftCardRef}
				title="Left Card"
				content="This is the content of another left card."
				style={{
					transform: 'translateX(0)'
				}}
				className="card"
			/>
		</div>
	)
}

export default About
