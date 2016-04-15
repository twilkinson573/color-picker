var React = require('react');
var propTypes = React.PropTypes;

var ColorInput = React.createClass({
  render: function () {
    return (
    <input 
      type={this.props.inputType}
      min='0'
      max='255'
      onChange={this.props.onUpdate}
      defaultValue={this.props.colorValue}
      value={this.props.colorValue} />
    )
  } 
});

module.exports = ColorInput;
