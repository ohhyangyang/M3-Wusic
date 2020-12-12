const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  
  password:{type: String, required:true},
  profileURL:{type: String, default:"/images/default_user_image.png"},
  description: {type: String, maxLength: 1000},
  location:{type:String},
  email:{type:String, required:true},
  artistType:[{type:Object, required: true}],  //checkbox  https://soundbetter.com/s
  genre:{type:String},
  instrument:[{type:Object, required: true}],  //checkbox https://soundbetter.com/s
  spotifyLink:{type:String},
  projectsOwned: [{type:Schema.Types.ObjectId, ref:"Project"}],
  projectsJoined:[{type:Schema.Types.ObjectId, ref:"Project"}],
  likedUsers:[{type:Schema.Types.ObjectId, ref:"User"}],
  
  
},
{
  timestamps:{
      createdAt:"created_at",
      updatedAt:"updated_at"
  }
})


const User = mongoose.model('User', userSchema);

module.exports = User;