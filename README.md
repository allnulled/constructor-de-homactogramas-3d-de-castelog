# Constructor de homactogramas 3D de Castelog

Homactógrafo 3D de Castelog.

**Nota: está en desarrollo todavía.**

## Versión online

Puedes ir directamente a la versión online a:

 - [https://allnulled.github.io/constructor-de-homactogramas-3d-de-castelog](https://allnulled.github.io/constructor-de-homactogramas-3d-de-castelog).

## Introducción

Pues él es PaloMan.

![Imagen_1_del_homactografo](./dev/imagenes/homactografo-3d.1.png)

Ves. Aquí desde otro punto de vista. Hay que mejorarlo.

![Imagen_2_del_homactografo](./dev/imagenes/homactografo-3d.2.png)

## Desarrollo en proceso

El estado del proyecto es todavía prematuro. Esta es la progresión:

 - [x] Construir a Paloman con **espacialidad consistente**
    - [x] Donde termina un "hueso" empieza el siguiente
    - [x] Hay una coherencia mínima variabilizada
 - [x] Construir a Paloman como **instancia de una clase Persona** propia de la API de Paloman 3D.
   - [x] Que tenga todas las variables locales correctamente aisladas.
   - [x] Que tenga todas las variables configurales correctamente aisladas y configuradas.
   - [x] Que pueda sobreescribir fácilmente variables locales y configurales.
 - [ ] Construir a Paloman con **movimiento consistente**
    - [ ] Separar variables de ángulo/movimiento
    - [ ] Introducir efectivamente variables de ángulo en cómputo posicional
    - [ ] Hacer consistente el estado de las variables de ángulo con el cómputo posicional progresivo/consecutivo de los "huesos" y "articulaciones"

## Profundización

El **[Homactógrafo de Castelog](#)** está básicamente basado en **[Babylon.js](https://doc.babylonjs.com/typedoc/modules/BABYLON)**. Parece ser que esta API está en la cabeza de la industria del gaming-web y tiene:
  - **Muchas funciones mágicas.**  Funciones que representan avances científicos centúricos:
    - de matemática geométrica
    - de física y gravedad
    - de óptica (efectos de lente, de perspectiva, etc.)
    - de patrones de programación eficientes y efectivos para optimizar renderización y organización de funciones y datos
    - de compatibilización de plataformas:
      - **Babylon.js** asegura compatibilidad con varias plataformas para generar aplicaciones móviles, webs progresivas o aplicaciones de escritorio.
    - de compatibilización de formatos tanto de imagen como de animación
      - con **[Blender](https://docs.blender.org/manual/en/latest/)** entre otros, el cual, para profundizar, tendrás que meterte con Python y:
        - la **[Blender 3.5.1 Python API](https://docs.blender.org/api/current/index.html)**.
      - también con **Unity**.

La API de Babylon.js es una API muy seria, **que no puedes permitirte no usar** si quieres efectos pepino **con 3D + la HTML5 Canvas API**. De Microsoft, liberada hace algo de tiempo. Seguramente hay otros, pero lo que he investigado, parece la más completa.


## Ayuda adicional

Estas cheat sheets son de soporte para el desarrollo de gráficos 3D:

 - De **[Babylon.js JS API](#)** en [BABYLONJS.md](./BABYLONJS.md)
 - De **[Blender GUI](#)** en [BLENDER.md](./BLENDER.md)
 - De **[Blender 3.5.1 Python API](#)** en [BLENDER.PY.md](./BLENDER.PY.md)