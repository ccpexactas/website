# Generador del sitio web CCPExactas

Este repositorio contiene el código y los recursos
necesarios para generar por completo el sitio web de la 
agrupación Construcción Colectiva Profesorxs Exactas.

El sitio es reconstruido automáticamente al detectar
cambios en la rama principal del repositorio.

El contenido de las secciones se encuentra separado del
código y acepta la sintaxis de [markdown].

Los contenidos editables de cada sección se desarrollan
a continuación.

## Contenido editable

### Inicio

El contenido de esta sección proviene del archivo
[presentation.md]. En el mismo se encuentra especificada
la ruta al banner, el título (opcional) y el texto de
presentación.

### Propuestas

La sección de propuestas se genera a partir del archivo
[proposal.md]. Todo el formato de esta página se
renderiza a través de la sintaxis de [markdown].
Recibe como parámetro el link utilizado por el botón 
"ver más" y puede configurarse un título para la página.

### Candidatxs

Esta sección hace referencia a 6 archivos diferentes:
- [dean_short.md] Decana (versión resumida)
- [dean_large.md] Decana (versión completa)
- [vicedean_short.md] Vicedecana (versión resumida)
- [vicedean_large.md] Vicedecana (versión completa)
- [counselorsTitular.csv] Lista de consejerxs titulares
- [counselorsAlternate.csv] Lista de consejerxs suplentes 

Las descripciones para Decana y Vicedecana aceptan 3 parámetros 
adicionales en el encabezado: titulo, nombre e imagen.

Las listas de consejerxs deben completarse en formato
csv manteniendo el orden de las columnas ya establecidas.

### Actividades

Esta página esta dividida en dos partes: 
- un carrusel de imágenes, para actividades vigentes y 
anuncios. 
- una lista de actividades realizadas. 

Las imágenes deben cargarse en la carpeta [images/activities] 
con formato .jpg o .png. Las imágenes que sean retiradas 
de esta carpeta dejarán de exhibirse en el carrousel.

Las actividades realizadas consisten en un contenido
multimedia incrustado (por ejemplo un video de youtube) 
acompañado de un título y una descripción.

Las actividades visibles se encuentran en el archivo
[activities.yml].

### Contacto

La sección de contacto se genera a partir de dos archivos:
- [invitation.md] Dedicado a invitar adherentes
- [joined.csv] Lista de adheridxs


[markdown]: https://marked.js.org/demo
[presentation.md]: ./content/texts/presentation.md
[proposal.md]: ./content/texts/proposal.md
[dean_short.md]: ./content/texts/dean_short.md
[dean_large.md]: ./content/texts/dean_large.md
[vicedean_short.md]: ./content/texts/vicedean_short.md
[vicedean_large.md]: ./content/texts/vicedean_large.md
[counselorsTitular.csv]: ./content/csvs/counselorsTitular.csv
[counselorsAlternate.csv]: ./content/csvs/counselorsAlternate.csv
[images/activities]: ./build/static/img/activities
[texts/activities]: ./content/texts/activities
[invitation.md]: ./content/texts/invitation.md
[joined.csv]: ./content/csvs/joined.csv
[activities.yml]: ./content/activities.yml
