import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <main className="main-nav">
        <section>
          <a>Home</a>
          <a>FAQ</a>
        </section>

        <section>
          <a>Follow us on Twitter</a>
          <a>back to Github.com</a>
        </section>
      </main>
    )
  }
}

export default Nav
