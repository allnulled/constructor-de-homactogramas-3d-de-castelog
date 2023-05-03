- [ ] El ejemplo baby 3 tiene consistencia de movimiento en el brazo izquierdo (aunque falta la mano).
  - [ ] Hacer lo mismo para todos los nodos/palos del Paloman.


- [ ] El ejemplo 4 tendría que tener ya la API de movimientos de bajo nivel propia.
  - [ ] Preparar una API igual a la de Paloman 2D para:
    - [ ] trasladarse
    - [ ] posicionar y
    - [ ] rotar


```
Escena
Objeto_de_escena
  + aprender
  + olvidar
  + rotar...
  + posicionar...
Luz extiende Objeto_de_escena
  + enfocar_a (setTarget)
Camara extiende Objeto_de_escena
  + enfocar_a (setTarget)
Persona extiende Objeto_de_escena
  + decir
  + caminar
  + ...
Objeto extiende Objeto_de_escena
```