import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'

interface CardProps {
  src: string
  onClick?: () => void
  target?: string
}

export const Card = ({ src }: CardProps) => {
  const navigate = useNavigate();
  const setTimeCardLink = () => {
    setTimeout(() => {
      navigate('/portfolio')
    }, 3000);
  }

  return (
  <span className={styles.card}>
    <img className={styles.card__blur} src={src} alt="" onClick={() => setTimeCardLink()} />
    <img className={styles.card__img} src={src} alt="" />
  </span>

)
  }
