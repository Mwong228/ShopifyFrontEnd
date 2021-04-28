import React, { useState, useEffect } from 'react'
import {Card, MediaCard} from '@shopify/polaris'

function Results(props) {

    return (
        <Card title="Results" sectioned>
            {props.results && props.results.map(search => 
            <MediaCard key={search.imdbID}
            title={search.Title}
            primaryAction={{
                content: 'Nominate',
            }}
            secondaryAction={{
                content: 'More Info'
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