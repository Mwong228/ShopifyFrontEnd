import React from 'react'
import {Card} from '@shopify/polaris'


function UserNominated(){
    return(
        <Card title="Nominated">
            <Card.Section
                title="Movie"
                actions={{content: 'Delete', destructive: true, onAction: () => {console.log('hello')}}}
            >
            </Card.Section>
        </Card>
    )
}

export default UserNominated