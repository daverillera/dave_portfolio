import React, { Component } from 'react';
import dr_logo from '.././images/dr_logo.png';
import '.././css/Footer.css';
import '.././css/Navigation.css';

export class Footer extends React.Component {
	render() {
		return (
			<div className='ftr_row'>
				<div className='ftr_ctr'>
					<img src={ dr_logo } />
					<p className='ftr_p'>
						daverillera@gmail.com
					</p>
					<p className='ftr_p'>
						(240) 645-2739
					</p>
					<p></p>
				</div>
				<div className='ftr_btm_bar'>
					<nav className="ftr_nav_ctr">
	          			<a className="ftr_nav_itm" href="#">HOME</a> 
	          			<a className="ftr_nav_itm" href="#">ABOUT</a> 
	          			<a className="ftr_nav_itm" href="#">RESUME</a> 
	          			<a className="ftr_nav_itm" href="#">CONTACT</a>
        			</nav>
				</div>
			</div>
		);
	}
}
export default Footer;