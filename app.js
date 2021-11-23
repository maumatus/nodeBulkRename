let fs = require('fs');
let path = require('path');
let express = require('express');
let app = express();

const port = process.env.PORT || 3000

//Puerto base Node-Express toma numero puerto desde constante
app.listen(port,()=>console.log(`Ejecutando servidor en http://localhost:${port} ` + 
`press Ctrl-C para terminarlo. `));

//Publicamos carpeta "Public" completa para disponibilidad
//app.use(express.static('/public/'));

app.use(express.urlencoded({

    extended: true
    
}));

app.use(express.static(__dirname + '/public'));
//Con método GET user obtiene index.html
app.get("/",(req,res) => {

    res.sendFile(__dirname + '/public/index.html')

});

//Agregaremos un ícono-botón de carpeta que tomara el path para no escribir. Simplifica acceso a data.
app.post('/carpeta_carga',(req,res)=>{

    let dir_entrada = req.path.dirname('')
    console.log(dir_entrada)

});

/*
//Metodo POST. Envía directorio entrada y salida
app.post("/",(req,res)=>{

    let entrada = req.body.entrada;
    let salida = req.body.salida;

    //Probamos que nos reconoce
    console.log(entrada)
    console.log(salida)
//método Node.JS core que lee archivos desde directorio
    fs.readdir(`${entrada}`,(err, files) => {
        console.log(files);
        
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
                    console.log(`archivo ${index} copiado con éxito`)
                });


            })//Cierra ForEach

        } else {
            console.log(err)
        }

    });//Cierra readdir

    res.end();

});//Cierre método POST 

*/

//Yo tenía resuelto el como leer campos ingreso desde DOM, revisar e incluir. * OK
//Falta diseñar interfaz-OK
//Agregar a un desarrollo con GIT y GITHUB.
//Pruebas unitarias posteriores
//Script JS puede validar ingreso
//Agregar barra de avance
//Definir entrega producción

