# Blender

Hoja de apuntes sobre [Blender versión 3.5.1](https://www.blender.org/download/). El objetivo es crear modelos 3D con **Blender** y pasarlos a **BabylonJS**.

## Índice

  - [Requisitos](#requisitos)
  - [Instalaciones](#instalaciones)
  - [Movimientos](#movimientos)
  - [Recursos](#recursos)
  - [Bibliografía](#bibliografia)

## Requisitos

  - [`Blender`](https://www.blender.org/download/) versión 3.5.
  - [`BabylonJS/BlenderExporter para Blender`](https://github.com/BabylonJS/BlenderExporter.git): plugin para exportar desde Blender ficheros *.babylon. 
  - [`BabylonJS file viewer para VSCode`](https://marketplace.visualstudio.com/items?itemName=julianchen.babylon-js-viewer): plugin para visualizar ficheros `*.babylon` desde Visual Studio Code.

## Instalaciones

----

**Blender** tienes que descargarlo manualmente.

Con **Blender** puedes hacer **modelos 3D, escenas y animaciones** con una interfaz gráfica de usuario muy avanzada. Luego se pueden exportar a **BabylonJS** para entorno de programación multiplataforma con renderización optimizada.

----

**BabylonJS/BlenderExporter** tienes que clonar el repositorio de git así:

Y luego localizar el ZIP `Blender2Babylon-3.3x.zip` (o similar) e instalarlo en tu **Blender** desde *Edit » Preferences » Add-on*.

Este plugin hará que tengas una opción de *File » Export » babylon.js*.

----

**BabylonJS file viewer para VCode** tienes que presionar `CTRL + P` en el Visual Studio Code y pegar este código:

```
ext install julianchen.babylon-js-viewer
```

Esto instalará el plugin en el Visual Studio Code.

----



## Comandos

Los comandos están separados en: `teclas` y `comandos`, pero son lo mismo todo, solo para explicarlo mejor. 

| Comando | Acción |
| ----- | ------ |
| Focalización prestablecida sobre el foco. | `1,9,3,7` |
| Rotación direccional progresiva sobre el foco. | `4,8,6,2` |
| Alternador de proyección entre perspectiva y ortográfica. | `5` |
| Focalización en frontal sobre el objet seleccionado. | `,` |
| Rotación modo normal. | `R + ratón` |
| Rotación modo trackball. | `R + R + ratón` |
| Rotación según eje x global. | `R + X + ratón` |
| Rotación según eje x local. | `R + X + X + ratón` |
| Rotación según eje y global. | `R + Y + ratón ` |
| Rotación según eje y local. | `R + Y + Y + ratón ` |
| Rotación según eje z global. | `R + Z + ratón ` |
| Rotación según eje z local. | `R + Z + Z + ratón ` |
| Traslación en eje difuso. | `G + ratón` |
| Traslación por eje x global. | `G + X + ratón` |
| Traslación por eje x local. | `G + X + X + ratón` |
| Traslación por eje y global. | `G + Y + ratón` |
| Traslación por eje y local. | `G + Y + Y + ratón` |
| Traslación por eje z global. | `G + Z + ratón` |
| Traslación por eje z local. | `G + Z + Z + ratón` |
| Traslación absoluta numérica | Para asignar valores absolutos: selecciona el objeto, y en el `Right sidebar » Object properties » Transform » Location {eje = x, y o z}` y cambias el valor de la caja de texto respectiva. |
| Traslación relativa numérica | Para asignar valores de traslación por algún eje relativos a la posición actual: selecciona el objeto, y luego presiona `R + {eje = x, y o z para global} + {repetir eje para local opcionalmente} + {números absolutos o movimiento del mouse}`. |
| Rotación absoluta numérica | Igual que con la traslación. |
| Rotación relativa numérica | Igual que con la traslación. |
| Escalación absoluta numérica | Igual que con la traslación. |
| Escalación relativa numérica | Igual que con la traslación. |
| Recontextualización de focalización | `Shift + s`. Se despliegan las opciones de contexto. | 
| Inserción de nuevo objeto | `Shift + a`. Se despliega un menú con los objetos que se pueden insertar. Hay cuboides, esferas, cilindros... |
| Colorizar una geometría aun sin luz | Seleccionas el objeto, luego `Right sidebar » Material properties » Add a new material` o, alternativamente, selecciona un material ya creado de la lista de `Material properties`. Renombras el material, si escaece. Buscas `Emission`. Estableces el color que quieres que desprenda el objeto sin luz. |
| Descolorizar una geometría | `Material properties` y eliminas todos los materiales asociados. Debe ponerse el modo `Object mode` y no `Edit mode` para que lo permita. |
| Redondear los bordes de una esfera | `Top panel » Object » Shade smooth`. De esta forma aplanarás la esfera. |
| Redondear los bordes de todo un objeto | Seleccionas el objeto, `Right sidebar » Modifier properties » Add modifier » Bevel`. Rellena la caja de `Edges » Segments` con un número más alto y todos los bordes se redondearán a la vez. |
| Redondear los bordes de una cara de un objeto | Selecciona el objeto. `Top panel » Edit mode » ...`. |
| Cambiar las unidades de toda la escena | `Right sidebar » Scene properties » Units » Length` y pon `Centimeters`. |


Y ya está, porque Blender se cala en mi PC tal cual está ahora.

## Recursos

Texturas:

- [TextureHaven.com](texturehaven.com/textures)
- [Textures.com](textures.com)

HDRI:

- [HdriHaven.com](hdrihaven.com/hdris)
- [Textures.com](textures.com)

Modelos 3D:

- [3DModelHaven.com](3dmodelhaven.com/models)
- [SketchFab (de pago)](https://sketchfab.com)
- [Free3D](https://free3d.com/)


## Ejemplos

### Cómo pintar Paloman

El Paloman 3D es una representación de un humano mediante esferas y cilindros.

1. Crea un nuevo documento, y elimina todos los elementos: cubo, cámara y luz.

2. Cambia las unidades de la escena en: `Right sidebar » Scene properties » Units » Length` y pon `Centimeters`.


## Bibliografía

- [🔥LA GUÍA DEFINITIVA DE BLENDER! (Tutorial completo en Español) | Desde cero! 2.91 3.0](https://www.youtube.com/watch?v=h4hZzPCOMKs)
- [Mad Dog Tutorials - Learning Babylon.js -- Importing a Blender Camera and Mesh Animation into Babylon](https://www.youtube.com/watch?v=5ofgn1rzFcI)