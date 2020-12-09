const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  
  password:{type: String, required:true},
  profileURL:{type: String, default:"/images/default_user_image.png"},
  description: {type: String, maxLength: 1000},
  location:{type:String},
  email:{type:String, required:true},
  artistType:[{type:String,enum:['Singer', 'Rapper', 'Composer', 'Mixing engineer', 'Producer', 'Songwriter', 'Sound designer', 'Beatmaker']}],  //checkbox  https://soundbetter.com/s
  genre:{type:String},
  instrument:[{type:String, enum:['Guitar', 'Piano', 'Sax', 'Violin', 'Horn', 'Drum', 'Trumpet', 'Ukelele', 'Accordion', "Bass", "Keyboard"], required: true}],  //checkbox https://soundbetter.com/s
  spotyfyLink:{type:String},
  spotifyEmbed:{type:String},
  projectsOwned: [{type:Schema.Types.ObjectId, ref:"Project"}],
  projectsJoined:[{type:Schema.Types.ObjectId, ref:"Project"}],
  likedUsers:[{type:Schema.Types.ObjectId, ref:"User"}]
  
},
{
  timestamps:{
      createdAt:"created_at",
      updatedAt:"updated_at"
  }
})


const User = mongoose.model('User', userSchema);

module.exports = User;