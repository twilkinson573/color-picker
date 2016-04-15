var React = require('react');

function ColorBlock (props) {
  var styles = {
    height: 400,
    width: 200,
    backgroundColor: props.color
  }
  return (
    <div style={styles}></div>
  )
}

module.exports = ColorBlock
