import React, {Component} from 'react';
import {Row, col} from 'antd';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			style: {
				imgLogo: {
					width: '200px',
					height: '200px',
					borderRadius: '50%'
				}
			}
		};
	}

	render() {
		return (
			<div className="header-content">
				<header>这里是header</header>
				<img style={this.state.style.imgLogo} src="../../static/img/logo.png" alt="头像" title="头像"/>
				<p>使用了react-html-attrs插件，JSX中可以使用class,替代className</p>
			</div>
		)
	}
}