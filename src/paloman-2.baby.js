const Persona = class {
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
            Object.assign(esfera_de_cabeza.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + configuralmente.altura_de_cabeza,
                z: (configuralmente.z) + 0
            });
            Object.assign(esfera_de_cabeza, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_cabeza")
            });
            Object.assign(localmente, {
                esfera_de_cabeza
            });
            Hacer_esfera_espejo: {
                esfera_de_cabeza.material = utilmente.fabricar_material_para_cabeza("#FFFFFF", "#FFFFFF", "material_de_cabeza");
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
            Object.assign(esfera_de_cerebro.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + configuralmente.altura_de_cabeza,
                z: (configuralmente.z) + 0
            });
            Object.assign(esfera_de_cerebro, {
                material: utilmente.fabricar_material_de_color("#FFFF33", "material_de_esfera_de_cerebro")
            });
            Object.assign(localmente, {
                esfera_de_cerebro
            });
        }
        Crear_cilindro_de_cuello: {
            const cilindro_de_cuello = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_cuello", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_cuello,
                depth: 0.2,
            }, escena);
            Object.assign(cilindro_de_cuello.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + configuralmente.altura_de_cabeza - (configuralmente.largo_de_cuello / 2),
                z: (configuralmente.z) + 0
            });
            Object.assign(cilindro_de_cuello, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_cuello")
            });
            Object.assign(localmente, {
                cilindro_de_cuello
            });
        }
        Crear_esfera_de_cuello: {
            const esfera_de_cuello = BABYLON.MeshBuilder.CreateSphere("esfera_de_cuello", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_cuello.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_cuello.position.y - (configuralmente.largo_de_cuello / 2),
                z: (configuralmente.z) + 0
            });
            Object.assign(esfera_de_cuello, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_cuello")
            });
            Object.assign(localmente, {
                esfera_de_cuello
            });
            Hacer_esfera_espejo: {
                esfera_de_cuello.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cuello");
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
            Object.assign(cilindro_de_espalda.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_cuello.position.y,
                z: (configuralmente.z) + 0
            });
            Object.assign(cilindro_de_espalda, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_espalda")
            });
            Object.assign(localmente, {
                cilindro_de_espalda
            });
            cilindro_de_espalda.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
        }
        Crear_esfera_de_hombro_izquierdo: {
            const esfera_de_hombro_izquierdo = BABYLON.MeshBuilder.CreateSphere("esfera_de_hombro_izquierdo", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_hombro_izquierdo.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_cuello.position.y,
                z: (configuralmente.z) - (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(esfera_de_hombro_izquierdo, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_hombro_izquierdo")
            });
            Object.assign(localmente, {
                esfera_de_hombro_izquierdo
            });
            Hacer_esfera_espejo: {
                esfera_de_hombro_izquierdo.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_hombro_izquierdo");
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
            Object.assign(esfera_de_hombro_derecho.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_cuello.position.y,
                z: (configuralmente.z) + (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(esfera_de_hombro_derecho, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_hombro_derecho")
            });
            Object.assign(localmente, {
                esfera_de_hombro_derecho
            });
            Hacer_esfera_espejo: {
                esfera_de_hombro_derecho.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_hombro_derecho");
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
            Object.assign(cilindro_de_antebrazo_izquierdo.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_hombro_izquierdo.position.y - (configuralmente.largo_de_antebrazo / 2),
                z: (configuralmente.z) - (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(cilindro_de_antebrazo_izquierdo, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_antebrazo_izquierdo")
            });
            Object.assign(localmente, {
                cilindro_de_antebrazo_izquierdo
            });
        }
        Crear_cilindro_de_antebrazo_derecho: {
            const cilindro_de_antebrazo_derecho = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_antebrazo_derecho", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_antebrazo,
                depth: 0.2,
            }, escena);
            Object.assign(cilindro_de_antebrazo_derecho.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_hombro_derecho.position.y - (configuralmente.largo_de_antebrazo / 2),
                z: (configuralmente.z) + (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(cilindro_de_antebrazo_derecho, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_antebrazo_derecho")
            });
            Object.assign(localmente, {
                cilindro_de_antebrazo_derecho
            });
        }
        Crear_esfera_de_codo_izquierdo: {
            const esfera_de_codo_izquierdo = BABYLON.MeshBuilder.CreateSphere("esfera_de_codo_izquierdo", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_codo_izquierdo.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_antebrazo_izquierdo.position.y - (configuralmente.largo_de_antebrazo / 2),
                z: (configuralmente.z) - (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(esfera_de_codo_izquierdo, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_codo_izquierdo")
            });
            Object.assign(localmente, {
                esfera_de_codo_izquierdo
            });
            Hacer_esfera_espejo: {
                esfera_de_codo_izquierdo.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_codo_izquierdo");
            }
        }
        Crear_esfera_de_codo_derecho: {
            const esfera_de_codo_derecho = BABYLON.MeshBuilder.CreateSphere("esfera_de_codo_derecho", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_codo_derecho.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_antebrazo_derecho.position.y - (configuralmente.largo_de_antebrazo / 2),
                z: (configuralmente.z) + (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(esfera_de_codo_derecho, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_codo_derecho")
            });
            Object.assign(localmente, {
                esfera_de_codo_derecho
            });
            Hacer_esfera_espejo: {
                esfera_de_codo_derecho.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_codo_derecho");
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
            Object.assign(cilindro_de_brazo_izquierdo.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_codo_izquierdo.position.y - (configuralmente.largo_de_brazo / 2),
                z: (configuralmente.z) - (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(cilindro_de_brazo_izquierdo, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_brazo_izquierdo")
            });
            Object.assign(localmente, {
                cilindro_de_brazo_izquierdo
            });
        }
        Crear_cilindro_de_brazo_derecho: {
            const cilindro_de_brazo_derecho = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_brazo_derecho", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_brazo,
                depth: 0.2,
            }, escena);
            Object.assign(cilindro_de_brazo_derecho.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_codo_derecho.position.y - (configuralmente.largo_de_brazo / 2),
                z: (configuralmente.z) + (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(cilindro_de_brazo_derecho, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_brazo_derecho")
            });
            Object.assign(localmente, {
                cilindro_de_brazo_derecho
            });
        }
        Crear_esfera_de_mano_izquierda: {
            const esfera_de_mano_izquierda = BABYLON.MeshBuilder.CreateSphere("esfera_de_mano_izquierda", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_mano_izquierda.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_brazo_derecho.position.y - (configuralmente.largo_de_brazo / 2),
                z: (configuralmente.z) - (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(esfera_de_mano_izquierda, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_mano_izquierda")
            });
            Object.assign(localmente, {
                esfera_de_mano_izquierda
            });
            Hacer_esfera_espejo: {
                esfera_de_mano_izquierda.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_mano_derecha");
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
            Object.assign(esfera_de_mano_derecha.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_brazo_derecho.position.y - (configuralmente.largo_de_brazo / 2),
                z: (configuralmente.z) + (configuralmente.largo_de_espalda / 2)
            });
            Object.assign(esfera_de_mano_derecha, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_mano_derecha")
            });
            Object.assign(localmente, {
                esfera_de_mano_derecha
            });
            Hacer_esfera_espejo: {
                esfera_de_mano_derecha.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_mano_derecha");
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
            Object.assign(cilindro_de_columna.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_cuello.position.y - (configuralmente.largo_de_columna / 2),
                z: (configuralmente.z) + 0
            });
            Object.assign(cilindro_de_columna, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_columna")
            });
            Object.assign(localmente, {
                cilindro_de_columna
            });
        }
        Crear_esfera_de_cadera_central: {
            const esfera_de_cadera_central = BABYLON.MeshBuilder.CreateSphere("esfera_de_cadera_central", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_cadera_central.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_columna.position.y - (configuralmente.largo_de_columna / 2),
                z: (configuralmente.z) + 0
            });
            Object.assign(esfera_de_cadera_central, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_central")
            });
            Object.assign(localmente, {
                esfera_de_cadera_central
            });
            Hacer_esfera_espejo: {
                esfera_de_cadera_central.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_central");
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
            Object.assign(cilindro_de_cadera.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_columna.position.y - (configuralmente.largo_de_columna / 2),
                z: (configuralmente.z) + 0
            });
            Object.assign(cilindro_de_cadera, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_cadera")
            });
            Object.assign(localmente, {
                cilindro_de_cadera
            });
            cilindro_de_cadera.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
        }
        Crear_esfera_de_cadera_izquierda: {
            const esfera_de_cadera_izquierda = BABYLON.MeshBuilder.CreateSphere("esfera_de_cadera_izquierda", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_cadera_izquierda.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_cadera.position.y,
                z: (configuralmente.z) + configuralmente.ancho_de_cadera
            });
            Object.assign(esfera_de_cadera_izquierda, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_izquierda")
            });
            Object.assign(localmente, {
                esfera_de_cadera_izquierda
            });
            Hacer_esfera_espejo: {
                esfera_de_cadera_izquierda.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_izquierda");
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
            Object.assign(esfera_de_cadera_derecha.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_cadera.position.y,
                z: (configuralmente.z) - configuralmente.ancho_de_cadera
            });
            Object.assign(esfera_de_cadera_derecha, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_derecha")
            });
            Object.assign(localmente, {
                esfera_de_cadera_derecha
            });
            Hacer_esfera_espejo: {
                esfera_de_cadera_derecha.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_derecha");
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
            Object.assign(cilindro_de_antepierna_izquierda.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_cadera_izquierda.position.y - (configuralmente.largo_de_antepierna / 2),
                z: (configuralmente.z) - configuralmente.ancho_de_cadera
            });
            Object.assign(cilindro_de_antepierna_izquierda, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_antepierna_izquierda")
            });
            Object.assign(localmente, {
                cilindro_de_antepierna_izquierda
            });
        }
        Crear_cilindro_de_antepierna_derecha: {
            const cilindro_de_antepierna_derecha = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_antepierna_derecha", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_antepierna,
                depth: 0.2,
            }, escena);
            Object.assign(cilindro_de_antepierna_derecha.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_cadera_derecha.position.y - (configuralmente.largo_de_antepierna / 2),
                z: (configuralmente.z) + configuralmente.ancho_de_cadera
            });
            Object.assign(cilindro_de_antepierna_derecha, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_antepierna_derecha")
            });
            Object.assign(localmente, {
                cilindro_de_antepierna_derecha
            });
        }
        Crear_esfera_de_rodilla_izquierda: {
            const esfera_de_rodilla_izquierda = BABYLON.MeshBuilder.CreateSphere("esfera_de_rodilla_central", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_rodilla_izquierda.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_antepierna_derecha.position.y - (configuralmente.largo_de_antepierna / 2),
                z: (configuralmente.z) + configuralmente.ancho_de_cadera
            });
            Object.assign(esfera_de_rodilla_izquierda, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_rodilla_izquierda")
            });
            Object.assign(localmente, {
                esfera_de_rodilla_izquierda
            });
            Hacer_esfera_espejo: {
                esfera_de_rodilla_izquierda.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_rodilla_izquierda");
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
            Object.assign(esfera_de_rodilla_derecha.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_antepierna_derecha.position.y - (configuralmente.largo_de_antepierna / 2),
                z: (configuralmente.z) - configuralmente.ancho_de_cadera
            });
            Object.assign(esfera_de_rodilla_derecha, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_rodilla_derecha")
            });
            Object.assign(localmente, {
                esfera_de_rodilla_derecha
            });
            Hacer_esfera_espejo: {
                esfera_de_rodilla_derecha.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_rodilla_derecha");
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
            Object.assign(cilindro_de_pierna_izquierda.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_rodilla_izquierda.position.y - (configuralmente.largo_de_pierna / 2),
                z: (configuralmente.z) - configuralmente.ancho_de_cadera
            });
            Object.assign(cilindro_de_pierna_izquierda, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_pierna_izquierda")
            });
            Object.assign(localmente, {
                cilindro_de_pierna_izquierda
            });
        }
        Crear_cilindro_de_pierna_derecha: {
            const cilindro_de_pierna_derecha = BABYLON.MeshBuilder.CreateCylinder("cilindro_de_pierna_derecha", {
                diameter: configuralmente.ancho_de_palos,
                segments: 32,
                width: 0.4,
                height: configuralmente.largo_de_pierna,
                depth: 0.2,
            }, escena);
            Object.assign(cilindro_de_pierna_derecha.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.esfera_de_rodilla_derecha.position.y - (configuralmente.largo_de_pierna / 2),
                z: (configuralmente.z) + configuralmente.ancho_de_cadera
            });
            Object.assign(cilindro_de_pierna_derecha, {
                material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_pierna_derecha")
            });
            Object.assign(localmente, {
                cilindro_de_pierna_derecha
            });
        }
        Crear_esfera_de_pie_izquierdo: {
            const esfera_de_pie_izquierdo = BABYLON.MeshBuilder.CreateSphere("esfera_de_pie_izquierdo", {
                diameter: configuralmente.ancho_de_bolas,
                segments: 32,
                width: 0.4,
                height: 0.1,
                depth: 0.2,
            }, escena);
            Object.assign(esfera_de_pie_izquierdo.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_pierna_izquierda.position.y - (configuralmente.largo_de_pierna / 2),
                z: (configuralmente.z) + configuralmente.ancho_de_cadera
            });
            Object.assign(esfera_de_pie_izquierdo, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_pie_izquierdo")
            });
            Object.assign(localmente, {
                esfera_de_pie_izquierdo
            });
            Hacer_esfera_espejo: {
                esfera_de_pie_izquierdo.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_pie_izquierdo");
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
            Object.assign(esfera_de_pie_derecho.position, {
                x: (configuralmente.x) + 0,
                y: (configuralmente.y) + localmente.cilindro_de_pierna_derecha.position.y - (configuralmente.largo_de_pierna / 2),
                z: (configuralmente.z) - configuralmente.ancho_de_cadera
            });
            Object.assign(esfera_de_pie_derecho, {
                material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_esfera_de_pie_derecho")
            });
            Object.assign(localmente, {
                esfera_de_pie_derecho
            });
            Hacer_esfera_espejo: {
                esfera_de_pie_derecho.material = utilmente.fabricar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_pie_derecho");
            }
        }
        Object.assign(this, {
            locales: localmente,
            configuraciones: configuralmente
        });
    }
};

