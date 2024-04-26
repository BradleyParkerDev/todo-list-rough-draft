import React from 'react'
import { useNavigate } from 'react-router-dom'


const NavBar =  (props) => {
	const navigate = useNavigate()

	const handleNav = async (page) =>{
		navigate(`/${page}`)
	}

	return (
		<ul>
			<li onClick={()=>{handleNav('')}}>
				Home
			</li>
			<li onClick={()=>{handleNav('user')}}>
				user
			</li>
		</ul>
	)
}

export default NavBar