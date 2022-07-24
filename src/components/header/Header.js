import React from 'react';
import './headerStyle.css'
import logo from '../../assets/fable&whimsylogocropped.png'
import { Link } from 'react-router-dom'
function Header(props) {
    return (
			<header className='header'>
				<img src={logo} alt='Fable and Whimsy Logo' className='logo' />
				<h2 className='subtitle'>
					Art Print Collections designed by Jalynn King
				</h2>
				<nav className='navigation'>
					<ul><Link className='design-links' to='/procreate'>Procreate</Link></ul>
					<ul>
						<Link className='design-links' to='/illustrator'>Illustrator</Link>
					</ul>
				</nav>
			</header>
		);
}

export default Header;