import { Card, MediaCard, TextStyle, SettingToggle } from '@shopify/polaris'
import React, { useState, useCallback } from 'react'
import Movie from '../../components/Movie-Info'
import axios from 'axios'

function Results(props) {
    const [active, setActive] = useState({})
    const [movie, setMovie] = useState([])
    let count = 0
    return (
        <Card title="Results" sectioned>
            {props.results && props.results.map(search =>
                <MediaCard key={search.imdbID}
                    title={search.Title}
                    primaryAction={{
                        content: active[search.imdbID] ? 'Nominated' : 'Pick',
                        onAction:
                            function nominate() {
                                setActive({ ...active, [search.imdbID]: true })
                                if (active[search.imdbID]) {
                                    setActive({ ...active, [search.imdbID]: false })
                                    console.log('hello', search.imdbID)
                                    count++
                                    
                                }
                                if (count === 5) {
                                    setActive({ ...active, [search.imdbID]: true })
                                    console.log('Reached')
                                }
                                console.log(count)
                            }
                    }}
                    secondaryAction={{
                        content: <Movie movie={movie} />,
                        onAction:
                            async function movieDetails() {
                                const movie = await axios.get(`http://www.omdbapi.com/?i=${search.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`)
                                console.log(movie.data)
                                setMovie(movie.data)
                            }
                    }}
                    description={search.Year}
                >
                    <img
                        alt={search.Title}
                        width="100px"
                        height="100%"
                        src={search.Poster}
                    />
                </MediaCard>)}
        </Card>
    )
}

export default Results