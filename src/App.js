import React, { Component } from 'react'
import Octodex from './components/Octodex'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <Nav />
        </section>

        <section className="flex-main">
          <Octodex />
        </section>
      </main>
    )
  }
}
export default App
