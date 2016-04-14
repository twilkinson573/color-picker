var React = require('react');
var ReactDOM = require('react-dom');

var Slider = React.createClass({
  render: function () {
    return (
    <input 
      type='range'
      min='0'
      max='255'
      onChange={this.props.onUpdate} />
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
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  },
  render: function () {
    var styles = {
      'background-color': 'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')'
    }
    return (
      <div className='container' style={styles}>
        <h1>Color Picker</h1>
        <br />
        <div className='row'>
          <div className='col-sm-6 col-sm-offset-3'>
            <Slider ref='red' onUpdate={this.handleUpdate} />
            Red
            <Slider ref='green' onUpdate={this.handleUpdate} />
            Green
            <Slider ref='blue' onUpdate={this.handleUpdate} />
            Blue
            </div>
        </div>
      </div>
    )
  }
});

module.exports = App