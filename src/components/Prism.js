import React from 'react'
import prism from 'prismjs'

class Prism extends React.Component {
  componentDidMount() {
    prism.highlightAll()
  }
  render() {
    return (
      <pre>
        <code className={`language-${this.props.language}`}>
          {this.props.children}
        </code>
      </pre>
    )
  }
}

export class PrismJSON extends React.Component {
  render() {
    return (
      <Prism language="javascript">
        {JSON.stringify(this.props.code, null, 2)}
      </Prism>
    )
  }
}

export default Prism
