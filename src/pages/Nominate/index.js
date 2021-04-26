import { AppProvider, FormLayout, TextField } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';
import { Avatar, Badge, Page, Thumbnail, Heading, Card, Button, Form } from '@shopify/polaris';
import React, { useState, useEffect } from 'react'
import axios from "axios"
import MovieSearch from '../../components/movieSearch'
import './style.css'
require('dotenv').config()

function SearchForm(props) {
    return (
        // <Form noValidate onClick={handleFormSubmit}>
        //     <FormLayout>
        //         <TextField
        //             value={props.serach}
        //             onChange={props.handleInputChange}
        //             label="Movie"
        //             type="text"
        //         />
        //         <Button submit>Submit</Button>
        //     </FormLayout>
        // </Form>
        <form className="search">
            <div className="form-group">
                <label htmlFor="Movie">Movie Name:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    title="title"
                    year="year"
                    className="form-control"
                    placeholder="Ex. Avengers End-Game"
                />
                <Button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">Search</Button>
            </div>
        </form>
    )
}

function Nominate() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    async function getSearchResults() {
        const res = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`)
        console.log(res.data)
        // setResults(res.data)
    }
    useEffect(function () {
        getSearchResults()
    }, [])
    function handleInputChange(event) {
        setSearch(event.target.value)
    }
    function handleFormSubmit(event) {
        event.preventDefault()
        getSearchResults()
    }

    return (
        <Page
            breadcrumbs={[{ content: 'Home', url: '/' }]}
            title="Home"
            thumbnail={
                <Thumbnail
                    source="https://i.gyazo.com/47c3836cf89d1463bf584cc00c4edde9.png"
                    alt="Home Icon"
                />
            }
            >
            <Card title="Search for a Movie" sectioned>
            <SearchForm
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                />
            </Card>
        </Page>
    )
}

export default Nominate

//         <AppProvider i18n={enTranslations}>
//             <Page
//                 breadcrumbs={[{ content: 'Home', url: '/' }]}
//                 title="Home Page"
//                 thumbnail={
//                     <Thumbnail
//                         source="https://i.gyazo.com/47c3836cf89d1463bf584cc00c4edde9.png"
//                         alt="Home Icon"
//                     />
//                 }
//             >
//                 <form class="search" action="/search">
//     <input type="text" placeholder="Search" name="q" value="{{ search.terms | escape }}"  />
//     <input type="submit" value="Search" />
// </form>
//             </Page>
//             <MovieSearch/>
//         </AppProvider>
//     )
// }

// export default Nominate