import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  companyemail:{
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

const Company = mongoose.model('Company', companySchema);

export default Company;
