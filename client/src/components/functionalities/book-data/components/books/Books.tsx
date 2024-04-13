import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import books, { BookProps } from '../../data/books'
import { motion } from 'framer-motion'
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaShare,
  FaBook,
} from 'react-icons/fa'
import Search from '../search/Search'
import Aside from '../aside/Aside'
import styles from './styles.module.css'

const limitBooks = 6

const Books = () => {
  const [myBooks, setMyBooks] = useState<BookProps[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [search, setSearch] = useState('')
  const [shareOptions, setShareOptions] = useState({
    show: false,
    index: null,
  })
  const [cardContentShow, setCardContentShow] = useState<number | null>(null)

  const onOverCardContent = (index: number) => {
    setCardContentShow(index)
  }

  const onOutCardContent = () => {
    setCardContentShow(null)
  }

  // Función ajustada para manejar clic en el ícono de compartir
  const handleClick = (index: any) => {
    setShareOptions((prev) => ({
      show: !prev.show && prev.index === index,
      index,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    setMyBooks(filteredBooks)

    if (e.target.value === '') {
      setMyBooks(books)
    }
  }

  useEffect(() => {
    setMyBooks(books)
  }, [])

  const next = () => {
    const newStart = currentIndex + limitBooks
    if (newStart < myBooks.length) {
      setCurrentIndex(newStart)
    } else if (newStart === myBooks.length - 1) {
      setCurrentIndex(newStart)
    }
  }

  const back = () => {
    const newStart = currentIndex - limitBooks
    if (newStart >= 0) {
      setCurrentIndex(newStart)
    }
  }

  const shareBookViaWhatsApp = (book: any) => {
    const shareText = `Mira este libro: "${book.title}" de ${book.author}. ¡Es muy interesante! ${book.image}`
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(shareText)}`
    window.open(whatsappURL, '_blank')
  }

  const shareBookViaGmail = (book: any) => {
    const subject = encodeURIComponent(`Libro recomendado: ${book.title}`)
    const body = encodeURIComponent(
      `Hola,\n\nQuiero recomendarte este libro: "${book.title}" de ${book.author}.\n\nPuedes ver más sobre el libro aquí: ${book.imageURL}\n\nSaludos,`,
    )
    const gmailURL = `mailto:?subject=${subject}&body=${body}`
    window.open(gmailURL, '_blank')
  }

  const handleClickOutside = (e: any) => {
    const shareOptionsRef = document.querySelector(
      `.${styles.shareOptionsWrapper}`,
    )

    if (
      shareOptions.show &&
      shareOptionsRef &&
      !shareOptionsRef.contains(e.target)
    ) {
      setShareOptions({ show: false, index: null })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [shareOptions.show])

  return (
    <div>
      <Aside />
      <Search mySearch={search} handleChange={handleChange} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBlock: '.5rem',
          cursor: 'pointer',
          paddingLeft: '5rem',
        }}
      >
        <span onClick={back}>
          <FaArrowLeft size={32} />
        </span>
        <span onClick={next}>
          <FaArrowRight size={32} style={{ cursor: 'pointer' }} />
        </span>
      </div>

      <motion.div
        layout
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        key={currentIndex}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {myBooks
          .slice(currentIndex, currentIndex + limitBooks)
          .map((book, index) => (
            <div key={book.id} className="book-card">
              <div
                className={`${styles.cardContent}
                      ${cardContentShow === index ? styles.show : ''}
                      `}
              >
                <div className={styles.cont}>
                  <p>Description: </p>
                  <span>{book.description}</span>
                </div>
              </div>
              <div className={styles.card}>
                <Link to={`/book-details/${book.id}`}>
                  <img
                    onMouseOver={() => onOverCardContent(index)}
                    onMouseOut={onOutCardContent}
                    src={book.image}
                    alt={book.title}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      backgroundSize: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                </Link>
              </div>
              <div className="book-content">
                <div className="paragr">
                  <p>
                    Title: <span>{book.title}</span>
                  </p>
                  <p>
                    Author: <span>{book.author}</span>
                  </p>
                  <p>
                    Year: <span>{book.year}</span>
                  </p>
                  <p>
                    Pages: <span>{book.pages}</span>
                  </p>
                  <p>
                    Language: <span>{book.language}</span>
                  </p>
                </div>
                <div className="icons">
                  <FaHeart
                    className="icon-heart"
                    size={28}
                    style={{ cursor: 'pointer' }}
                  />
                  <FaShare
                    className="icon-share"
                    size={28}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClick(index)}
                  />

                  <FaBook
                    className="icon-book"
                    size={28}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>

              {shareOptions.show && shareOptions.index === index && (
                <div
                  className={`${styles.shareOptionsWrapper}
                  ${shareOptions === index && styles.show}
                `}
                >
                  <p onClick={() => shareBookViaWhatsApp(book)}>WhatsApp</p>

                  <p onClick={() => shareBookViaGmail(book)}>Gmail</p>
                </div>
              )}
            </div>
          ))}
      </motion.div>
    </div>
  )
}

export default Books
