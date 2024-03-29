// Import React
import * as React from 'react'
//link pages
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
//Define your component
const IndexPage = ()=>{
  return(
    <Layout pageTitle="Home Page">
      <p>Learning about Layouts</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camer"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />


//Export your component
export default IndexPage