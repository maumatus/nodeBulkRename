/*Bulk renamer V01. Documentación al final abajo*/

let fs = require('fs');
let path = require('path');
let express = require('express');
let app = express();
//let script = require('./public/js/scripts.js')


var i = 0;//Esta variable guarda valor de cada iteración de loop "For Each".
let c = 0;//Esta guarda el valor leído del directorio


const port = process.env.PORT || 3000

//Puerto base Node-Express toma numero puerto desde constante
app.listen(port,()=>console.log(`Ejecutando servidor en http://localhost:${port} ` + 
`press Ctrl-C para terminarlo. `));

//Publicamos carpeta "Public" completa para disponibilidad


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));
app.use("/public/css/", express.static(__dirname + '/public/css/'));
app.use('/public/img/', express.static(__dirname + '/public/img/'));
app.use('/public/js/', express.static(__dirname + '/public/js/'));
//Con método GET user obtiene index.html
app.get("/",(req,res) => {
    res.sendFile(__dirname + '/public/index.html')
});


//***EXPERIMENTAL - Probamos si con AXIOS script.js de FRONT toma el valor de variables con petición GET desde el BACK***//
app.get("/",(req, res, data) => {
    DoStuf.DoStuffFunction(req.body.UserID, function(label) {
        data = i;
        res.send({message: data});
        })   
    //var i = 0;//Esta variable guarda valor de cada iteración de loop "For Each".
    //let c = 0;//Esta guarda el valor leído del directorio
});
//***EXPERIMENTAL***/



//Metodo POST. Envía directorio entrada y salida
app.post("/",(req,res)=>{

    let entrada = req.body.entrada;
    let salida = req.body.salida;

    //Probamos que nos reconoce
    //console.log(entrada)
    //console.log(salida)

//método Node.JS core que lee todos los archivos ordenados numericamente desde directorio.
    fs.readdir(`${entrada}`,(err, files) => {
        //Este regex obvia lectura de archivos ocultos extensión .DS_Store
        files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

//-----------------------------------------------------------------------------
        //Barra Progreso
        //Necesitamos contar la cantidad de archivos de directorio. Eso es universo 100%. 
        c = files.length;//Esta variable guarda el valor de numero de archivos del directorio, descontando archivos ocultos.
        
//------------------------------------------------------------------------------
        
        if (!err) {

            files.forEach((file,index) => {
            //console.log(file);
            //console.log(index);
        
                var extension = file.split(".")
                extension = extension[extension.length-1]

                //console.log(extension);
            //Copia cada archivo en orden numerico y lo copia con nuevo nombre
            ///Users/mauricio/Desktop/salida/nuevo -> Agregar campo para agregar nombre y cargar carpeta con ícono mejor.
                fs.copyFile(entrada + "/" + file, salida + index + "." + extension,(err)=>{
                    if(err)throw err;
                    console.log(`archivo ${index} copiado con éxito`);

                     //Prueba
                    i = i + 1;
                    
                    console.log(i); //Vemos si suma 1 cada vuelta
                    
                    //Prueba
 
                });

            });//Cierra ForEach

        } else {
            console.log(err)
        }

        console.log(c);
        console.log(i);

    });//Cierra readdir

    res.redirect('http://localhost:3000');
    
    res.end();

});//Cierre servidor virtual con método POST 

/*****--Este prototipo aún no en estapa producción, faltan pruebas de carga, pruebas unitarias, etc. 
funciona bajo NodeJS y Express en el Backend, para Frontend CSS y HTML Markup (Parte del PEVN stack)

Para usar esta versión de renombrador por lote de imagenes hay que ingresar datos por una "FORM" en la Interfaz principal.
Se escribe el directorio contenedor de imagenes a copiar y un directorio de salida con el nuevo nombre archivo. 
La aplicación automaticamente agrega un numero secuencial de acuerdo a orden de carpeta de origen. 
Estas secuencias yo las uso en Workflow en animación/motion graphics y resuelve el problema de errores en render de nombre o nombres muy largos en secuencias.
Es Versión 0.1. Posteriormente se planifica agregar barra de avance por streaming de NodeJS y Drop Directory/arrastrar y soltar--******/




