import { Router } from 'express';
import { isLoggedIn } from '../middlewares/user';

import { getAllPotions, addPotion, getUserPotions, getPotion, updatePotion, deletePotion, searchPotions
 } from '../controllers/potionController';

const router = Router();

router.get('/all-potions', getAllPotions);
router.post('/add-potion', isLoggedIn, addPotion);
router.get('/user-potions', isLoggedIn, getUserPotions);
router.get('/potion/:id', isLoggedIn, getPotion);
router.put('/update-potion/:id', isLoggedIn, updatePotion);
router.delete('/delete-potion/:id', isLoggedIn, deletePotion);
router.get('/search-potions/:key', searchPotions);

export default router;