$ = jQuery = require('jquery');

var React = require('react');

var Home = require('./components/homepage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Address = require('./components/common/address');
var ajax = require('./components/ajax/ajax');

(function(win) {
	"use strict";

	var App = React.createClass({

		getInitialState: function() {
			return({ data : '' } );
		},
		componentDidMount: function(){
			var that = this;
			ajax.then(function(d){
				var city=((JSON.parse(d).records[0].City));
					that.setState({ data: city});
				});

		},
		render: function() {
			var Child;

			switch(this.props.route) {

				case 'about': Child = About; break;
				case 'address': Child = Address; break;
				default: Child = Home;
			}


			return (
				<div>
					<Header />
					<Address data={this.state.data} />
				</div>
			);
		}
	});

	var render = function() {
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	};

	win.addEventListener('hashchange', render);
	render();
})(window);
