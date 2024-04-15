import { useState, useEffect } from 'react'
import { Container, Card, CardWrapper, CardImgDescription } from './styles'
import { useAuth, usePotions } from '../../hook'
import { IPotion } from '../../providers/PotionProvider'
import PotionDetail from '../potion-detail/PotionDetail'
interface User {
  name: string
  email: string
  password: string
  _id: string
  avatar: string
}

const Cards = () => {
  const [myPotions, setMyPotions] = useState<IPotion[] | null>(null)
  const [selectedPotion, setSelectedPotion] = useState<IPotion | null>(null) as any;
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const {potions, loading} = usePotions() as any

  useEffect(() => {
    setMyPotions(potions)
  }
  , [potions])

  const handleCardClick = (potion:  IPotion) => {
    setSelectedPotion(potion)
  };

  const handleBackToList = () => {
    setSelectedPotion(null);
  };

  const handleCardHover = (index: number) => {
    setActiveCard(index)
  }

  const handleCardLeave = () => {
    setActiveCard(null)
  }

  if (!myPotions) {
    return <div>
      {
        loading ? 'Loading...' : 'No potions found'
      }
    </div>;
}


  return (
    <Container>
      {selectedPotion ? (
        <div>
          <PotionDetail potion={selectedPotion} />
          <button onClick={handleBackToList}>Back to List</button>
        </div>
      ) : (
        <div>
          <h2>Choose your Potions</h2>
          <CardWrapper>
            {myPotions.map((potion, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(potion)}
              >
                <img
                  className="bottle__img"
                  src={potion.image}
                  alt={`Potion ${index + 1}`}
                  width={48}
                  style={{ borderRadius: 50 }}
                />
              </Card>
            ))}
          </CardWrapper>
        </div>
      )}
    </Container>
  )
}

export default Cards
