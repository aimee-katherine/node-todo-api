//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



//client = db object to read or write data
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b33949bb003257bc95cc2f6')}, {
  //   $set:{completed: true}
  // }, {returnOriginal: false}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b327f387cd1bf2043758df7')}, {
    $set:{name:'Aimee'},
    $inc:{age:1}
  }, {returnOriginal:false}).then((result)=>{
    console.log(result)
  });
  //client.close();
});
