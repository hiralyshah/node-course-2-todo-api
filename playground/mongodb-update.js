
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

   /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5abd6466acee8b09709845be')
    },{
        $set: {
        completed: true
        }
    },{
        returnOriginal: false
    }).then((result)=>{
    console.log(result);
})*/

db.collection('User').findOneAndUpdate({
    _id: new ObjectID('5abd663d48609700f46b6c52')
},{
    $set: {
    Name: 'hiral'
    }
,
    $inc: {
        age:1
    }
}
,{
    returnOriginal: false
}).then((result)=>{
console.log(result);
})
});
