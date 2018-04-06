//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'hiral', age:38};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')
    
    db.collection('Todos').insertOne({
        text: 'something to do again',
        completed: false
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert todo', err );
        }   
        console.log(JSON.stringify(result.ops, undefined, 2)); 
    })

    db.collection('Users').insertOne({
        _id: 1234,
        Name: 'milan',
        age: 38,
        location: 'reading, berkshire'
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    client.close();
});



