import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TasksList from './TasksList'

export default function ToDo() {
	const [ tasks, setTasks ] = useState([])

	return (
		<main>
            <TaskForm tasks={tasks} setTasks={setTasks}/>
            <TasksList tasks={tasks} setTasks={setTasks}/>
		</main>
	)
}
