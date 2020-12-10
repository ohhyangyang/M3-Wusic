const express = require("express");
const router = express.Router();
const Project = require('./../models/project.model');
const User = require('./../models/user.model');
const createError = require('http-errors');
const uploader = require('./../config/cloudinary-setup')
const {isLoggedIn} = require('./../helpers/middlewares')

//POST   '/api/userUpload'   => upload user image
router.post("/userupload", isLoggedIn, uploader.single("profileURL"), (req, res, next) => {
    // console.log("file is: ", req.file);
  
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    // get secure_url from the file object and save it in the
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json({ secure_url: req.file.secure_url });
  });


//GET   'api/users'   => get all users
router.get("/users", isLoggedIn, (req,res,next)=>{
    User
      .find()
      .then((allUsers)=>{
          res.status(200).json(allUsers)
      })
      .catch((err)=>{
        next(createError(err));
    })

})

//GET  'api/users/:userId'  => show all the populated info of a user
router.get('/users/:userId', isLoggedIn, (req,res,next)=>{
    const {userId} = req.params
    User 
     .findById(userId)
     .populate({path:"projectsOwned",populate:{path:'participants'}})
     .populate({path:"projectsOwned",populate:{path:'requests'}})
     .populate("projectsJoined")
     .populate("likedUsers")
     .then((foundUser)=>{
         res.status(200).json(foundUser)
     })
     .catch((err)=>{
        next(createError(err));
    })
})

//PUT  'api/users/:userId'  => edit profile
router.put('/users/:userId', isLoggedIn, (req,res,next)=>{
    const {userId} = req.params;
    const {username,profileURL,description,location,email,artistType,genre,instrument,spotifyLink,spotifyEmbed}=req.body
    User
     .findByIdAndUpdate(userId,{username,profileURL,description,location,email,artistType,genre,instrument,spotifyLink,spotifyEmbed},{new:true})
     .then((updatedUser)=>{
         res.status(200).json(updatedUser)
     })
     .catch((err)=>{
        next(createError(err));
     })
})

//DELETE  'api/users/:userId'  => delete a profile
router.delete('/users/:userId', isLoggedIn, (req,res,next)=>{
    const {userId} = req.params;
    User
     .findByIdAndRemove(userId)
     .then(()=>{
        res
        .status(202)
        .send(`User ${userId} was removed successfully.`)
     })
     .catch( (err) => {
        next(createError(err));
      });
})

//GET 'api/users/like/:userId'  =>like a user
router.get('/users/like/:userId', isLoggedIn, (req,res,next)=>{
    const {userId} = req.params;
    const cookieGuyId = req.session.currentUser._id
    console.log("cookieGuyId",cookieGuyId)
    console.log("userId",userId)
    User
      .findByIdAndUpdate(cookieGuyId,{$push:{likedUsers:userId}},{new:true})
      .then((updatedUser)=>{
          res
            .status(200)
            .json(updatedUser)
      })
      .catch((err)=>{
        next(createError(err));
    })
})

module.exports=router