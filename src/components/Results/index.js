import {Card, MediaCard} from '@shopify/polaris'
import { useState } from 'react'
import Movie from '../../components/Movie-Info'
import axios from 'axios'

function Results(props) {

    const [movie, setMovie] = useState([])

    return (
        <Card title="Results" sectioned>
            {props.results && props.results.map(search => 
            <MediaCard key={search.imdbID}
            title={search.Title}
            primaryAction={{
                content: 'Nominate',
                onAction:
                function nominateMovie(name){
                    const pick = props.results.filter(userPick => userPick !== name)
                    console.log(props.results)
                    console.log(pick)
                }
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