//Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

//Define component

const AboutPage = () =>{
    return (
        <Layout pageTitle= 'About Me!'>
            <p>Hi There!</p>
        </Layout>
      
    )
}

export const Head = () => <Seo title ="About Me"/>

//export component
export default AboutPage