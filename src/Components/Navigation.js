import React, { Component } from 'react';
import ParticlesBG from 'particles-bg';
import dr_logo from '.././images/dr_logo.png';
import '.././css/Navigation.css';

class Navigation extends React.Component {
	render() {
		return (
			<div className='nav_row'>
				<ParticlesBG type='tadpole' color='#CA2E55' bg={true} className='nav_bkd' />
				<div className='nav_col1'>
					<img className= 'nav_img' src={dr_logo} />
				</div>
				<div className='nav_col2'>
					<nav className="nav_ctr">
	          			<a className="nav_itm" href="#">HOME</a> 
	          			<a className="nav_itm" href="#">ABOUT</a> 
	          			<a className="nav_itm" href="#">RESUME</a> 
	          			<a className="nav_itm" href="#">CONTACT</a>
        			</nav>
        		</div>
			</div>
		);
	}
}
export default Navigation;