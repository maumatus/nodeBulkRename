Prototipo de renombrador de secuencias de imagenes. Re-N V0.1. "nodeBulkRenamer"


Este prototipo aún no en estapa de producción, faltan pruebas de carga, unitarias, etc. funciona bajo NodeJS y Express en el Backend, para Frontend CSS y HTML Markup (Parte del PEVN stack). 

Para usar esta versión de renombrador por lote de imagenes hay que ingresar datos en la planilla ("FORM") en la Interfaz principal. Se escribe el directorio contenedor de imagenes a copiar y un directorio de salida con el nuevo nombre archivo. La aplicación automaticamente agrega un numero secuencial de acuerdo a orden de carpeta de origen.

Estas secuencias yo las uso en mi Workflow de animación/motion graphics y resuelve el problema de corregir errores en render de nombre o nombres muy largos en secuencias. 

V.02 se planifica agregar barra de avance por streaming de NodeJS.
V.03 Drop Directory/arrastrar y soltar para mejorar la interactividad.

Actualementte es una app muy simple, dependencias nativas a NodeJS + Express y solo hace el trabajo.

Éxito si le sirve a alguien!!!.

15-12-2021. Actualización: tuve un problema en la validación de ingreso directorio de inicio en el hmtl. El Dom comenzó a pedir un directorio en formato cuando había funcionado perfecto por lo menos 20 veces anteriores. Ver problema para mantener app.

23-12-2021. Actaulización: Se hicieron aprox. 10+ pruebas de funcionamientos para respaldar y renombrar al mismo tiempo archivos desde tarjetas de memoria con fotografías. Cargas de 1gb a 2gb por proceso y la aplicación funcionó sin fallas. Único problema a solventar es cuando elimino archivos desde los convertidos y al renombrarlos nuevamente generó algunos duplicados, pero no corrompió ningun archivo.
