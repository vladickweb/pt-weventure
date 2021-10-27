import React, { useEffect } from 'react'
import ClearAll from './ClearAll'
import DeleteTask from './DeleteTask'

export default function TasksList({ tasks, setTasks }) {
	useEffect(() => {
		renderTasks()
	}, [])

	const toggleTask = (task, e) => {
		const taskToChange = tasks.map(
			elm =>
				elm.task === task ? (elm.isFinished ? { task, isFinished: false } : { task, isFinished: true }) : elm
		)
		setTasks(taskToChange)
	}

	const renderTasks = () => {
		return tasks.length > 0 ? (
			tasks.map((elm, idx) => {
				const { task, isFinished } = elm

				return (
					<li key={`${task}-${idx}`}>
						<span className={isFinished ? 'done' : 'active'} onClick={e => toggleTask(task, e)}>
							{task}
						</span>
						<DeleteTask task={task} tasks={tasks} setTasks={setTasks} />
					</li>
				)
			})
		) : (
			<li>
				<div>nothing here...</div>
			</li>
		)
	}

	return (
		<div>
			<ul>{renderTasks()}</ul>
			<ClearAll setTasks={setTasks} />
		</div>
	)
}
