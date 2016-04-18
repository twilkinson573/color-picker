var colorHelpers = {
  buildRGB(red, green, blue, diff=0) {
    return `rgb(${red+diff},${green+diff},${blue+diff})`
  },
  buildHex(red, green, blue, diff=0) {
    // Build individual padded hex strings for each color
    let redHex = ("00" + (red+diff).toString(16)).substr(-2);
    let greenHex = ("00" + (green+diff).toString(16)).substr(-2);
    let blueHex = ("00" + (blue+diff).toString(16)).substr(-2);
    return '#' + redHex + greenHex + blueHex
    }
}

module.exports = colorHelpers;