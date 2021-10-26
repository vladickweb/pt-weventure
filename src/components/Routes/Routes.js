import React from 'react'
import { Route } from 'react-router-dom'
import ToDo from '../views/ToDo/ToDo'

export default function Routes() {
	return (
		<div>
			<Route exact path='/' render={() => <ToDo />} />
		</div>
	)
}
