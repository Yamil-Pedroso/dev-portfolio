import { useEffect, useState } from 'react'
const baseUrl = 'https://rickandmortyapi.com/api/character/'
import axios from 'axios'

interface CardProps {
  id: number
  name: string
  image: string
}
const pageSize = 4

const Card = () => {
  const [character, setCharacter] = useState<CardProps[]>([])
  const [page, setPage] = useState(0)
  const [displayCharacters, setDisplayCharacters] = useState<CardProps[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  console.log(displayCharacters)

  const loadMore = async () => {
    const result = await axios.get(`${baseUrl}?page=${page}`)
    if (result.data && result.data.results) {
      const newPages = [...character, ...result.data.results]
      setCharacter(newPages)
      setPage(page)
    }
  }
  useEffect(() => {
    loadMore()
    next()
  }, [])

  const next = () => {
    const newStart = (currentIndex + 1) * pageSize
    console.log(newStart)
    if (newStart < character.length) {
      setCharacter(character.slice(newStart, newStart + pageSize))
      return
    } else {
      loadMore()
    }
  }

  const prev = () => {
    const newStart = Math.max(0, (currentIndex - 1) * pageSize)
    setCurrentIndex(Math.max(0, currentIndex - 1))
    setDisplayCharacters(character.slice(newStart, newStart + pageSize))
  }

  //useEffect(() => {
  //  const fetchCharacter = async () => {
  //    const response = await fetch(baseUrl)
  //    const myCharacter = await response.json()
  //    setCharacter(myCharacter.results)
  //  }
  //
  //  fetchCharacter()
  //}, [])

  return (
    <div>
      <p style={{ cursor: 'pointer' }} onClick={prev}>
        {'<'}
      </p>
      <p style={{ cursor: 'pointer' }} onClick={next}>
        {'>'}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {character.slice(currentIndex, pageSize).map((char, idx) => (
          <div key={idx}>
            <p>{char.name}</p>
            <img src={char.image} alt="" />
          </div>
        ))}

        <button onClick={loadMore}>Load more</button>
      </div>
    </div>
  )
}

export default Card
