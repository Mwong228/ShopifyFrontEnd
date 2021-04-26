import React from "react"
import { Button, Card } from '@shopify/polaris'
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
        </div>
    )
}

export default Home