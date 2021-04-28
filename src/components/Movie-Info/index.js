import {Modal, Button, TextContainer, DescriptionList} from '@shopify/polaris'
import React, {useState, useCallback} from 'react'

function Movie(props){
    const [active, setActive] = useState(false)

    const handleChange = useCallback(() => setActive(!active), [active])
  
    const activator = <Button onClick={handleChange} plain>More Details</Button>

    return(
        <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title={props.movie.Title}
      >
        <Modal.Section>
          <TextContainer>
                <img
                alt={props.movie.Title}
                width='auto'
                height='450px'
                style={{
                    objectFit: 'center',
                    objectPosition: 'center'
                }}
                src={props.movie.Poster}
                />

            <DescriptionList
                items={[
                    {
                        term: 'Release Date',
                        description: `${props.movie.Released}`
                    },
                    {
                        term:'Director',
                        description: `${props.movie.Director}`
                    },
                    {
                        term:'Actors',
                        description: `${props.movie.Actors}`
                    },
                    {
                        term: 'Description',
                        description: `${props.movie.Plot}`
                    },
                    {
                        term: 'Genre',
                        description: `${props.movie.Genre}`
                    }
                ]}
            >
            </DescriptionList>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
    )
}

export default Movie