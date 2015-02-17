var React = require('react')

var Main = React.createClass({
  getInitialState: function() {
    return {}
  },
  render: function() {
    return (<h1>Main</h1>)
  }
})

React.render(
  <Main />,
  document.body
)
