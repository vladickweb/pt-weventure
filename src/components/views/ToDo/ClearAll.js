import React from 'react'

export default function ClearAll({ setTasks }) {
	return (
		<div>
			<button className='clearAll' onClick={() => setTasks([])}>
				Clear all
			</button>
		</div>
	)
}
