// src/components/Settings.js
import React, { useState, useEffect, useRef } from 'react'
import './Settings.css' // Import the CSS file for styling
import Modal from './Modal' // Import the Modal component

const Settings = () => {
	const [isEnterprise, setIsEnterprise] = useState(false)
	const [numberInput, setNumberInput] = useState('')
	const [selectedOption, setSelectedOption] = useState('')
	const [inputError, setInputError] = useState('')
	const [invalidCharacters, setInvalidCharacters] = useState([])
	const [showModal, setShowModal] = useState(false)

	// Ref for the modal content
	const modalRef = useRef(null)

	const handleCheckboxChange = (e) => {
		setIsEnterprise(e.target.checked)
	}

	const handleNumberInputChange = (e) => {
		const inputValue = e.target.value
		const invalidChars = inputValue.match(/[^0-9a-zA-Z_]/g) || []
		setInvalidCharacters(invalidChars)
		setInputError(
			invalidChars.length > 0
				? `${invalidChars.join(', ')} ${
						invalidChars.length > 1 ? 'are' : 'is'
				  } not valid in this input.`
				: ''
		)
		setNumberInput(inputValue)
	}

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Form submitted:', {
			isEnterprise,
			numberInput,
			selectedOption
		})
		setShowModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
		setNumberInput('')
		setSelectedOption('')
		setIsEnterprise(false)
		setInputError('')
		setInvalidCharacters([])
	}

	// Handle clicks outside the modal
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (
				showModal &&
				modalRef.current &&
				!modalRef.current.contains(e.target)
			) {
				closeModal()
			}
		}

		document.addEventListener('click', handleOutsideClick)

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [showModal, closeModal])

	return (
		<div className="main-content">
			<form onSubmit={handleSubmit} className="settings-form">
				<fieldset>
					<legend className="form-title">Settings Form</legend>
					<div className="form-group">
						<label>
							<input
								type="checkbox"
								checked={isEnterprise}
								onChange={handleCheckboxChange}
								className="checkbox-input"
							/>
							Is Enterprise
						</label>
					</div>
					<div className="form-group">
						<label>
							Number Input:
							<input
								type="text"
								value={numberInput}
								onChange={handleNumberInputChange}
								className={`text-input ${
									inputError ? 'error' : ''
								}`}
							/>
						</label>
						{inputError && (
							<span className="error-message">{inputError}</span>
						)}
					</div>
					<div className="form-group">
						<label>
							Dropdown:
							<select
								value={selectedOption}
								onChange={handleOptionChange}
								className="select-input"
							>
								<option value="">Select an option</option>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</label>
					</div>
					<div className="form-group">
						<button
							type="submit"
							disabled={invalidCharacters.length > 0}
							className="submit-button"
						>
							Submit
						</button>
					</div>
				</fieldset>
			</form>
			{showModal && <Modal closeModal={closeModal} modalRef={modalRef} />}
		</div>
	)
}

export default Settings
