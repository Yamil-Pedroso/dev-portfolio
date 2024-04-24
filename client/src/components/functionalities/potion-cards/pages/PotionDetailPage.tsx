import PotionDetail from "../components/potion-detail/PotionDetail"
import { IPotion } from '../providers/PotionProvider'

interface PotionDetailPageProps {
  potion: IPotion
}

const PotionDetailPage = ({ potion }: PotionDetailPageProps) => {
  return (
    <PotionDetail potion={potion} />
  )
}

export default PotionDetailPage