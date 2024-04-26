// routes/userRoutes.js

import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controller/userController.js';

const router = express.Router();

// Define routes for user-related actions

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;
