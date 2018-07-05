const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

// var id = '5b37af4db3027f1ea2226aa611';
//
// if(!ObjectId.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e)=>console.log(e));

//challenge
var userId = '5b33fc98ca7b2b0a80acfd8c';

User.findById(userId).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log(user);
}).catch((e)=>console.log(e));
