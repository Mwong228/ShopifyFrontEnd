import { Card, Button, TextField } from '@shopify/polaris';
import React from 'react'
import './style.css'

function Search(props){
    return (
        <Card title="Search for a Movie" sectioned>
        <form onSubmit={props.handleFormSubmit} className="search">
            <div className="form-group">
                <label htmlFor="Movie">Movie Name:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    className="form-control"
                    placeholder="Ex. Avengers End-Game"
                />
                <Button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">Search</Button>
            </div>
        </form>
        </Card>
    )
}

export default Search


