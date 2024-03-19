// Import React
import * as React from 'react'
//link pages
import Layout from '../components/layout'
//Define your component
const IndexPage = ()=>{
  return(
    <Layout pageTitle="Home Page">
      <p>Learning about Layouts</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>


//Export your component
export default IndexPage