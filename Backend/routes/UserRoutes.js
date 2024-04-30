// routes/userRoutes.js

import express from 'express';
import {
  signupUser,
  loginUser,
  
  getUserById,
  updateUserById,
  logoutUser,
} from '../controller/userController.js';
import  protectRoute  from '../middleware/protectedRoute.js';
const router = express.Router();

// Define routes for user-related actions

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/profile/:id', getUserById);
router.put('/update/:id',protectRoute, updateUserById);
router.post('/logout',protectRoute, logoutUser);

export default router;
