import React, { useState, useEffect } from 'react'
import {Card, MediaCard} from '@shopify/polaris'

function Results(props) {

    return (
        <Card title="Results" sectioned>
            {props.results.title && props.results.title.map(img => <MediaCard 
            title={props.results.title}
            primaryAction={{
                content: 'Nominate',
            }}
            desciption={props.results.year}
            >
            <img 
            alt={props.results.title}
            width= "100px"
            height= "100%"
            src={props.results.poster}
            />
            </MediaCard>)}
        </Card>
    )
}

export default Results