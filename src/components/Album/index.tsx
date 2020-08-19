import React from 'react'
import { Card, CardImage, CardContent } from '../Card'
import Text from '../Text'
import { Album } from '../../types/types'

function AlbumCard({ images, name, artists }: Album): JSX.Element {
  return (
    <Card>
      <CardImage
        src={images[1].url}
        srcSet={`${images[1].url} 300w, ${images[1].url} 768w, ${images[0].url} 1280w`}
        alt={name}
      />
      <CardContent>
        <Text variant="h3" as="h4">
          {name}
        </Text>
        <Text variant="body" textColor="secondary">
          {artists.map(artist => artist.name)}
        </Text>
      </CardContent>
    </Card>
  )
}

export default AlbumCard
