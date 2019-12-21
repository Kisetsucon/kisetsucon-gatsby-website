import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Intro from '../components/Index/Intro'
import Venue from '../components/Index/Venue'
import Welcome from '../components/Index/Welcome'
import Partners from '../components/Index/Partners'
import ImageWheel from '../components/Index/ImageWheel'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Intro />
      <Venue />
      <Welcome />
      <Partners />
      <ImageWheel />
    </Layout>
  )
}

export default IndexPage
