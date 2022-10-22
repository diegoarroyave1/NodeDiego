const { MongoClient } = require("mongodb");

const uri ='mongodb+srv://DiegoArroyave:diego123456789@cluster0.jqmlrhz.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);


const database = client.db('VirtualShop');
const coleccion = database.collection('Usuarios,Producto');

module.exports ={
      client,
      coleccion
    }
    
    
  



