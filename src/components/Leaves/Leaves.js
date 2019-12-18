import React from 'react'

import './Leaves.css'

const Leaves = () => {
  const numLeaves = 50
  const leaves = []
  for (let i = 0; i < numLeaves; i++) {
    leaves.push(<i key={i} />)
  }

  return (
    <div id='leaves'>
      {leaves}
    </div>
  )
}

export default Leaves
