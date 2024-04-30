// routes/companyRoutes.js

import express from 'express';
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompanyById,
  CompanyLogin,
  LogoutCompany,
} from '../controller/companyController.js';

const router = express.Router();

// Define routes for company-related actions
router.post('/create', createCompany);
router.post('/login', CompanyLogin);
router.get('/profile', getCompanies);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompanyById);
router.post('/logout', LogoutCompany);

export default router;