const createScene = function () {
    const { Color3 } = BABYLON;
    const escenicamente = {};
    let escena = undefined;
    let camara = undefined;
    let luz = undefined;
    let persona = undefined;
    let persona2 = undefined;
    let persona3 = undefined;
    let persona4 = undefined;
    Crear_escena: {
        escena = new BABYLON.Scene(engine);
        escena.clearColor = new BABYLON.Color3.FromHexString("#66b7d8");
        const hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/environment.dds", escena);
        Object.assign(escenicamente, { escena });
    }
    Crear_camara: {
        camara = new BABYLON.ArcRotateCamera("camara_principal", 0, 0, 10, new BABYLON.Vector3(0, 10, 0), escena);
        camara.attachControl(canvas, true);
        camara.wheelDeltaPercentage = 0.05;
        Object.assign(escenicamente, { camara });
    }
    Crear_luz: {
        luz = new BABYLON.HemisphericLight("luz", new BABYLON.Vector3(0, 0, 0), escena);
        Object.assign(luz, {
            intensity: 0.7
        });
        Object.assign(escenicamente, { luz });
    }
    Crear_suelo: {
        const suelo = BABYLON.MeshBuilder.CreateGround("suelo", {
            width: 5,
            height: 100
        }, escena);
        Object.assign(suelo, {
            material: Persona.utilidades_por_defecto.fabricar_material_de_color("#00BA41", "material_de_suelo")
        });
        Object.assign(escenicamente, { suelo });
    }
    Crear_personas: {
        persona = new Persona({}, {}, escena, camara, luz);
        persona2 = new Persona({ z: 1 }, {}, escena, camara, luz);
        persona3 = new Persona({ z: 2 }, {}, escena, camara, luz);
        persona4 = new Persona({ z: 3 }, {}, escena, camara, luz);
        Object.assign(escenicamente, { persona, persona2, persona3, persona4 });
    }
    Configuraciones_finales: {
        Configuraciones_de_camara: {
            camara.setTarget(persona.locales.esfera_de_cabeza);
            camara.alpha = BABYLON.Tools.ToRadians(-40);
            camara.beta = BABYLON.Tools.ToRadians(75);
            camara.radius = 7;
        }
    }
    return escena;
};