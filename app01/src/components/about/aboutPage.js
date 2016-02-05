"use strict";

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h2>About Me</h2>
				<p>
					I am a freelance corporate trainer<br />
					I provide training in the following JavaScript frameworks / libraries<br />
					<ul>
						<li>AngularJS</li>
						<li>KnockoutJS</li>
						<li>KendoUI</li>
						<li>ExtJS</li>
						<li>BackboneJS</li>
						<li>ReactJS</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;