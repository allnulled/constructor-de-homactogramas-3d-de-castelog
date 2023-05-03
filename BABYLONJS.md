# Babylon.js 

Esta documentación es una síntesis priorizada de ésta otra: [https://doc.babylonjs.com/typedoc/modules/BABYLON](https://doc.babylonjs.com/typedoc/modules/BABYLON), que es la [Babylon.js v6.1.0](https://www.npmjs.com/package/babylonjs/v/6.1.0).




## Acciones y referencias

### Índice

**Documentadas:**

- Establecer fondo de escena
- Crear objeto `Color3` en sus modalidades
- Pasar ángulo de grados a radianes
- Establecer el foco gravitatorio de cámara en `ArcRotateCamera`
- Establecer rotación alpha y beta y traslación radius de cámara en `ArcRotateCamera`
- Limitar el radio de movimiento de cámara por un eje a en `ArcRotateCamera`
- Limitar el radio de movimiento de cámara por un eje b en `ArcRotateCamera`
- Configurar la sensibilidad del zoom de la rueda del mouse en `ArcRotateCamera`

**No documentadas:**

- 

----

### Contenido

##### Establecer fondo de escena

```js
scene.clearColor = new BABYLON.Color3.FromHexString("#66b7d8");
```

##### Crear objeto `Color3` en sus modalidades

Desde RGB:

```js
BABYLON.Color3(255,255,255);
```

Desde notación hexadecimal:

```js
BABYLON.Color3.FromHexString("#FFFFFF");
```


##### Pasar ángulo de grados a radianes

```js
BABYLON.Tools.ToRadians(180);
```

##### Establecer el foco gravitatorio de cámara en `ArcRotateCamera`

```js
camera.setTarget(objeto);
```

##### Establecer rotación alpha y beta y traslación radius de cámara en `ArcRotateCamera`

```js
camara.alpha = BABYLON.Tools.ToRadians(-45); // -45 grados por eje a:
camara.beta = BABYLON.Tools.ToRadians(90); // 90 grados por eje b:
camara.radius = 1; // 1 unidad de distancia según escena de radio:
```

Otro ejemplo.
```js
camara.setTarget(localmente.esfera_de_cabeza);
camara.alpha = BABYLON.Tools.ToRadians(-40);
camara.beta = BABYLON.Tools.ToRadians(75);
camara.radius = 5;
// Sacado de: PaloMan 3D API
```

##### Limitar el radio de movimiento de cámara por un eje a en `ArcRotateCamera`

```js
camera.upperRadiusLimit = 100;
camera.lowerRadiusLimit = 20;
// Sacado de: https://playground.babylonjs.com/#0055NK#219
```

##### Limitar el radio de movimiento de cámara por un eje b en `ArcRotateCamera`

```js
camera.upperBetaLimit = 180;
camera.lowerRadiusLimit = 20;
// Sacado de: https://playground.babylonjs.com/#0055NK#219
```

##### Configurar la sensibilidad del zoom de la rueda del mouse en `ArcRotateCamera`

```js
camera.wheelPrecision = 50;
camera.wheelDeltaPercentage =0.1;
// Sacado de: https://playground.babylonjs.com/#0055NK#219
```





