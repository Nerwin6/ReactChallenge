// Card.js
import React, { forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = forwardRef(({ title, content, ...props }, ref) => {
	useImperativeHandle(ref, () => ({}))

	return (
		<div className="card" ref={ref} {...props}>
			<h3 className="card-title">{title}</h3>
			<p className="card-content">{content}</p>
		</div>
	)
})

Card.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
}

export default Card
