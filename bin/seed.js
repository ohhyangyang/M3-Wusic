const mongoose = require("mongoose");
const Project = require('./../models/project.model');
const User = require('./../models/user.model');

const projects = require('./projects-mock-data');
const users = require('./users-mock-data');
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then(()=>{
      const pr = Project.create(projects);
      return pr
  })
  .then((createdProjects)=>{
    //   console.log(createdProjects)
      console.log(`Created ${createdProjects.length} projects`);

      const updatedUser = users.map((user,i)=>{
          const project = createdProjects[i];
          if(project){
              user.projectsOwned=[project._id];
              return user
          }else{
              return user
          }
      })

      const pr = User.create(updatedUser);
      return pr
  })
  .then((createdUsers)=>{
    console.log(`Created ${createdUsers.length} users`);

    const pr = User.find();
    return pr
  })
  .then((foundUsers)=>{
    foundUsers.forEach((user,i)=>{
      const pr = Project.findByIdAndUpdate(
        user.projectsOwned[0],
        {owner:user._id},
        {new:true},
        function(err){
          if(err){
            console.log(err);
          }
        }
      )
      return pr;
    })
  })
  .then(()=>{
    console.log('...')
  })
  .catch((err) => console.log(err));