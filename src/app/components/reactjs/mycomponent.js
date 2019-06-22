import React from 'react'

export default class mycomponent extends React.Component {
  render() {
    return (
      <div>
        <p>FooBar barbare yes: {this.props.fooBar}</p>
        <p>Baz: {this.props.baz}</p>
      </div>
      );
  }
}
