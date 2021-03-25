import React from "react";

export default class App extends React.Component {
  render() {
    const { path } = this.props as any;
    return <div>Hello World!\n{path}</div>;
  }
}
