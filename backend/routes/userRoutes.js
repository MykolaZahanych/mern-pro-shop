import express from 'express';
import { authUser, registerUser, getUserProfie, updateUserProfie } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.route('/').post(registerUser);
router.route('/profile').get(protect, getUserProfie).put(protect, updateUserProfie);

export default router;
