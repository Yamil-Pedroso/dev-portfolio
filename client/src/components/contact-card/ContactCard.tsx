import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import './styles.css'

interface CardOneProps {
  header: string
  phone: string
  icon: string
}
interface CardTwoProps {
  header: string
  email: string
}
interface CardThreeProps {
  header: string
  location: string
}

const cardOne: CardOneProps = {
  header: 'Phone Number',
  phone: '+41 079 532 65 19',
  icon: 'phone',
}

const cardTwo: CardTwoProps = {
  header: 'Email Address',
  email: 'yamilpedroso@gmail.com',
}

const cardThree: CardThreeProps = {
  header: 'Location',
  location: 'Zurich, Switzerland',
}

const ContactCard = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:' + cardOne.phone
  }

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Subject')
    const body = encodeURIComponent('Body of the email')

    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${cardTwo.email}&su=${subject}&body=${body}`

    window.open(gmailComposeUrl, '_blank')
  }

  const handleMapClick = () => {
    const address = 'Kreuzstrasse 33, 8008 Zurich, Switzerland'
    const encodedAddress = encodeURIComponent(address)
    const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`
    window.open(googleMapsUrl, '_blank')
  }

  return (
    <div className="container" style={{ color: 'black', margin: '5rem auto' }}>
      <div className="flex justify-around max-md:items-center max-sm:justify-center max-md:flex-col max-lg:flex-col">
        <div className="w-[25rem] h-[17rem] max-md:mt-12 max-md:w-[20rem] max-sm:w-[16rem] max-md:items-center max-md:h-[8rem] border-black border-[1px] shadow-card flex flex-col justify-center px-8 relative mx-8  max-lg:mb-20 max-sm:mb-2  border-card">
          <div className="">
            <div
              onClick={handlePhoneClick}
              className={`hover:text-white cursor-pointer w-[5rem] h-[5rem] max-md:w-[3.5rem] max-sm:w-[3.2rem] max-sm:h-[3.2rem] max-md:h-[3.5rem] border-black border-[3px] rounded-[50%] flex justify-center items-center absolute left-[40px] top-[-45px] max-md:top-[-30px] bg-white text-2xl transition ease-in-out delay-200 hover:bg-[#0099ff] hover:-translate-y-1 hover:scale-110`}
            >
              <FaPhoneAlt className="max-md:text-[.7em] max-sm:text-[.6em] hover:none" />
            </div>
          </div>
          <p className="text-[#f2f2f2] font-bold text-[1.5em] max-md:text-[1.2em] max-sm:text-[1em]">
            {cardOne.header}
          </p>
          <p className="text-[#f2f2f2] card-text text-[1.2em] max-md:text-[1em] max-sm:text-[.8em]">
            {cardOne.phone}
          </p>
        </div>
        <div className="w-[25rem] h-[17rem] max-md:mt-12 max-md:w-[20rem] max-sm:w-[16rem] max-md:items-center max-md:h-[8rem] border-black border-[1px] shadow-card flex flex-col justify-center px-8 relative mx-8  max-lg:mb-20 max-sm:mb-2  border-card">
          <div
            onClick={handleEmailClick}
            className="hover:text-white cursor-pointer w-[5rem] h-[5rem] max-md:w-[3.5rem] max-sm:w-[3.2rem] max-sm:h-[3.2rem] max-md:h-[3.5rem] border-black border-[3px] rounded-[50%] flex justify-center items-center absolute left-[40px] top-[-45px] max-md:top-[-30px] bg-white text-2xl transition ease-in-out delay-200 hover:bg-[#0099ff] hover:-translate-y-1 hover:scale-110"
          >
            <FaEnvelope className="max-md:text-[.7em] max-sm:text-[.6em] hover:text-white" />
          </div>
          <h5 className="text-[#f2f2f2] font-bold text-[1.5em] max-md:text-[1.2em] max-sm:text-[1em]">
            {cardTwo.header}
          </h5>
          <p className="text-[#f2f2f2] card-text text-[1.2em] max-md:text-[1em] max-sm:text-[.8em]">
            {cardTwo.email}
          </p>
        </div>
        <div className="w-[25rem] h-[17rem] max-md:mt-12 max-md:w-[20rem] max-sm:w-[16rem] max-md:items-center max-md:h-[8rem] border-black border-[1px] shadow-card flex flex-col justify-center px-8 relative mx-8  max-lg:mb-20 max-sm:mb-2  border-card">
          <div
            onClick={handleMapClick}
            className="hover:text-white cursor-pointer w-[5rem] h-[5rem] max-md:w-[3.5rem] max-sm:w-[3.2rem] max-sm:h-[3.2rem] max-md:h-[3.5rem] border-black border-[3px] rounded-[50%] flex justify-center items-center absolute left-[40px] top-[-45px] max-md:top-[-30px] bg-white text-2xl transition ease-in-out delay-200 hover:bg-[#0099ff] hover:-translate-y-1 hover:scale-110"
          >
            <FaMapMarkerAlt className="max-md:text-[.7em] max-sm:text-[.6em]" />
          </div>
          <h5 className="text-[#f2f2f2] font-bold text-[1.5em]  max-md:text-[1.2em] max-sm:text-[1em]">
            {cardThree.header}
          </h5>
          <p className="text-[#f2f2f2] card-text text-[1.2em] max-md:text-[1em] max-sm:text-[.8em]">
            {cardThree.location}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
