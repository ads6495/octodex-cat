import React, { Component } from 'react'
import boxertocat from '../images/boxertocat_octodex.jpg'
import classact from '../images/class-act.png'
import dinotocat from '../images/dinotocat.png'
import drunktocat from '../images/drunktocat.jpg'
import grinchtocat from '../images/grinchtocat.gif'
import grimrepo from '../images/grim-repo.jpg'

import Octocats from './Octocats'

const images = [
  {
    name: 'boxertocat',
    imageUrl: boxertocat
  },
  {
    name: 'classact',
    imageUrl: classact
  },
  {
    name: 'dinotocat',
    imageUrl: dinotocat
  },
  {
    name: 'drunktocat',
    imageUrl: drunktocat
  },
  {
    name: 'grimrepo',
    imageUrl: grimrepo
  },
  {
    name: 'grinchtocat',
    imageUrl: grinchtocat
  }
]

class Octodex extends Component {
  render() {
    return (
      <ul className="flex-main">
        {images.map(image => {
          return <Octocats imageUrl={image.imageUrl} />
        })}
      </ul>
    )
  }
}

export default Octodex
