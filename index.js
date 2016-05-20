var ractive = require('ractive');

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var value = ractive.parse(source);
    this.value = value
    return 'module.exports = ' + JSON.stringify(value, undefined, '\t') + ';';
}

