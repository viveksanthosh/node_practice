"use strict";

var React = require('react');

var Address = React.createClass({

  render: function(){

    var places= ['Bangalore', 'Mumbai', 'Goa'];
    
    console.log(this.props.data);
    var list = places.map(function(place){
      return (<li>{place}</li>);
    });
    return (
      <div className= 'jumbotron'>
        <h1> I live in {this.props.data}</h1>
        <p> I can live in
        <ul>
        {list}
        </ul>
        </p>
      </div>
    );
  }
});

module.exports = Address;
