import React, { Component } from 'react';
import dave_ftr from '.././images/dave_ftr.png';
import '.././css/Header.css';

export class Header extends React.Component {
	render() {
		return (
			<div>
				<header className= 'head_ftr_img' >
				<h1> Dave Rillera </h1>
				</header>
			</div>
		);
	}
}

export default Header;