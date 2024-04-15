import { createContext } from 'react'
import { useProvidePotions } from '../hook'

export interface IPotion {
    owner?: any;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
    }

export interface Potion {
    potions: IPotion[];
    addPotion: (potion: IPotion) => void;
    getAllPotions: () => void;
    getUserPotions: () => void;
    Loading: boolean;
    setLoading: (loading: boolean) => void;
}

interface PotionContextType {
    potions: Potion[];
    addPotion: (potion: Potion[]) => void;
    getAllPotions: () => void;
    getUserPotions: () => void;
    Loading: boolean;
    setLoading: (loading: boolean) => void;
}

const initialState: PotionContextType = {
    potions: [],
    addPotion: () => {},
    getAllPotions: () => {},
    getUserPotions: () => {},
    Loading: true,
    setLoading: () => {},
}

export const PotionContext = createContext(initialState) as any

export const PotionProvider = ({ children }: any) => {
    const potions = useProvidePotions()

    return <PotionContext.Provider value={potions}>{children}</PotionContext.Provider>
}

