import { useState, useEffect } from 'react'
import { IPotion } from '../../providers/PotionProvider'
import { usePotions, useAuth } from '../../hook'
//import { ToastContainer, toast } from 'react-toastify';
import { Toaster, toast } from 'sonner'
import { Container } from './styles'

// ...

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>
        Give me a toast
      </button>
    </div>
  )
}
import 'react-toastify/dist/ReactToastify.css';

interface PotionDetailProps {
    potion: IPotion;
  }
  
  const PotionDetail: React.FC<PotionDetailProps> = ({ potion }) => {
    const [addBtnActive, setAddBtnActive] = useState(false)
    const { addPotion } = usePotions() as any;
    const { user } = useAuth() as any;
    console.log('user logged', user);

    useEffect(() => {
      if (user) {
        setAddBtnActive(true)
      }
    }
    , [user])

    const handleAddToMagicBox = async () => {
      const response = await addPotion({
          ...potion,
          owner: user._id || user.id,
      });
  
      if (response.success) {
          toast.success('Potion added to Magic Box');
      } else {
          toast.error(response.message || 'Failed to add potion');
      }
  };
  

    return (
      <Container>
        <div>
        <h2>{potion.name}</h2>
        <p>{potion.description}</p>

        </div>
        <img src={potion.image} alt={potion.name} />

        {
          !user && (
            <div
              style={{
                width: '12rem',
                marginTop: '3rem',
                color: '#757575',
              }}
            >
              <p>
                Hey friend, if you want to add this potion to your magic box, you have to login first.
              </p>
            </div>
          )
        }
        <button
          onClick={handleAddToMagicBox}
          style={{  display: addBtnActive ? 'block' : 'none',
            backgroundColor: 'green', color: 'white' ,
            padding: '1rem',
            borderRadius: '5px',
          }}
        >
          Add potion
        </button>

        <Toaster
         position="top-right"
         />
      </Container>
    );
  };

export default PotionDetail;
  