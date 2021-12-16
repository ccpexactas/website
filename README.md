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

La lista de links visualizada al presionar el botón "ver
más" se obtiene del archivo [linksDocuments.yml].

### Candidatxs

Esta sección hace referencia a 7 archivos diferentes:
- [introCandidates.md] Párrafo introductorio
- [deanShort.md] Decana (versión resumida)
- [deanLarge.md] Decana (versión completa)
- [vicedeanShort.md] Vicedecana (versión resumida)
- [vicedeanLarge.md] Vicedecana (versión completa)
- [counselorsTitular.csv] Lista de consejerxs titulares
- [counselorsAlternate.csv] Lista de consejerxs suplentes 

Las descripciones para Decana y Vicedecana aceptan 3 parámetros 
adicionales en el encabezado: titulo, nombre e imagen.

Las listas de consejerxs deben completarse en formato
csv manteniendo el orden de las columnas ya establecidas.

> Actualmente el contenedor de candidatxs a consejerxs se
> encuentra deshabilitado. Para habilitarlo se debe eliminar el
> parámetro de estilo `display: none` de [esta ubicación]

### Actividades

Esta página esta dividida en dos partes: 
- un carrusel de imágenes, para actividades vigentes y 
anuncios. 
- una lista de actividades realizadas. 

Las imágenes de las actividades por realizarse deben cargarse 
en la carpeta [images/activities] con formato .jpg o .png. 
Las imágenes que sean retiradas de esta carpeta dejarán de 
exhibirse en el carrousel.

Las actividades realizadas consisten en un contenido
multimedia incrustado (por ejemplo un video de youtube) 
acompañado de un título y una descripción.

Las actividades pasadas visibles se encuentran en el archivo
[activities.yml]. Las actividades más recientes deben ser
agregadas al comienzo del archivo.

### Contacto

La sección de contacto se genera a partir del archivo
[join.md]. El texto de invitación acepta formato [markdown].
Los parámetros de este archivo permiten editar las redes 
sociales y la url al csv con la lista de adheridxs.

### Concursos abiertos en organismos de CyT

El contenido de esta sección es generado por 4 archivos.

En un primer bloque se encuentra un párrafo introductorio [introContest.md] 
y una sección novedades [updates.md]. 

Luego se encuentra el listado de institutos y contacto con facilitadores
[contact.yml].

Y por último los videos del conversatorio realizado con los distintos los 
organismos de CyT [discussion.yml]. 

[markdown]: https://marked.js.org/demo/
[presentation.md]: ./content/texts/presentation.md
[proposal.md]: ./content/texts/proposal.md
[linksDocuments.yml]: ./content/texts/linksDocuments.yml
[introCandidates.md]: ./content/texts/introCandidates.md
[deanShort.md]: ./content/texts/deanShort.md
[deanLarge.md]: ./content/texts/deanLarge.md
[vicedeanShort.md]: ./content/texts/vicedeanShort.md
[vicedeanLarge.md]: ./content/texts/vicedeanLarge.md
[counselorsTitular.csv]: ./content/csvs/counselorsTitular.csv
[counselorsAlternate.csv]: ./content/csvs/counselorsAlternate.csv
[images/activities]: ./build/static/img/activities
[texts/activities]: ./content/texts/activities
[join.md]: ./content/texts/join.md
[activities.yml]: ./content/texts/activities.yml
[esta ubicación]: https://github.com/ccpexactas/website/blob/1e52e5dc7cc1b74fb51e020020b6b8b97d8200b4/src/candidates.js#L117
[introContest.md]: ./content/texts/introContest.md
[updates.md]: ./content/texts/updates.md
[contact.yml]: ./content/texts/contacts.yml
[discussion.yml]: ./content/texts/discussion.yml
