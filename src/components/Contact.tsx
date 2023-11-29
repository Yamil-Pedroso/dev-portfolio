import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import ContactCard from './ContactCard'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Yamil Pedroso',
          from_email: form.email,
          to_email: 'yamirovinci@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        },
      )
  }

  return (
    <div id="contact">
      <div
        className={`mt-[-25rem] max-lg:mt-[8rem] max-md:mt-[-15rem] max-xs:mt-[-18rem] pt-[3rem] flex justify-center items-center bg-[#303030] border-black border-[8px] shadow-card relative flex-col`}
      >
        
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] p-8 rounded-2xl"
        >
          <div className="ml-[7rem]">
            <div className="border-black border-[8px] w-[18rem] h-[8vh] flex items-center justify-center bg-[#303030] absolute top-[-6.5rem] max-lg:top-[-6.5rem] max-lg:left-[9.3rem] max-md:left-[10.5rem] max-md:top-[-6.2rem] max-md:w-[16rem] max-md:h-[6rem] max-xs:left-[9.2rem] max-xs:w-[15rem] max-xs:h-[5rem] max-xs:top-[-5.8rem] max-xs:border-[5px] max-xs:ml-[1.5rem]">
              <h3 className="bg-gradient-to-r from-[#46ca9e] via-[#4a7bf8] to-[#6289ef] bg-clip-text text-transparent text-[2.8rem] max-md:text-[2.3rem] max-xs:text-[2rem]">Contact</h3>
            </div>
          </div>

          <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto"
        >
          <div className="flex flex-col justify-center items-center w-[32rem]">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[2.2rem] font-bold text-[#d2d2d2] max-md:text-[2.2rem] max-sm:text-[1.8rem]">
                Get in touch
              </h3>
              <p className="text-[#a7a7a7] font-normal text-center lg:text-[1.2rem] max-md:w-[22rem] md:text-[1.1rem] max-sm:text-[.8rem] max-sm:w-[18rem]">
                If you have a
                project that you want to get started, think you need my help
                with something or just fancy saying hey, then get in touch.
              </p>
            </div>
            </div>
        </motion.div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 w-full max-md:w-[20rem] max-md:mx-auto max-xs:w-[18rem] max-md:gap-6 max-md:mt-11 max-xs:gap-4 max-xs:mt-10">
              <label className="flex flex-col">
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="NAME"
                className="bg-gray-500 text-white p-4 outline-none max-md:p-3 max-md:text-md max-xs:p-2 max-xs:text-xs"
              />
            </label>
            <label className="flex flex-col">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="bg-gray-500 text-white p-4 outline-none max-xs:p-2 max-xs:text-xs"
              />
            </label>
            <label className="flex flex-col">
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                className="bg-gray-500 text-white p-4 outline-none max-xs:p-2 max-xs:text-xs"
              />
            </label>

            <button
              type="submit"
              className="py-3 px-8 max-xs:py-1 max-xs:px-6 max-xs:text-xs border-black border-[3px]  m-2 cursor-pointer hover:border-[#194939] outline-none w-fit text-[#515151] hover:text-[#2f8367] transition duration-500 ease-in-out font-bold shadow-md"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
