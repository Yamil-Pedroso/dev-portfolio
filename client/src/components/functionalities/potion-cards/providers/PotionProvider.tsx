import { createContext } from 'react'
import { useProvidePotions } from '../hook'

export interface IPotion {
    _id?: string | null;
    owner?: any;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
    }

export interface Potion {
    potions: IPotion[] | null;
    addPotion: (potion: IPotion) => void;
    getAllPotions: () => void;
    getUserPotions: () => void;
    deletePotion: (id: string) => void;
    Loading: boolean;
    setLoading: (loading: boolean) => void;
}

interface PotionContextType {
    potions: Potion[];
    addPotion: (potion: Potion[]) => void;
    getAllPotions: () => void;
    getUserPotions: () => void;
    deletePotion: (id: string) => void;
    Loading: boolean;
    setLoading: (loading: boolean) => void;
}

const initialState: PotionContextType = {
    potions: [],
    addPotion: () => {},
    getAllPotions: () => {},
    getUserPotions: () => {},
    deletePotion: () => {},
    Loading: true,
    setLoading: () => {},
}

export const PotionContext = createContext(initialState) as any

export const PotionProvider = ({ children }: any) => {
    const potions = useProvidePotions()

    return <PotionContext.Provider value={potions}>{children}</PotionContext.Provider>
}

