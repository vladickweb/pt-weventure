import React, { useState } from 'react'

export default function TaskForm({ tasks, setTasks }) {
	const [ task, setTask ] = useState(null)

	const handleChange = e => {
		setTask(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		const form = document.querySelector('form')
		setTasks([ { task, isFinished: false }, ...tasks ])
		form.reset()
	}

	return (
		<div>
			<form onSubmit={e => handleSubmit(e)}>
				<input onChange={e => handleChange(e)} type='text' placeholder='What needs to be accomplished today?' />
			</form>
		</div>
	)
}
