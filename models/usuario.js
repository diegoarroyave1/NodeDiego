const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({

    correo: {type : String},
    password: {type : Number},
    rol: {type : String},
    habilitado: {type : Boolean},
    id:{type : Number}


});

const Usuario = mongoose.model("Usuario" , usuarioSchema);

module.exports = Usuario;