var React = require('react');
var PropTypes = React.PropTypes;

var ColorInput = require('./ColorInput');

var ColorInputGroup = React.createClass({
  propTypes: {
    currentValue: PropTypes.number,
    onUpdate: PropTypes.func
  },
  render: function () {
    return (
      <div>
        <ColorInput 
          ref='range' 
          onUpdate={this.props.onUpdate} 
          inputType='range'
          colorValue={this.props.currentValue}/>
        <ColorInput 
          ref='number' 
          onUpdate={this.props.onUpdate} 
          inputType='number'
          colorValue={this.props.currentValue}/>
      </div>
    )
  }
});

module.exports = ColorInputGroup;
