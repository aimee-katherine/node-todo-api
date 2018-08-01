const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/users');

var app =  express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos})
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res)=>{
  var id = req.params.id;

  //validate using isVal if not, 404 with empty body
  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  //findById- success send back, error with status 400 and empty body
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
      res.send({todo});
    }).catch((e)=>{
      res.status(400).send();
    });

});


app.delete('/todos/:id', (req, res)=>{
  //get the id
  var id = req.params.id;

  //validate the id -> not valid return 404
  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  //remove todo by id success or error
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.status(200).send({todo});
    console.log({todo});

  }).catch((e)=>{
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set:body}, {new:true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});

  }).catch((e)=>{
    res.status(400).send();
  });

});

app.listen(port, ()=>{
  console.log(`Started up at port ${port}`);
});


module.exports = {app};
