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
				return (
					<li>
						<span
							key={`${elm.task}-${idx}`}
							className={elm.isFinished ? 'done' : 'active'}
							onClick={e => toggleTask(elm.task, e)}
						>
							{elm.task}
						</span>
						<DeleteTask task={elm.task} tasks={tasks} setTasks={setTasks} />
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
