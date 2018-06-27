//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log('obj:',obj);
//es6 object destructering lets you pull out properties from objects creating variables.
// var user = {name: 'andrew', age: 25};
// //new variable name in curly braces, set it equal to object.
// var {name} = user;
// console.log(name);

//client = db object to read or write data
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  // db.collection('Users').insertOne({
  //   name: 'Emily',
  //   age: '50',
  //   location: 'Miami'
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   //result.ops is an array of all docs that got inserted
  //   console.log('time is:',result.ops[0]._id.getTimestamp());
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
