import React from 'react'

export default function DeleteTask({ task, tasks, setTasks }) {
	const removeElement = task => {
		const filtered = tasks.filter(elm => elm.task !== task)
		setTasks(filtered)
	}

	return <button onClick={() => removeElement(task)}>Delete</button>
}
