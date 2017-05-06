import React, {Component} from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default class Index extends Component {
	render(){
		return (
			<div>
				<h2>这里是Index</h2>
				<Button type="primary">primary</Button>
				<Button>Default</Button>
			</div>
		)
	}
}