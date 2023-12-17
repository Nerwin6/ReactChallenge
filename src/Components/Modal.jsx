// src/components/Modal.js
import React from 'react'
import './Modal.css'

const Modal = ({ closeModal, modalRef }) => {
	const handleModalClick = (e) => {
		e.stopPropagation()
	}

	return (
		<div className="modal-overlay" onClick={closeModal}>
			<div
				ref={modalRef}
				className="modal-content"
				onClick={handleModalClick}
			>
				<h2>Success!</h2>
				<p>Data successfully submitted.</p>
				<button onClick={closeModal} className="close-btn">
					&times;
				</button>
			</div>
		</div>
	)
}

export default Modal
