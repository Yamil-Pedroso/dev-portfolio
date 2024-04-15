import { useState, useEffect } from 'react'
import { IPotion } from '../../providers/PotionProvider'
import { usePotions, useAuth } from '../../hook'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PotionDetailProps {
    potion: IPotion;
  }
  
  const PotionDetail: React.FC<PotionDetailProps> = ({ potion }) => {
    const { addPotion } = usePotions() as any;
    const { user } = useAuth() as any;


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
      <div>
        <h2>{potion.name}</h2>
        <p>{potion.description}</p>
        <img src={potion.image} alt={potion.name} />

        
        <button
          onClick={handleAddToMagicBox}
          style={{ backgroundColor: 'green', color: 'white' }}
        >
          Add potion
        </button>

        <ToastContainer />
      </div>
    );
  };

export default PotionDetail;
  