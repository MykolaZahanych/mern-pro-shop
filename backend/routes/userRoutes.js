import express from 'express';
import { authUser, registerUser, getUserProfie } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.route('/').post(registerUser);
router.route('/profile').get(protect, getUserProfie);

export default router;
