import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Intro from '../components/Index/Intro'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Intro />
    </Layout>
  )
}

export default IndexPage
