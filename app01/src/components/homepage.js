"use strict";

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Selva Website</h1>
				<p>An awesome site created with React and Flux</p>
			</div>
		);
	}
});

module.exports = Home;