import {Card, MediaCard} from '@shopify/polaris'
import { useState } from 'react'
import Movie from '../../components/Movie-Info'
import axios from 'axios'
// import React, {useCallback, useState} from'react'


function Results(props) {
    
    // const [active, setActive] = useState(true)
    // const handleInputChange = useCallback(() => setActive(!active), [active])
    const [movie, setMovie] = useState([])


    return (
        <Card title="Results" sectioned>
            {props.results && props.results.map(search => 
            <MediaCard key={search.imdbID}
            title={search.Title}
            primaryAction={{
                content: 'Nominate',
                onAction: () => {console.log('Nominated')}
            }}
            secondaryAction={{
                content: <Movie movie={movie}/>,
                onAction:     
                async function movieDetails(){
                    const movie = await axios.get(`http://www.omdbapi.com/?i=${search.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`)
                    console.log(movie.data)
                    setMovie(movie.data)
                }
            }}
            description={search.Year}
            >
            <img 
            alt={search.Title}
            width= "100px"
            height= "100%"
            src={search.Poster}
            />
            </MediaCard>)}
        </Card>
    )
}

export default Results