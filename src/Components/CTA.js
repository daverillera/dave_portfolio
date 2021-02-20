import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '.././css/CTA.css';
import cta_img from '.././images/cta_img.png';

export class CTA extends React.Component {
	render() {
		return (
			<div className='cta_ctr_mn'>
				<div className='cta_row'>
					<div className='cta_col1'>
						<img src={cta_img} height='300' width='300' className='cta_img' />
					</div>
					<div className='cta_col2'>
						<p className= 'title'>Dave Rillera</p>
	        			<p className='cta_p'> 
		        			Dis aute irure dolor in reprehenderit in 
		        			voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
		        			Excepteur sint occaecat cupidatat non proident, sunt in culpa 
		        			qui officia deserunt mollit anim id est laborum
		        		</p>
	         			<div className='btn_ctr'>
	          				<Button className='btn'>Click Me Baby</Button>
	        			</div>
					</div>	
				</div>
				<div className='cta_row2'>
					<p className='cta_p'>hi im dave</p>
				</div>
			</div>
		);
	}
}