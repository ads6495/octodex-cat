import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <main className="main-nav">
        <section className="indi-nav">
          <div className="only-a">
            <a href="https://octodex.github.com/">Octodex</a>
          </div>
          <div>
            <a href="https://octodex.github.com/faq/">FAQ</a>
          </div>
        </section>

        <section className="indi-nav">
          <div className="only-a">
            <a href="https://www.twitter.com">Follow us on Twitter</a>
          </div>
          <div>
            <a href="https://www.github.com">back to Github.com</a>
          </div>
        </section>
      </main>
    )
  }
}

export default Nav
