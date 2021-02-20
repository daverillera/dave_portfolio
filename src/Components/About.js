import React, { Component } from'react';
import ReactDOM from 'react-dom';
import '.././css/About.css';
import { Button } from 'react-bootstrap';

export class About extends React.Component {
	render() {
		return (
			<div className='abt_row' >
				<h2 className='abt_title'>WHO WE ARE</h2>
				<p className='abt_p' >
					Dis aute irure dolor in reprehenderit in 
	        		voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
	        		Excepteur sint occaecat cupidatat non proident, sunt in culpa 
	        		qui officia deserunt mollit anim id est laborum
				</p>
				<div className='abt_btn_ctr'>
					<Button className='abt_btn'>Click Me Baby</Button>
				</div>
			</div>
		);
	}
}