import React, { useState } from 'react'
import TextField from '../../TextField'
import Header from '../../Header'
import { GridContainer, Row, Column } from '../../Grid'
import Logo from '../../Logo'
import { getSearch } from '../../../services/routes'
import { Album } from '../../../types/types'
import AlbumCard from '../../Album'
import Text from '../../Text'

let searchDelay: number

function Home(): JSX.Element {
  const [albums, setAlbums] = useState(null)

  const search = async (value: string): Promise<void> => {
    const { albums } = Boolean(value) && await getSearch(value, 'album', 10)
    setAlbums(albums)
  }

  const handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { value } = e.target

    if (searchDelay) {
      clearTimeout(searchDelay)
    }

    searchDelay = setTimeout(() => {
      search(value)
    }, 1000)
  }

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <GridContainer>
        <Row>
          <Column>
            <TextField
              id="search"
              placeholder="Comece a escrever..."
              label="Busque por artistas, álbuns ou músicas"
              type="search"
              handleChange={handleSearch}
            />
          </Column>
        </Row>
        <Row>
          {Boolean(albums) && (
            albums.items.length > 0
              ? albums.items.map((album: Album) => (
                <Column md={4} key={album.id}>
                  <AlbumCard
                    artists={album.artists}
                    id={album.id}
                    images={album.images}
                    name={album.name}
                  />
                </Column>
              ))
              : (
                <Text variant="body">
                  Album não encontrado!
                </Text>
              )
          )}
        </Row>
      </GridContainer>
    </>
  )
}

export default Home
