import { Router } from 'express';
import { isLoggedIn } from '../middlewares/user';

import { addPotion, getPotions, getPotion, updatePotion, deletePotion
 } from '../controllers/potionController';

const router = Router();

router.post('/add-potion', isLoggedIn, addPotion);
router.get('/potions', isLoggedIn, getPotions);
router.get('/potion/:id', isLoggedIn, getPotion);
router.put('/update-potion/:id', isLoggedIn, updatePotion);
router.delete('/delete-potion/:id', isLoggedIn, deletePotion);

export default router;