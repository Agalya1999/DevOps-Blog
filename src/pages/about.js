//Import React
import * as React from 'react'
import Layout from '../components/layout'

//Define component

const AboutPage = () =>{
    return (
        <Layout pageTitle= 'About Me!'>
            <p>Hi There!</p>
        </Layout>
      
    )
}

export const Head = () => <title>About Me</title>

//export component
export default AboutPage