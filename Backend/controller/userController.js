// controllers/userController.js

import User from '../model/UserModel.js';
import generateTokenAndSetCookie from '../utils/generateTokenAndSetCookie.js';
import bcrypt from "bcryptjs"
// Create a new user
 export const signupUser= async(req,res)=>{
  try {
      const{name,email,username,password}=req.body
      const user=await User.findOne({email,username})
      if (user) {
          return res.status(400).json({error:"User alreay exist"})
      }
       const salt= await bcrypt.genSalt(10)
       const hashedPassword=await bcrypt.hash(password,salt)

       const newUser=new User({
          name,
          email,
          username,
          password:hashedPassword
       })
       await newUser.save()
       if (newUser) {

        generateTokenAndSetCookie(newUser._id,res)

          res.status(201).json({
              _id: newUser._id,
              username: newUser.username,
              name: newUser.name,
              email: newUser.email,
              
          })
       }else{
          res.status(400).json({error:"Invalid User Data"})
       }






  } catch (error) {
      res.status(500).json({error: error.message});
      console.log("Error in signupuser   "+ error.message);
  }
}

// loginUser
 export const loginUser=async (req,res)=>{
  try {
      const{username,password}=req.body
      const user=await User.findOne({username})

      if(!user ) {return res.status(400).json({error: 'Invalid username or password'})}

      const isPasswordCorrect= await bcrypt.compare(password,user?.password || "")

      if(!isPasswordCorrect) {return res.status(400).json({error: 'Invalid username or password'})}

      generateTokenAndSetCookie(user._id,res)

      res.status(200).json({
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
          
      })
      console.log("successfully logged in");

  } catch (error) {
      res.status(500).json({error: error.message});
      console.log("Error in loginUser  "+ error.message);
  }

}


// Fetch all users
// export const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Fetch user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user by ID
export const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Logout user
 export const logoutUser = async (req, res) => {
  try {
      res.cookie("jwt","",{maxAge: 1 })
      res.status(200).json({message:"successfully logged out"})
  } catch (error) {
      res.status(404).json({error:"Error in logoutUser"})
      console.log("Error in logoutUser  "+ error.message);
  }
  }

