
// 1. Utilidades internas
const Utilidades = {
    aplicar_rotacion: function (parametros) {
        const { persona, parte, vector, tiempo = 0 } = parametros;
        const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, vector);
        persona.locales[parte].rotate(BABYLON.Axis.X, BABYLON.Tools.ToRadians(punto_3d.x), BABYLON.Space.LOCAL);
        persona.locales[parte].rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(punto_3d.y), BABYLON.Space.LOCAL);
        persona.locales[parte].rotate(BABYLON.Axis.Z, BABYLON.Tools.ToRadians(punto_3d.z), BABYLON.Space.LOCAL);
        return new Promise(function (ok) {
            setTimeout(function () {
                ok();
            }, tiempo);
        });
    }
};
// 2. Extensor de API de movimientos de Bajo Nivel de la API de Paloman:
const Extender_con_api_de_movimientos_de_bajo_nivel_de_paloman = function (persona) {
    // 1. Objeto con todas las factories:
    const factoria = {
        de_aprender: (persona) => (punto_3d_args, tiempo = 1000) => {
            // @POR-HACER...
        },
        de_olvidar: (persona) => (punto_3d_args, tiempo = 1000) => {
            // @POR-HACER...
        },
        de_coger: (persona) => (punto_3d_args, tiempo = 1000) => {
            // @POR-HACER...
        },
        de_dejar: (persona) => (punto_3d_args, tiempo = 1000) => {
            // @POR-HACER...
        },
        de_decir: (persona) => (punto_3d_args, tiempo = 1000) => {
            // @POR-HACER...
        },
        de_imaginar: (persona) => (punto_3d_args, tiempo = 1000) => {
            // @POR-HACER...
        },
        de_restablecer: (persona) => (punto_3d_args, tiempo = 1000) => {
            // @POR-HACER...
        },
        de_desaparecer: (persona) => (punto_3d_args, tiempo = 1000) => {
            // @POR-HACER...
        },
        // Ok:
        de_rotar_eje: (persona) => (punto_3d_args, tiempo = 1000) => Utilidades.aplicar_rotacion({
            persona,
            parte: "esfera_de_cabeza",
            vector: punto_3d_args,
            duracion: tiempo
        }),
        // Por revisar:
        de_rotar_cuello: (persona) => (punto_3d_args, tiempo = 1000) => Utilidades.aplicar_rotacion({
            persona,
            parte: "esfera_de_cuello",
            vector: punto_3d_args,
            duracion: tiempo
        }),
        // Ok:
        de_rotar_hombro_i: (persona) => (punto_3d_args, tiempo = 1000) => Utilidades.aplicar_rotacion({
            persona,
            parte: "esfera_de_hombro_i",
            vector: punto_3d_args,
            duracion: tiempo
        }),
        de_rotar_hombro_d: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_rotar_hombro_d");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_rotar_codo_i: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_rotar_codo_i");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_rotar_codo_d: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_rotar_codo_d");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_pierna_codo_i: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_pierna_codo_i");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_pierna_codo_d: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_pierna_codo_d");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_rodilla_codo_i: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_rodilla_codo_i");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_rodilla_codo_d: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_rodilla_codo_d");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_eje_x: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_eje_x");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_eje_y: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_eje_y");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_eje_z: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_eje_z");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_cuello: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_cuello");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_hombro_i: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_hombro_i");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_hombro_d: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_hombro_d");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_codo_i: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_codo_i");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_codo_d: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_codo_d");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_pierna_i: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_pierna_i");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_pierna_d: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_pierna_d");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_rodilla_i: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_rodilla_i");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
        de_posicionar_rodilla_d: function (persona) {
            return function (punto_3d_arg, tiempo = 1000) {
                const punto_3d = Object.assign({}, { x: 0, y: 0, z: 0 }, punto_3d_arg);
                console.log("de_posicionar_rodilla_d");
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                // @TODO: realizar operación tridimensional aquí.
                return new Promise(function (ok) {
                    setTimeout(function () {
                        ok();
                    }, tiempo);
                });
            };
        },
    };
    // 2. Proceso de asignación de API de Movimientos de Bajo Nivel de Paloman 3D API:
    Object.assign(persona, {
        aprender: factoria.de_aprender(persona),
        olvidar: factoria.de_olvidar(persona),
        coger: factoria.de_coger(persona),
        dejar: factoria.de_dejar(persona),
        decir: factoria.de_decir(persona),
        imaginar: factoria.de_imaginar(persona),
        restablecer: factoria.de_restablecer(persona),
        desaparecer: factoria.de_desaparecer(persona),
        rotar: {
            eje: factoria.de_rotar_eje(persona),
            cuello: factoria.de_rotar_cuello(persona),
            hombro: {
                i: factoria.de_rotar_hombro_i(persona),
                d: factoria.de_rotar_hombro_d(persona),
            },
            codo: {
                i: factoria.de_rotar_codo_i(persona),
                d: factoria.de_rotar_codo_d(persona),
            },
            pierna: {
                i: factoria.de_pierna_codo_i(persona),
                d: factoria.de_pierna_codo_d(persona),
            },
            rodilla: {
                i: factoria.de_rodilla_codo_i(persona),
                d: factoria.de_rodilla_codo_d(persona),
            }
        },
        posicionar: {
            eje: {
                x: factoria.de_posicionar_eje_x(persona),
                y: factoria.de_posicionar_eje_y(persona),
                z: factoria.de_posicionar_eje_z(persona),
            },
            cuello: factoria.de_posicionar_cuello(persona),
            hombro: {
                i: factoria.de_posicionar_hombro_i(persona),
                d: factoria.de_posicionar_hombro_d(persona),
            },
            codo: {
                i: factoria.de_posicionar_codo_i(persona),
                d: factoria.de_posicionar_codo_d(persona),
            },
            pierna: {
                i: factoria.de_posicionar_pierna_i(persona),
                d: factoria.de_posicionar_pierna_d(persona),
            },
            rodilla: {
                i: factoria.de_posicionar_rodilla_i(persona),
                d: factoria.de_posicionar_rodilla_d(persona),
            }
        }
    });
}

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
        Extender_con_api_de_movimientos_de_bajo_nivel_de_paloman(this);
        this.moverse();
    }
    static get configuraciones_por_defecto() {
        const configuralmente = {};
        // Configuraciones: primera ola.
        Object.assign(configuralmente, {
            ancho_de_espalda: 0.5
        });
        // Configuraciones: segunda ola.
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
        // Utilidades: primera ola.
        Object.assign(utilmente, { escena, camara, luz });
        // Utilidades: segunda ola.
        Object.assign(utilmente, {
            factoriar_material_para_cabeza: function (hex1, hex2, id) {
                return utilmente.factoriar_material_de_color(hex1, id);
            },
            factoriar_material_traslucido_de_color_2: function (hex1, hex2, id) {
                return utilmente.factoriar_material_de_color(hex1, id);
            },
            factoriar_material_traslucido_de_color_3: function (hex1, hex2, id) {
                const material_traslucido = new BABYLON.PBRMaterial("pbr", escena);
                material_traslucido.metallic = 0.5;
                material_traslucido.roughness = 0.5;
                material_traslucido.subSurface.isRefractionEnabled = true;
                material_traslucido.subSurface.indexOfRefraction = 0;
                return material_traslucido;
            },
            factoriar_material_de_color: function (hex, id) {
                const suelo_material = new BABYLON.StandardMaterial(id, escena);
                return Object.assign(suelo_material, utilmente.factoriar_propiedades_de_color(hex));
            },
            factoriar_propiedades_de_color: function (hex) {
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
        // Este método en esta API no está pensado para llamarlo como usuario.
        // En Babylon.js, en principio, delegamos totalmente el control del pintado,
        // cosa que en la versión de Paloman 2D primera, no ocurre.
        // Por tanto, no hay llamada al render, sólo se llama a actualizar a los puntos.
        // Además, este método, en esta API 3D está pensado solo para llamarse 1 vez,
        // y se hace automáticamente en el constructor.
        this.moverse();
    }
    moverse() {
        // Este método en esta API no está pensado para llamarlo como usuario.
        // Es de uso interno, igual que `pintarse`.
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_cabeza")
                });
                Object.assign(esfera_de_cabeza, {
                    material: utilmente.factoriar_material_para_cabeza("#FFFFFF", "#FFFFFF", "material_de_cabeza")
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
                    material: utilmente.factoriar_material_de_color("#FFFF33", "material_de_esfera_de_cerebro")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_cuello")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_cuello")
                });
                Object.assign(esfera_de_cuello, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cuello")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_espalda")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_hombro_izquierdo")
                });
                Object.assign(esfera_de_hombro_izquierdo, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#CCCCCC", "#CCCCCC", "material_de_hombro_izquierdo")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_hombro_derecho")
                });
                Object.assign(esfera_de_hombro_derecho, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_hombro_derecho")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_antebrazo_izquierdo")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_antebrazo_derecho")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_codo_izquierdo")
                });
                Object.assign(esfera_de_codo_izquierdo, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#CCCCCC", "#CCCCCC", "material_de_codo_izquierdo")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_codo_derecho")
                });
                Object.assign(esfera_de_codo_derecho, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_codo_derecho")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_brazo_izquierdo")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_brazo_derecho")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_mano_izquierda")
                });
                Object.assign(esfera_de_mano_izquierda, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_mano_derecha")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_mano_derecha")
                });
                Object.assign(esfera_de_mano_derecha, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_mano_derecha")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_columna")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_central")
                });
                Object.assign(esfera_de_cadera_central, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_central")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_cadera")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_izquierda")
                });
                Object.assign(esfera_de_cadera_izquierda, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_izquierda")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_cadera_derecha")
                });
                Object.assign(esfera_de_cadera_derecha, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_cadera_derecha")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_antepierna_izquierda")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_antepierna_derecha")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_rodilla_izquierda")
                });
                Object.assign(esfera_de_rodilla_izquierda, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_rodilla_izquierda")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_rodilla_derecha")
                });
                Object.assign(esfera_de_rodilla_derecha, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_rodilla_derecha")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_pierna_izquierda")
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
                    material: utilmente.factoriar_material_de_color("#333333", "material_de_cilindro_de_pierna_derecha")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_pie_izquierdo")
                });
                Object.assign(esfera_de_pie_izquierdo, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_pie_izquierdo")
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
                    material: utilmente.factoriar_material_de_color("#CCCCCC", "material_de_esfera_de_pie_derecho")
                });
                Object.assign(esfera_de_pie_derecho, {
                    material: utilmente.factoriar_material_traslucido_de_color_2("#FFFFFF", "#FFFFFF", "material_de_pie_derecho")
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
            material: Persona.utilidades_por_defecto.factoriar_material_de_color("#00BA41", "material_de_suelo")
        });
        Object.assign(escenicamente, { suelo });
    }
    Crear_personas: {
        persona = new Persona({}, {}, escena, camara, luz);
        persona2 = new Persona({ z: 3 }, {}, escena, camara, luz);
        persona3 = new Persona({ z: 6 }, {}, escena, camara, luz);
        persona4 = new Persona({ z: 9 }, {}, escena, camara, luz);
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
    Test_temporal: {
        (async function () {
            // Ejemplos de movimientos de bajo nivel:
            // persona.rotar.eje({ x: 45, z: 45, y: 45 });
            persona.rotar.cuello({ x: 0, z: 10, y: 0 });
        })();
    }
    return escena;
};