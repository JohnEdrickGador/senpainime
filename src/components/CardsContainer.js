import React from 'react'
import Card from './Card'
function CardsContainer({searchResults}) {
  return (
    <div className='cards-container'>
        {searchResults.map((result,index) => {
            return <Card key={index} text={result.title} image={result.images.webp.large_image_url} id={result.mal_id} type="anime"/>
        })}
    </div>
  )
}

export default CardsContainer