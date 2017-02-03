var React = require('react')

var isProps = function(props) {
  return typeof props === 'object' && !React.isValidElement(props) && !Array.isArray(props)
}

var factory = function(component) {
  return function() {
    var args = [].slice.call(arguments, 0)
    return isProps(args[0])
      ? React.createElement.apply(null, [component].concat(args))
      : React.createElement.apply(null, [component, null].concat(args))
  }
}

var elements = new Proxy({}, {
  get: function(_, property) {
    return factory(property)
  }
})

module.exports = {
  factory,
  elements
}
