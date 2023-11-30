import React, { useState, useRef, useEffect } from 'react'
import { FaLock, FaLockOpen } from "react-icons/fa";
import './styles.css'

interface ModalProps {
  open: boolean
  bodyText: string
  bodyText2?: string
  buttonClick: () => void
  buttonName: string
  date?: string
  location?: string
}

export const ModalTwo: React.FC<ModalProps> = ({
  open,
  bodyText,
  bodyText2,
  date,
  location,
  buttonClick,
  buttonName,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      buttonClick();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleCloseModal);
    } else {
      document.removeEventListener('mousedown', handleCloseModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [open]);

  return (
    <div className={open ? 'inner-modal inner-modal-open' : 'inner-modal'}>
      <div ref={modalRef}>
        <Content 
          open={open} 
          date={date}
          location={location}
          bodyText={bodyText}
          bodyText2={bodyText2} 
          buttonClick={buttonClick} 
          />
      </div>
    </div>
  )
}

interface ContentProps {
  open: boolean
  bodyText: string
  bodyText2?: string
  date?: string
  location?: string
  buttonClick: () => void
}

const Content: React.FC<ContentProps> = ({ open, date, location, bodyText, bodyText2, buttonClick }) => {
  return (
    <div className={open ? 'content-wrapper content-open' : 'content-wrapper'}>
      <i className="fa fa-times-circle" onClick={buttonClick}></i>
     <h3 className="modal-title">{location}</h3>
     <h4 className="modal-title">{date}</h4>
      <p className="modal-content">{bodyText}</p>
      <p className="modal-content">{bodyText2}</p>
    </div>
  )
}

interface ButtonProps {
  open: boolean
  bodyText: string
  bodyText2?: string
  date?: string
  location?: string
  buttonClick: () => void
  buttonName: string
}

export const Button: React.FC<ButtonProps> = ({
  open,
  date,
  location,
  bodyText,
  bodyText2,
  buttonClick,
  buttonName,
}) => {
  return (
    <div id="modal-button">
      <button className="button" onClick={buttonClick}>
        {buttonName}
      </button>
      <ModalTwo
        open={open}
        buttonClick={buttonClick}
        date={date}
        location={location}
        bodyText={bodyText}
        bodyText2={bodyText2}
        buttonName={''}
      />
    </div>
  )
}

interface ModalProps {
  date?: string
  location?: string
  bodyText: string
  bodyText2?: string
  buttonName: string
}

const Modal: React.FC<ModalProps> = ({date, location, bodyText, buttonName, bodyText2 }) => {
  const [open, setOpen] = useState(false)

  const buttonClick = () => {
    setOpen(!open)
  }

  return (
    <Button
      buttonClick={buttonClick}
      open={open}
      date={date}
      location={location}
      bodyText={bodyText}
      bodyText2={bodyText2}
      buttonName={buttonName}
    />
  )
}

export default Modal
