import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Intro from '../components/Index/Intro'
import Welcome from '../components/Index/Welcome'
import Partners from '../components/Index/Partners'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Intro />
      <Welcome />
      <Partners />
    </Layout>
  )
}

export default IndexPage
