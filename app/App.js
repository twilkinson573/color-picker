var React = require('react');
var ReactDOM = require('react-dom');

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

var ColorInputGroup = React.createClass({
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

var App = React.createClass({
  getInitialState: function (){
    return {
      red: 128,
      green: 128,
      blue: 128
    }
  },
  handleUpdate: function (e) {
    this.setState({
      red: e.target.value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  },
  render: function () {
    var styles = {
      'backgroundColor': 'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')'
    }
    return (
      <div className='container' style={styles}>
        <h1>Color Picker</h1>
        <br />
        <div className='row'>
          <div className='col-sm-6 col-sm-offset-3'>
            <ColorInputGroup 
              ref='red'
              onUpdate={this.handleUpdate}
              currentValue={this.state.red} />
            Red
            <ColorInput ref='green' onUpdate={this.handleUpdate} inputType='range' />
            Green
            <ColorInput ref='blue' onUpdate={this.handleUpdate} inputType='range' />
            Blue
            </div>
        </div>
      </div>
    )
  }
});

module.exports = App