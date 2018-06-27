//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log('obj:',obj);
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

  // db.collection('Todos').find({completed:false, _id: new ObjectID('5b32b2d8f53f23e438795edb')}).toArray().then((docs)=>{
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos:${count}`);
  //
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find().toArray().then((docs)=>{
    console.log('Docs:', JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to find doc', err);
  });

  //client.close();
});
