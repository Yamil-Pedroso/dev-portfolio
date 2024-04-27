import { useState } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: 'spring',
      }
    }
  }

interface ICounter {
    initialCount?: number
}

interface IState {
    countries: string[]
}

const Counter = ({initialCount = 0}: ICounter) => {
    const [count, setCount] = useState(initialCount)
    const [state, setState] = useState<IState>({countries: []})

    const cities = ["Milano"]

    const addCountry = (countries: 
        string
    ) => {
        if( state.countries.includes(countries)){
            setState({
                countries: state.countries.filter(country => country !== countries)
            })
        } else {
            setState({
                countries: [...state.countries, countries]
            })
        }

        //setState(prevState => ({
        //    ...prevState.countries.includes(countries),
        //    countries: [countries]
//
        //}))
    }
      

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontSize: '2rem'}}>
        Counter: {count}

          {cities.map((city, idx) => (
              <div key={idx}>
                <motion.button onClick={() => addCountry(city)}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"

                  whileHover={{
                    scale: 1.3, 
                    originX: 0,
                    color: '#f8e112',
                  }}
                  transition={{
                    type: 'spring', 
                    stiffness: 300
                  }}
                >
                  City
                </motion.button>
              </div>
          ))}

        <motion.button onClick={() => setCount(initialCount)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"

            whileHover={{
                scale: 1.3, 
                originX: 0,
                color: '#f8e112',
              }}
              transition={{
                type: 'spring', 
                stiffness: 300
              }}
        >
            Reset
        </motion.button>
        <motion.button onClick={() => setCount(count + 1)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"

            whileHover={{
                scale: 1.3, 
                originX: 0,
                color: '#f8e112',
              }}
              transition={{
                type: 'spring', 
                stiffness: 300
              }}
        >
            Increment
        </motion.button>
        <motion.button onClick={() => setCount(count - 1)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"

            whileHover={{
                scale: 1.3, 
                originX: 0,
                color: '#f8e112',
              }}
              transition={{
                type: 'spring', 
                stiffness: 300
              }}
        >
            Decrement
        </motion.button>
        <div style={{marginTop:'30px'}}>{state.countries}</div>
    </div>
  )
}

export default Counter