import Search from '../../components/Search'
import Results from '../../components/Results'
import Nominations from '../../components/Nominations'
import {Page, Layout, } from '@shopify/polaris'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
require('dotenv').config()

function Nominate() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    useEffect( () => {
        init()
    }, [])

    async function init() {
        const res = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`)
        console.log(res.data.Search)
        setResults(res.data.Search)
    }

    function handleInputChange(event) {
        setSearch(event.target.value)
    }
    function handleFormSubmit(event) {
        event.preventDefault()
        init()
    }
    return (
        <Page
            breadcrumbs={[{ content: 'Home', url: '/' }]}
            title="Home"
            >
            <Search
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
            />
            <br/>
            <Layout>
                <Layout.Section>
                    <Results results={results}/>
                </Layout.Section>
                <Layout.Section secondary>
                    <Nominations/>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default Nominate
