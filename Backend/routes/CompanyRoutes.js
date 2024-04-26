// routes/companyRoutes.js

import express from 'express';
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
} from '../controller/companyController.js';

const router = express.Router();

// Define routes for company-related actions
router.post('/', createCompany);
router.get('/', getCompanies);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompanyById);
router.delete('/:id', deleteCompanyById);

export default router;
