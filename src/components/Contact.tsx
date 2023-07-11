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
    <>
      <ContactCard />
      <div
        className={`xl:mt-[12.5rem] flex xl:flex-row gap-10 bg-[#303030] border-black border-[8px] shadow-card relative max-md:h-[80vh]`}
      >
      
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] p-8 rounded-2xl"
        >
          <div className="border-black border-[8px] w-[23rem] h-[10vh] flex items-center justify-center bg-white absolute lg:top-[-4.2rem] lg:left-[-8px] md:top-[-4.2rem]">
            <h3 className="bg-gradient-to-r from-[#46ca9e] via-[#4a7bf8] to-[#6289ef] bg-clip-text text-transparent lg:text-[3.5rem] md:text-[2.7rem]">Contact</h3>
          </div>

          <form
            //ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 max-md:mt-[10rem]">
              <label className="flex flex-col">
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="NAME"
                className="bg-gray-500 text-white  p-4"
              />
            </label>
            <label className="flex flex-col">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="bg-gray-500 text-white  p-4"
              />
            </label>
            <label className="flex flex-col">
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                className="bg-gray-500 text-white p-4 border"
              />
            </label>

            <button
              type="submit"
              className="py-3 px-8 border-black border-[3px] outline-none w-fit text-black1 font-bold shadow-md"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          {/*<EarthCanvas />*/}
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')
