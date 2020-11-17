import Layout from '../components/Layout'
import StartPage from "../components/StartPage";
import React from "react";




const  Home = () => (
    <Layout>
<StartPage/>
    </Layout>
)

Home.getInitialProps = async () => ({
    namespacesRequired: ['home', 'footer', 'common'],
})

export default Home
