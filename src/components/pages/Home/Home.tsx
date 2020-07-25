import React from 'react'
import TextField from '../../layout/TextField'
import Header from '../../layout/Header'
import { GridContainer, Row, Column } from '../../layout/Grid'
import Logo from '../../layout/Logo'
import { getSearch } from '../../../services/routes'

let searchDelay: number

function Home(): JSX.Element {
  const search = async (value: string): Promise<void> => {
    const data = await getSearch(value, 'album', 10)
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
      </GridContainer>
    </>
  )
}

export default Home
