import { Aside } from './styles'

const LineNumbers = () => {
  return (
    <Aside>
        {Array.from({ length: 100 }).map((_, index) => (
            <span key={index}>{index + 1}</span>
        ))
        }
    </Aside>
  )
}

export default LineNumbers