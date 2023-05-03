# Documentación oficial del Homactógrafo 3D de Castelog

Bienvenido.

## Versión online

Todavía no está disponible.


### Iniciar el homactógrafo

Para iniciar un homactógrafo, solo tienes que hacer:

```calo
creo homactografo como Homactografo.iniciar().
```

O lo que es lo mismo:

```calo
creo homactografo como un nuevo Homactografo().
hago homactografo.iniciarse().
```

O lo que es lo mismo:

```calo
creo homactografo como un nuevo Homactografo().
hago homactografo.crear.escena("inicial").iniciarse().activarse().
hago homactografo.crear.camara("inicial").iniciarse().activarse().
hago homactografo.crear.luz("inicial").iniciarse().activarse().
hago homactografo.crear.objeto("inicial").iniciarse().pintarse().
```

### La API del `homactografo`

El `homactografo` es el objeto más global de la API. Se crean instancias. Y éstas son así:

```js
{
  escena: func,
  camara: func,
  luz: func,
  objeto: func,
  virtual: {
    instancia: {
      de: {
        escena: {},
        camara: {},
        luz: {},
        objeto: {},
      }
    }
    clase: {
      de: {
        escena: {},
        camara: {},
        luz: {},
        objeto: {},
      }
    }
  }
}

```

- homactografo
  - memoria...
    - clases...
      - de...
        - escena:
          - Estandar
        - camara:
          - Estandar
        - luz:
          - Estandar
        - objeto:
          - Persona
          - Estandar
    - escenas: `object` con todas las escenas conocidas, asociadas a su `id`.
    - camaras: `object` con todas las cámaras conocidas, asociadas a su `id`.
    - luces: `object` con todas las luces conocidas, asociadas a su `id`.
    - objetos: `object` con todas las objetos conocidos, asociados a su `id`.
  - crear...
    - escena: `function` para crear una nueva escena.
    - camara: `function` para crear una nueva cámara.
    - luz: `function` para crear una nueva luz.
    - objeto: `function` para crear un nuevo objeto.
  - eliminar...
    - escena: `function` para crear una nueva escena.
    - camara: `function` para crear una nueva cámara.
    - luz: `function` para crear una nueva luz.
    - objeto: `function` para crear un nuevo objeto.
  - escena: `function` para seleccionar una escena por su `id` o crearla al vuelo.
  - camara: `function` para seleccionar una cámara por su `id` o crearla al vuelo.
  - luz: `function` para seleccionar una luz por su `id` o crearla al vuelo.
  - objeto: `function` para seleccionar un objeto por su `id` o crearlo al vuelo.
