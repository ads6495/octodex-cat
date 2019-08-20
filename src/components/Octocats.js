import React, { Component } from 'react'

class Octocats extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} />
      </li>
    )
  }
}

export default Octocats
