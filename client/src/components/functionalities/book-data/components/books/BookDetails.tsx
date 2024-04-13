import { useParams } from 'react-router-dom'
import books, { BookProps } from '../../data/books'
import styles from './styles.module.css'

const BookDetails = () => {
  const { id } = useParams() as { id: string }

  const book = books.find((book: BookProps) => book.id === parseInt(id))
  const { title, author, year, pages, image } = book as BookProps

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} />
      </div>
      <div>
        <h1>Book Details</h1>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
        <p>Pages: {pages}</p>
      </div>
    </div>
  )
}

export default BookDetails
