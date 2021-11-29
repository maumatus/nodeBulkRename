# nodeBulkRename

Prototipo de renombrador de secuencias de imagenes.
Re-N V0.1

Este prototipo aún no en estapa de producción, faltan pruebas de carga, unitarias, etc. 
funciona bajo NodeJS y Express en el Backend, para Frontend CSS y HTML Markup (Parte del PEVN stack).
Es muy simple y solo hace el trabajo.

Para usar esta versión de renombrador por lote de imagenes hay que ingresar datos en la planilla ("FORM") en la Interfaz principal.
Se escribe el directorio contenedor de imagenes a copiar y un directorio de salida con el nuevo nombre archivo. 
La aplicación automaticamente agrega un numero secuencial de acuerdo a orden de carpeta de origen. 

Estas secuencias yo las uso en mi Workflow de animación/motion graphics y resuelve el problema de corregir errores en render de nombre o nombres muy largos en secuencias.
Posteriormente se planifica agregar barra de avance por streaming de NodeJS y Drop Directory/arrastrar y soltar.
