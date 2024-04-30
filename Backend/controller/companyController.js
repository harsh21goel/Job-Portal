// controllers/companyController.js

import Company from "../model/CompanyModel.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
// Create a new company
export const createCompany = async (req, res) => {
  try {
    const { name, industry, size, location, description, password,companyemail } = req.body;
    const user = await Company.findOne({ name });
    if (user) {
      return res.status(400).json({ error: "User alreay exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newCompany = new Company({
      name,
      industry,
      companyemail,
      size,
      location,
      description,
      password: hashedPassword,
    });
    await newCompany.save();
    if (newCompany) {
      generateTokenAndSetCookie(newCompany._id, res);

      res.status(201).json({
        _id: newCompany._id,
        name: newCompany.name,
        companyemail: newCompany.companyemail,
        industry: newCompany.industry,
        size: newCompany.size,
        location: newCompany.location,
        description: newCompany.description,
      });
    } else {
      res.status(400).json({ error: "Invalid Company Data" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error in loginUser  "+ error.message);

  }
};

// company login
export const CompanyLogin =async (req, res) => {
  try {
    const {companyemail,password} = req.body;
    const company=await Company.findOne({companyemail})

    if(!company ) {return res.status(400).json({error: 'Invalid email or password'})}

    const isPasswordCorrect= await bcrypt.compare(password,company?.password || "")

    if(!isPasswordCorrect) {return res.status(400).json({error: 'Invalid username or password'})}

    generateTokenAndSetCookie(company._id,res)

    res.status(200).json({
      _id: company._id,
      name: company.name,
      companyemail: company.companyemail,
      industry: company.industry,
      size: company.size,
      location: company.location,
      description: company.description,
        
    })
    console.log("successfully logged in");
  } catch (error) {
    res.status(400).json({ message: error.message });

    console.log("Error in loginCompany  "+ error.message);
    
  }
}


// Fetch all companies
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update company by ID
export const updateCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete company by ID
export const LogoutCompany = async (req, res) => {
  try {
    res.cookie("jwt","",{maxAge: 1 })
    res.status(200).json({message:"successfully logged out"})
} catch (error) {
    res.status(404).json({error:"Error in logout Company"})
    console.log("Error in logout Company  "+ error.message);
}
};
