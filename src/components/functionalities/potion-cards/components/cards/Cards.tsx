import { useState } from 'react';
import { Container, Card, CardWrapper, CardImgDescription } from './styles';
import { 
  bottle1,
  bottle2,
  bottle3,
  bottle4,
  bottle5,
  bottle6,
  bottle8,
  bottle9,
  bottle10,
  bottle11,
  bottle12
 } from '../../../../../assets';

const CardsImgMap = [
    {
        id: 1,
        img: bottle1,
        description: 'Life'
    },
    {
        id: 2,
        img: bottle2,
        description: 'Speed'
    },
    {
        id: 3,
        img: bottle3,
        description: 'Energy'
    },
    {
        id: 4,
        img: bottle4,
        description: 'Power'
    },
    {
        id: 5,
        img: bottle5,
        description: 'Sleep'
    },
    {
        id: 6,
        img: bottle6,
        description: 'Grow'
    },
    {
        id: 7,
        img: bottle1,
        description: 'Life'
    },
    {
        id: 8,
        img: bottle8,
        description: 'Time'
    },
    {
        id: 9,
        img: bottle9,
        description: 'Static'
    },
    {
        id: 10,
        img: bottle10,
        description: 'Stamina'
    },
    {
        id: 11,
        img: bottle11,
        description: 'Fire'
    },
    {
        id: 12,
        img: bottle12,
        description: 'Strength'
    }
]

const Cards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  //const getCardDescription = (index:  any) => {
  //  const descriptions = [
  //    'Description of bottle1',
  //    'Description of bottle2',
  //    'Description of bottle3',
  //  ];
//
  //  return descriptions[index] || 'No description available';
  //};

  return (
    <Container>
      <h2>Choose your Potions</h2>
      <CardWrapper>
        {CardsImgMap.map((image, index) => (
          <Card key={index} onClick={() => handleCardHover(index)} 
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            >
            <img className='bottle__img' src={image.img} alt={`bottle${index + 1}`} width={32} />
            {activeCard === index && <CardImgDescription>
                {image.description}
            </CardImgDescription>}
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Cards;
