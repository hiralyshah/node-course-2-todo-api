const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    //deleteMany
    db.collection('Todos').deleteMany({text: 'something to do again'}).then((result)=>{
        console.log(result);
    });

    //deletOne
    //db.collection('Todos').deleteOne({text: 'something to do again'}).then((result)=>{
       // console.log(result);
    //});

    //findOneAndDelete

    client.close()

});