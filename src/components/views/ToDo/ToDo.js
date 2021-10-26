import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TasksList from './TasksList'

export default function ToDo() {
	const [ tasks, setTasks ] = useState([])

	return (
		<main>
			<h1>WEVENTURE Coding Challenge</h1>
            <TaskForm tasks={tasks} setTasks={setTasks}/>
            <TasksList tasks={tasks} setTasks={setTasks}/>
		</main>
	)
}
