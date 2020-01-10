import React from 'react'

import './Leaves.css'
import Leaf from './leaf.inline.svg'

const Leaves = () => {
  const numLeaves = 50
  const leaves = []
  for (let i = 0; i < numLeaves; i++) {
    leaves.push(<i key={i}><Leaf /></i>)
  }

  return (
    <div id='leaves'>
      {leaves}
    </div>
  )
}

export default Leaves
