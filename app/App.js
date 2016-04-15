var React = require('react');
var ReactDOM = require('react-dom');

var ColorInputGroup = require('./components/ColorInputGroup');
var ColorBlock = require('./components/ColorBlock');

var App = React.createClass({
  getInitialState: function (){
    return {
      red: 128,
      green: 128,
      blue: 128
    }
  },
  handleUpdate: function (e) {
    let redRange = ReactDOM.findDOMNode(this.refs.red.refs.range).value
    let redNum = ReactDOM.findDOMNode(this.refs.red.refs.number).value

    redRange === this.state.red ? 
      this.setState({ red: +redNum }) 
      : this.setState({red: +redRange})

    let greenRange = ReactDOM.findDOMNode(this.refs.green.refs.range).value
    let greenNum = ReactDOM.findDOMNode(this.refs.green.refs.number).value

    greenRange === this.state.green ? 
      this.setState({ green: +greenNum }) 
      : this.setState({green: +greenRange})

    let blueRange = ReactDOM.findDOMNode(this.refs.blue.refs.range).value
    let blueNum = ReactDOM.findDOMNode(this.refs.blue.refs.number).value

    blueRange === this.state.blue? 
      this.setState({blue: +blueNum }) 
      : this.setState({blue: +blueRange})
  },
  render: function () {
    var styles = {
      backgroundColor: 'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')',
      complementColor1: 'rgb(' + (255-this.state.red-31) + ',' + (255-this.state.green-31) + ',' + (255-this.state.blue-31) + ')',
      complementColor2: 'rgb(' + (255-this.state.red+31) + ',' + (255-this.state.green+31) + ',' + (255-this.state.blue+31) + ')'
    }
    return (
      <div className='container'>
        <h1>Color Picker</h1>
        <br />
        <div className='row'>
          <div className='col-sm-6 col-sm-offset-3'>
            <ColorInputGroup 
              ref='red'
              onUpdate={this.handleUpdate}
              currentValue={this.state.red} />
            Red
            <ColorInputGroup 
              ref='green'
              onUpdate={this.handleUpdate}
              currentValue={this.state.green} />
            Green
            <ColorInputGroup 
              ref='blue'
              onUpdate={this.handleUpdate}
              currentValue={this.state.blue} />
            Blue
          </div>
          <div className='row'>
            <div className='col-sm-2 col-sm-offset-2'>
              Primary
              <ColorBlock color={styles.backgroundColor}/>
            </div>
            <div className='col-sm-2 col-sm-offset-1'>
              Complement 1
              <ColorBlock color={styles.complementColor1}/>
            </div>
            <div className='col-sm-2 col-sm-offset-1'>
              Complement 2
              <ColorBlock color={styles.complementColor2}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = App
