const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    type:{ type: String, enum: ["Live", "Song production", "Recording", "Movies&TV"] },  //radio添加
    lookingFor:[{type:Object,required:true}],   //checkbox添加 (artistType + instrument)  https://soundbetter.com/jobs
    location:{type: String},
    fee:{type: String},
    coverURL:{type: String, default:"/images/default_user_image.png"},
    description:{type: String, maxLength: 1000},
    status:{ type: String, enum: ["open", "close"] },
    requests:[{ type: Schema.Types.ObjectId, ref: "User" }],
    participants:[{ type: Schema.Types.ObjectId, ref: "User" }],
    

  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;
