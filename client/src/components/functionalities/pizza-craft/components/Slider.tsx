
import { Link } from 'react-router-dom'
import { ContainerCard, Image } from './style'
import {pizzas} from '../data/pizzas'

const Slider = () => {
  return (
    <Link to="/slider">
      {pizzas.map((pizza) => (
        <div>
          <p style={{ textAlign: 'center' }}>{pizza.name}</p>
          <ContainerCard>
            <div key={pizza.id}>
              <Image src={pizza.image} alt={pizza.name} />
            </div>
          </ContainerCard>
        </div>
      ))}
    </Link>
  )
}

export default Slider
