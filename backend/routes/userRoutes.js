import express from 'express';
import {
  authUser,
  deleteUser,
  registerUser,
  getUserProfie,
  updateUserProfie,
  getUsers,
  getUserById,
  updateUser
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfie).put(protect, updateUserProfie);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
