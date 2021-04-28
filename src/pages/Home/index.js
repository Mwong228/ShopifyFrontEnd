import React from "react"
import { Button, MediaCard, Card } from '@shopify/polaris'
import './style.css'

function Home() {
    function start() {
        window.location.replace("/nominate")
    }
    return (
        <div class="container">

            <Card title="The Shoppies: Movies Awards for Entrepreneurs" sectioned>
                <p>Nominate up to 5 of your favourite movies</p>
                <br />
                <Button onClick={() => start()}>Get Started</Button>
            </Card>
            {/* <MediaCard portrait
title="The Shoppies: Movies Awards for Entrepreneurs"
primaryAction={{
    content: `Get Started`,
    onAction: start(),
}}
description="Nominate up to 5 of your favourite movies"
>
    <img
    alt="Nomination"
    width="100%"
    height="100%"
    style={{
        objectFit: 'cover',
        objectPosition: 'center'
    }}
    src="https://i.gyazo.com/c39c1255eeb53f1713a5f1c3d774ee1e.png"
    />
</MediaCard> */}
        </div>
    )
}

export default Home