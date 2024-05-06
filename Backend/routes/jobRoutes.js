// routes/jobRoutes.js

import express from 'express';
import {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  deleteJobById,
} from '../controller/jobController.js';

const router = express.Router();

// Define routes for job-related actions

router.post('/', createJob);
router.get('/jobs', getJobs);
router.get('/:id', getJobById);
router.put('/:id', updateJobById);
router.delete('/:id', deleteJobById);

export default router;
