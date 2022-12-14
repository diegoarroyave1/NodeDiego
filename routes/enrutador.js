const express = require('express');
const router = express.Router();
const modeloProducto = require('../models/producto');
const modeloUsuario = require('../models/usuario');
const mongoose = require('../config/conection')


router.get('/about', (req,res)=>{
    res.render('pages/index');
})


router.get('/inicio', async (req, res) => {
    res.render('pages/index');
   
});

router.get('/formularioProducto', (req, res) => {
     res.render('pages/registrarProducto');
    
 });


router.post('/registrarProducto',async(req,res,next)=>{
    
     const productodb= new modeloProducto({
       referencia : req.body.Referencia,
       nombre: req.body.Nombre,
       descripcion: req.body.Descripcion,
       precio: req.body.Precio,
       stock: req.body.Stock,
       habilitado: true

    })
    await productodb.save()
    console.log(req.body.Nombre)
    res.render('pages/index')
});

router.get('/formularioUsuario', (req, res) => {
    res.render('pages/registrarUsuario');
   
});


router.post('/registrarUsuario',async(req,res,next)=>{
   
    const usuariodb= new modeloUsuario({

      correo: req.body.Correo,
      password: req.body.Password,
      rol: req.body.Rol,
      habilitado: true,
      id:req.body.Id
   })
   await usuariodb.save()
   console.log(req.body.Correo)
   res.render('pages/index')
});

router.post('/login',async(req,res,next)=>{
    let us = req.body.Correo;
    const usuariologueado = await User.findOne({"Correo":us});
    console.log("usuario logeado")
});
module.exports = router;