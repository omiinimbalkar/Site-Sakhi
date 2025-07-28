import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
// import './Home.css'
import Features from '../components/Features/Features'

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Features/>
    </Layout>
  )
}

export default Home