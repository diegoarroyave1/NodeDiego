const mongoose = require('mongoose');

const url = `mongodb+srv://DiegoArroyave:diego123456789@cluster0.jqmlrhz.mongodb.net/VirtualShop?retryWrites=true&w=majority`

const connectionsParams ={
    useNewUrlParser: true,
    useUniFiedTopology: true
}
mongoose.connect(url,connectionsParams)
        .then(()=>{
            console.log('se conecto a la base de datos');
        })
        .catch(()=>{
            console.error(`no se puedo conectar a ña base de datos. n${err}`);
        })

    module.exports = mongoose