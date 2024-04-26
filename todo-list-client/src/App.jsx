import { useState } from 'react'
import React from 'react'
import Layout from './pages/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import UserPage from './pages/UserPage/UserPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: "/",
		element:<Layout />,
		children:[
			{
				index:true,
				element: <HomePage/>

			},
			{
				path: "/user",
				element: <UserPage/>
			}
		]
	}
])


const App =  (props) => {

	return (
		<div >
			<RouterProvider router={router}/>
		</div>
	) 
			
	
}

export default App