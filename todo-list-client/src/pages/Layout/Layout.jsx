import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from '@/components/NavBar/NavBar'


const Layout =  (props) => {
	return (
		<div className='bg-[lightblue] h-screen w-screen flex justify-center'>
			<div className=' bg-white w-[100%] h-[100%] max-w-[1440px]'>
				<NavBar/>
				<Outlet />				
			</div>


		</div>
  )
}

export default Layout