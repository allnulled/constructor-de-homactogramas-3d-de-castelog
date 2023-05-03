window.Homactografo3D.clase.Persona.Estandar = class {
    constructor(posicion, opciones, escena, camara, luz) {
        this.escena = escena;
        this.camara = camara;
        this.luz = luz;
        this.opciones = opciones;
        this.utilidades = Object.assign({}, this.constructor.utilidades_por_defecto);
        this.configuraciones = Object.assign({}, this.constructor.configuraciones_por_defecto, this.opciones.configuraciones || {});
        this.locales = Object.assign({}, this.constructor.locales_por_defecto, this.opciones.locales || {});
        this.posicion = Object.assign({}, posicion);
        Object.assign(this.configuraciones, this.posicion);
        this.moverse();
    }
    static get configuraciones_por_defecto() {
        const configuralmente = {};
        Object.assign(configuralmente, {
            ancho_de_espalda: 0.5
        });
        Object.assign(configuralmente, {
            x: 0,
            y: 0,
            z: 0,
            anchura: 0.8,
            ancho_de_cabeza: configuralmente.ancho_de_espalda / 4 * 3,
            ancho_de_bolas: 0.08,
            ancho_de_palos: 0.02,
            ancho_de_cadera: (configuralmente.ancho_de_espalda / 4 * 3) / 2,
            largo_de_cuello: 0.3,
            largo_de_espalda: configuralmente.ancho_de_espalda,
            largo_de_columna: 0.7,
            largo_de_antebrazo: 0.5,
            largo_de_brazo: 0.4,
            largo_de_antepierna: 0.7,
            largo_de_pierna: 0.6,
            angulo_de_hombro_izquierdo: 0, // se aplica en antebrazo izquierdo
            angulo_de_hombro_derecho: 0, // se aplica en antebrazo derecho
            angulo_de_codo_izquierdo: 0, // se aplica en brazo izquierdo
            angulo_de_codo_derecho: 0, // se aplica en brazo derecho
            angulo_de_pierna_izquierda: 0, // se aplica en antepierna izquierda
            angulo_de_pierna_derecha: 0, // se aplica en antepierna derecha
            angulo_de_rodilla_izquierda: 0, // se aplica en pierna izquierda
            angulo_de_rodilla_derecha: 0, // se aplica en pierna derecha
        });
        return configuralmente;
    }
    static get locales_por_defecto() {
        return {};
    }
    static get utilidades_por_defecto() {
        const utilmente = {};
        const { escena, camara, luz } = this;
        Object.assign(utilmente, { escena, camara, luz });
        Object.assign(utilmente, {
            fabricar_material_para_cabeza: function (hex1, hex2, id) {
                return utilmente.fabricar_material_de_color(hex1, id);
            },
            fabricar_material_traslucido_de_color_2: function (hex1, hex2, id) {
                return utilmente.fabricar_material_de_color(hex1, id);
            },
            fabricar_material_traslucido_de_color_3: function (hex1, hex2, id) {
                const material_traslucido = new BABYLON.PBRMaterial("pbr", escena);
                material_traslucido.metallic = 0.5;
                material_traslucido.roughness = 0.5;
                material_traslucido.subSurface.isRefractionEnabled = true;
                material_traslucido.subSurface.indexOfRefraction = 0;
                return material_traslucido;
            },
            fabricar_material_de_color: function (hex, id) {
                const suelo_material = new BABYLON.StandardMaterial(id, escena);
                return Object.assign(suelo_material, utilmente.fabricar_propiedades_de_color(hex));
            },
            fabricar_propiedades_de_color: function (hex) {
                return Object.assign({}, {
                    diffuseColor: BABYLON.Color3.FromHexString(hex),
                    specularColor: BABYLON.Color3.FromHexString(hex),
                    emissiveColor: BABYLON.Color3.FromHexString(hex),
                    ambientColor: BABYLON.Color3.FromHexString(hex),
                });
            }
        });
        return utilmente;
    }
    pintarse() {
        this.moverse();
    }
    moverse() {
        const { escena, camara, luz } = this;
        const configuralmente = this.configuraciones;
        const localmente = this.locales;
        const utilmente = this.utilidades;
        Calcular_altura_de_la_cabeza_relativa: {
            Object.assign(configuralmente, {
                altura_de_cabeza: 0
                    + (configuralmente.ancho_de_cabeza / 2)
                    + configuralmente.largo_de_cuello - (configuralmente.ancho_de_cabeza / 2)
                    + configuralmente.largo_de_columna
                    + configuralmente.largo_de_antepierna
                    + configuralmente.largo_de_pierna
                    + (configuralmente.ancho_de_bolas / 2),
            });
        }
        Crear_esfera_de_cabeza: {
            const esfera_de_cabeza = BABYLON.MeshBuilder.CreateSphere("esfera_de_cabeza", {
                diameter: configuralmente.ancho_de_cabeza,
                segments: 32
            }, escena);
            Asignar_consistencia_motriz: {
                // @OK así está bien en la cabeza.
            }
            Asignar_posicion: {
                Object.assign(esfera_de_cabeza.position, {
                    x: (configuralmente.x) + 0,
                    y: (configuralmente.y) + configuralmente.altura_de_cabeza,
                    z: (configuralmente.z) + 0
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_cabeza, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_cabeza")
                });
                Object.assign(esfera_de_cabeza, {
                    material: utilmente.fabricar_material_para_cabeza("#FFFFFF", "#FFFFFF", "material_de_cabeza")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_cabeza
                });
            }
        }
        Crear_esfera_de_cerebro: {
            const esfera_de_cerebro = BABYLON.MeshBuilder.CreateSphere("esfera_de_cerebro", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: configuralmente.ancho_de_bolas,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_cerebro, {
                    parent: localmente.esfera_de_cabeza
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_cerebro.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_cerebro, {
                    material: utilmente.fabricar_material_de_color("#FFFF33", "material_de_esfera_de_cerebro")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_cerebro
                });
            }
        }
        Crear_cilindro_de_cuello: {
            const cilindro_de_cuello = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_cuello", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_cuello,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_cuello, {
                    parent: localmente.esfera_de_cerebro
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_cuello.position, {
                    x: 0,
                    y: 0 - (configuralmente.ancho_de_cabeza / 2),
                    z: 0
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_cuello, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_cuello")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_cuello
                });
            }
        }
        Crear_esfera_de_cuello: {
            const esfera_de_cuello = BABYLON.MeshBuilder.CreateSphere("esfera_de_cuello", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_cuello, {
                    parent: localmente.cilindro_de_cuello
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_cuello.position, {
                    x: 0,
                    y: 0 - (configuralmente.largo_de_cuello / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_cuello, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_cuello")
                });
                Object.assign(esfera_de_cuello, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cuello")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_cuello
                });
            }
        }
        Crear_cilindro_de_espalda: {
            const cilindro_de_espalda = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_espalda", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_espalda,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_espalda, {
                    parent: localmente.esfera_de_cuello
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_espalda.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                });
                cilindro_de_espalda.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
            }
            Asignar_material: {
                Object.assign(cilindro_de_espalda, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_espalda")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_espalda
                });
            }
        }
        Crear_esfera_de_hombro_izquierdo: {
            const esfera_de_hombro_izquierdo = BABYLON.MeshBuilder.CreateSphere("esfera_de_hombro_izquierdo", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_hombro_izquierdo, {
                    parent: localmente.cilindro_de_espalda
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_hombro_izquierdo.position, {
                    x: 0,
                    y: 0 - (configuralmente.ancho_de_espalda / 2),
                    z: 0,
                });
                esfera_de_hombro_izquierdo.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
                esfera_de_hombro_izquierdo.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.LOCAL);
            }
            Asignar_material: {
                Object.assign(esfera_de_hombro_izquierdo, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_hombro_izquierdo")
                });
                Object.assign(esfera_de_hombro_izquierdo, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#CCCCCC", "#CCCCCC", "material_de_hombro_izquierdo")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_hombro_izquierdo
                });
            }

        }
        Crear_esfera_de_hombro_derecho: {
            const esfera_de_hombro_derecho = BABYLON.MeshBuilder.CreateSphere("esfera_de_hombro_derecho", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_hombro_derecho, {
                    parent: localmente.cilindro_de_espalda
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_hombro_derecho.position, {
                    x: 0,
                    y: 0 + (configuralmente.ancho_de_espalda / 2),
                    z: 0,
                });
                esfera_de_hombro_derecho.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
                esfera_de_hombro_derecho.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.LOCAL);
            }
            Asignar_material: {
                Object.assign(esfera_de_hombro_derecho, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_hombro_derecho")
                });
                Object.assign(esfera_de_hombro_derecho, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_hombro_derecho")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_hombro_derecho
                });
            }
        }
        Crear_cilindro_de_antebrazo_izquierdo: {
            const cilindro_de_antebrazo_izquierdo = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_antebrazo_izquierdo", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_antebrazo,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_antebrazo_izquierdo, {
                    parent: localmente.esfera_de_hombro_izquierdo
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_antebrazo_izquierdo.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_antebrazo / 2),
                    z: 0
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_antebrazo_izquierdo, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_antebrazo_izquierdo")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_antebrazo_izquierdo
                });
            }
        }
        Crear_cilindro_de_antebrazo_derecho: {
            const cilindro_de_antebrazo_derecho = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_antebrazo_derecho", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_antebrazo,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_antebrazo_derecho, {
                    parent: localmente.esfera_de_hombro_derecho
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_antebrazo_derecho.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_antebrazo / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_antebrazo_derecho, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_antebrazo_derecho")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_antebrazo_derecho
                });
            }
        }
        Crear_esfera_de_codo_izquierdo: {
            const esfera_de_codo_izquierdo = BABYLON.MeshBuilder.CreateSphere("esfera_de_codo_izquierdo", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_codo_izquierdo, {
                    parent: localmente.cilindro_de_antebrazo_izquierdo
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_codo_izquierdo.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_antebrazo / 2),
                    z: 0
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_codo_izquierdo, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_codo_izquierdo")
                });
                Object.assign(esfera_de_codo_izquierdo, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#CCCCCC", "#CCCCCC", "material_de_codo_izquierdo")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_codo_izquierdo
                });
            }
            break Crear_esfera_de_codo_izquierdo;
            // Ejemplo de movimiento:
            esfera_de_codo_izquierdo.rotate(BABYLON.Axis.X, BABYLON.Tools.ToRadians(180), BABYLON.Space.WORLD);
            esfera_de_codo_izquierdo.rotate(BABYLON.Axis.Z, BABYLON.Tools.ToRadians(90), BABYLON.Space.WORLD);
            esfera_de_codo_izquierdo.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(-90), BABYLON.Space.WORLD);
        }
        Crear_esfera_de_codo_derecho: {
            const esfera_de_codo_derecho = BABYLON.MeshBuilder.CreateSphere("esfera_de_codo_derecho", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_codo_derecho, {
                    parent: localmente.cilindro_de_antebrazo_derecho
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_codo_derecho.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_antebrazo / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_codo_derecho, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_codo_derecho")
                });
                Object.assign(esfera_de_codo_derecho, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_codo_derecho")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_codo_derecho
                });
            }
        }
        Crear_cilindro_de_brazo_izquierdo: {
            const cilindro_de_brazo_izquierdo = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_brazo_izquierdo", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_brazo,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_brazo_izquierdo, {
                    parent: localmente.esfera_de_codo_izquierdo
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_brazo_izquierdo.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_brazo / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_brazo_izquierdo, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_brazo_izquierdo")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_brazo_izquierdo
                });
            }
        }
        Crear_cilindro_de_brazo_derecho: {
            const cilindro_de_brazo_derecho = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_brazo_derecho", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_brazo,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_brazo_derecho, {
                    parent: localmente.esfera_de_codo_derecho
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_brazo_derecho.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_brazo / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_brazo_derecho, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_brazo_derecho")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_brazo_derecho
                });
            }
        }
        Crear_esfera_de_mano_izquierda: {
            const esfera_de_mano_izquierda = BABYLON.MeshBuilder.CreateSphere("esfera_de_mano_izquierda", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_mano_izquierda, {
                    parent: localmente.cilindro_de_brazo_izquierdo
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_mano_izquierda.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_brazo / 2),
                    z: 0
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_mano_izquierda, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_mano_izquierda")
                });
                Object.assign(esfera_de_mano_izquierda, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_mano_derecha")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_mano_izquierda
                });
            }
        }
        Crear_esfera_de_mano_derecha: {
            const esfera_de_mano_derecha = BABYLON.MeshBuilder.CreateSphere("esfera_de_mano_derecha", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_mano_derecha, {
                    parent: localmente.cilindro_de_brazo_derecho
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_mano_derecha.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_brazo / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_mano_derecha, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_mano_derecha")
                });
                Object.assign(esfera_de_mano_derecha, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_mano_derecha")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_mano_derecha
                });
            }
        }
        Crear_cilindro_de_columna: {
            const cilindro_de_columna = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_columna", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_columna,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_columna, {
                    parent: localmente.esfera_de_cuello
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_columna.position, {
                    x: 0,
                    y: 0 - (configuralmente.largo_de_columna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_columna, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_columna")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_columna
                });
            }
        }
        Crear_esfera_de_cadera_central: {
            const esfera_de_cadera_central = BABYLON.MeshBuilder.CreateSphere("esfera_de_cadera_central", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_cadera_central, {
                    parent: localmente.cilindro_de_columna
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_cadera_central.position, {
                    x: 0,
                    y: 0 - (configuralmente.largo_de_columna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_cadera_central, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_central")
                });
                Object.assign(esfera_de_cadera_central, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_central")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_cadera_central
                });
            }
        }
        Crear_cilindro_de_cadera: {
            const cilindro_de_cadera = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_cadera", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: 0.4,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_cadera, {
                    parent: localmente.esfera_de_cadera_central
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_cadera.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                });
                cilindro_de_cadera.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
            }
            Asignar_material: {
                Object.assign(cilindro_de_cadera, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_cadera")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_cadera
                });
            }
        }
        Crear_esfera_de_cadera_izquierda: {
            const esfera_de_cadera_izquierda = BABYLON.MeshBuilder.CreateSphere("esfera_de_cadera_izquierda", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_cadera_izquierda, {
                    parent: localmente.cilindro_de_cadera
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_cadera_izquierda.position, {
                    x: 0,
                    y: 0 - configuralmente.ancho_de_cadera,
                    z: 0,
                });
                esfera_de_cadera_izquierda.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
                esfera_de_cadera_izquierda.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.LOCAL);
            }
            Asignar_material: {
                Object.assign(esfera_de_cadera_izquierda, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_izquierda")
                });
                Object.assign(esfera_de_cadera_izquierda, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_izquierda")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_cadera_izquierda
                });
            }
        }
        Crear_esfera_de_cadera_derecha: {
            const esfera_de_cadera_derecha = BABYLON.MeshBuilder.CreateSphere("esfera_de_cadera_derecha", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_cadera_derecha, {
                    parent: localmente.cilindro_de_cadera
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_cadera_derecha.position, {
                    x: 0,
                    y: 0 + configuralmente.ancho_de_cadera,
                    z: 0,
                });
                esfera_de_cadera_derecha.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
                esfera_de_cadera_derecha.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.LOCAL);
            }
            Asignar_material: {
                Object.assign(esfera_de_cadera_derecha, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_derecha")
                });
                Object.assign(esfera_de_cadera_derecha, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_derecha")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_cadera_derecha
                });
            }
        }
        Crear_cilindro_de_antepierna_izquierda: {
            const cilindro_de_antepierna_izquierda = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_antepierna_izquierda", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_antepierna,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_antepierna_izquierda, {
                    parent: localmente.esfera_de_cadera_izquierda
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_antepierna_izquierda.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_antepierna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_antepierna_izquierda, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_antepierna_izquierda")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_antepierna_izquierda
                });
            }
        }
        Crear_cilindro_de_antepierna_derecha: {
            const cilindro_de_antepierna_derecha = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_antepierna_derecha", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_antepierna,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_antepierna_derecha, {
                    parent: localmente.esfera_de_cadera_derecha
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_antepierna_derecha.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_antepierna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_antepierna_derecha, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_antepierna_derecha")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_antepierna_derecha
                });
            }
        }
        Crear_esfera_de_rodilla_izquierda: {
            const esfera_de_rodilla_izquierda = BABYLON.MeshBuilder.CreateSphere("esfera_de_rodilla_central", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_rodilla_izquierda, {
                    parent: localmente.cilindro_de_antepierna_izquierda
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_rodilla_izquierda.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_antepierna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_rodilla_izquierda, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_rodilla_izquierda")
                });
                Object.assign(esfera_de_rodilla_izquierda, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_rodilla_izquierda")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_rodilla_izquierda
                });
            }
        }
        Crear_esfera_de_rodilla_derecha: {
            const esfera_de_rodilla_derecha = BABYLON.MeshBuilder.CreateSphere("esfera_de_rodilla_derecha", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_rodilla_derecha, {
                    parent: localmente.cilindro_de_antepierna_derecha
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_rodilla_derecha.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_antepierna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_rodilla_derecha, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_rodilla_derecha")
                });
                Object.assign(esfera_de_rodilla_derecha, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_rodilla_derecha")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_rodilla_derecha
                });
            }
        }
        Crear_cilindro_de_pierna_izquierda: {
            const cilindro_de_pierna_izquierda = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_pierna_izquierda", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_pierna,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_pierna_izquierda, {
                    parent: localmente.esfera_de_rodilla_izquierda
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_pierna_izquierda.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_pierna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_pierna_izquierda, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_pierna_izquierda")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_pierna_izquierda
                });
            }
        }
        Crear_cilindro_de_pierna_derecha: {
            const cilindro_de_pierna_derecha = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_pierna_derecha", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_pierna,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(cilindro_de_pierna_derecha, {
                    parent: localmente.esfera_de_rodilla_derecha
                });
            }
            Asignar_posicion: {
                Object.assign(cilindro_de_pierna_derecha.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_pierna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(cilindro_de_pierna_derecha, {
                    material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_pierna_derecha")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    cilindro_de_pierna_derecha
                });
            }
        }
        Crear_esfera_de_pie_izquierdo: {
            const esfera_de_pie_izquierdo = BABYLON.MeshBuilder.CreateSphere("esfera_de_pie_izquierdo", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_pie_izquierdo, {
                    parent: localmente.cilindro_de_pierna_izquierda
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_pie_izquierdo.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_pierna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_pie_izquierdo, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_pie_izquierdo")
                });
                Object.assign(esfera_de_pie_izquierdo, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_pie_izquierdo")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_pie_izquierdo
                });
            }
        }
        Crear_esfera_de_pie_derecho: {
            const esfera_de_pie_derecho = BABYLON.MeshBuilder.CreateSphere("esfera_de_pie_derecho", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Asignar_consistencia_motriz: {
                Object.assign(esfera_de_pie_derecho, {
                    parent: localmente.cilindro_de_pierna_derecha
                });
            }
            Asignar_posicion: {
                Object.assign(esfera_de_pie_derecho.position, {
                    x: 0,
                    y: 0 + (configuralmente.largo_de_pierna / 2),
                    z: 0,
                });
            }
            Asignar_material: {
                Object.assign(esfera_de_pie_derecho, {
                    material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_pie_derecho")
                });
                Object.assign(esfera_de_pie_derecho, {
                    material: utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_pie_derecho")
                });
            }
            Exportar_localmente: {
                Object.assign(localmente, {
                    esfera_de_pie_derecho
                });
            }
        }
        Object.assign(this, {
            locales: localmente,
            configuraciones: configuralmente
        });
    }
};