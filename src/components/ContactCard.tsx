import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'

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
  return (
    <div className="container" style={{ color: 'black' }}>
      <div className="flex justify-around">
        <div className="w-[28vw] h-[22vh] border-black border-[5px] shadow-card flex flex-col justify-center px-8 relative mx-8">
          <div className="">
            <div
              className={`cursor-pointer w-[5rem] h-[5rem] border-black border-[3px] rounded-[50%] flex justify-center items-center absolute left-[40px] top-[-45px] bg-white text-2xl transition ease-in-out delay-200 hover:bg-[#46ca9e] hover:-translate-y-1 hover:scale-110`}
            >
              <FaPhoneAlt className="text-[#46ca9e] hover:text-white" />
            </div>
          </div>
          <p className="text-[#f2f2f2] font-bold text-[1.5em]">
            {cardOne.header}
          </p>
          <p className="text-[#f2f2f2] card-text text-[1.2em]">
            {cardOne.phone}
          </p>
        </div>
        <div className="w-[28vw] h-[22vh] border-black border-[5px] shadow-card flex flex-col justify-center px-8 relative mx-8">
          <div className="cursor-pointer w-[5rem] h-[5rem] border-black border-[3px] rounded-[50%] flex justify-center items-center absolute left-[40px] top-[-45px] bg-white text-2xl transition ease-in-out delay-200 hover:bg-[#46ca9e] hover:-translate-y-1 hover:scale-110">
            <FaEnvelope className="text-[#46ca9e] hover:text-white" />
          </div>
          <h5 className="text-[#f2f2f2] font-bold text-[1.5em]">
            {cardTwo.header}
          </h5>
          <p className="text-[#f2f2f2] card-text text-[1.2em]">
            {cardTwo.email}
          </p>
        </div>
        <div className="w-[28vw] h-[22vh] border-black border-[5px] shadow-card flex flex-col justify-center px-8 relative mx-8">
          <div className="cursor-pointer w-[5rem] h-[5rem] border-black border-[3px] rounded-[50%] flex justify-center items-center absolute left-[40px] top-[-45px] bg-white text-2xl transition ease-in-out delay-200 hover:bg-[#46ca9e] hover:-translate-y-1 hover:scale-110">
            <FaMapMarkerAlt className="text-[#46ca9e] hover:text-white" />
          </div>
          <h5 className="text-[#f2f2f2] font-bold text-[1.5em]">
            {cardThree.header}
          </h5>
          <p className="text-[#f2f2f2] card-text text-[1.2em]">
            {cardThree.location}
          </p>
        </div>
      </div>

      <div className="outline-4 md:outline-dashed mt-[4.5rem]"></div>
    </div>
  )
}

export default ContactCard
