(function(builder) {
    window.Homactografo3D = builder();
    window.Homactografo = Homactografo3D;
})(function () {

    class Utilidades {
        static filtros_de_traza() {
            return [
                // "Persona"
            ];
        }
        static tracear(id, argz, ...args) {
            //return;
            const filtros_de_traza = this.filtros_de_traza();
            let pasa_filtros = true;
            Pasar_filtros:
            for (let i = 0; i < filtros_de_traza.length; i++) {
                const filtro_de_traza = filtros_de_traza[i];
                pasa_filtros = id.indexOf(filtro_de_traza) !== -1;
                if (pasa_filtros) break Pasar_filtros;
            }
            if (!pasa_filtros) return;
            console.log("[TRACE] " + id, Array.from(argz).length);
        }
        static extraer_de_parametros(parametros, clave, valor_por_defecto = undefined) {
            Utilidades.tracear("Utilidades.extraer_de_parametros", arguments, this);
            if (!(clave in parametros)) return valor_por_defecto;
            const parametro = parametros[clave];
            return parametro ? parametro : valor_por_defecto;
        }
        static extraer_como_vector(arg) {
            Utilidades.tracear("Utilidades.extraer_como_vector", arguments, this);
            return Object.assign({}, { x: 0, y: 0, z: 0 }, arg);
        }
        static generar_color(color) {
            if(Array.isArray(color) && color.length > 2) {
                return new BABYLON.Color3(color[0], color[1], color[2]);
            } else if(typeof color === "string") {
                return new BABYLON.Color3.FromHexString(color);
            } else throw new Error("Formato de color no soportado: " + typeof color);
        }
    }

    class Escena_estandar {
        constructor(homactografo, id, parametros = {}) {
            Utilidades.tracear("Escena_estandar.constructor", arguments, this, arguments, this);
            this.id = id;
            this.homactografo = homactografo;
            this.parametros = parametros;
            this.esta_bucle_inyectado = false;
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Escena_estandar.prepararse", arguments, this);
            const homactografo = this.homactografo;
            const parametros = this.parametros;
            this.$scene = new BABYLON.Scene(homactografo.$engine);
        }
        activarse() {
            Utilidades.tracear("Escena_estandar.activarse", arguments, this);
            this.homactografo.cargar_inyector_en_bucle_de_escena(this);
            this.homactografo.escena_actual = this;
            return this;
        }
        desactivarse() {
            Utilidades.tracear("Escena_estandar.desactivarse", arguments, this);
            if (this.homactografo.escena_actual === this) {
                this.homactografo.escena_actual = undefined;
            }
            return this;
        }
        establecer_color(color) {
            Utilidades.tracear("Escena_estandar.establecer_color", arguments, this);
            this.$scene.clearColor = Utilidades.generar_color(color);
            return this;
        }
    }

    class Objeto_estandar {
        constructor(homactografo, id) {
            Utilidades.tracear("Objeto_estandar.constructor", arguments, this);
            this.homactografo = homactografo;
            this.id = id;
        }
        prepararse() {
            throw new Error("El método «prepararse» debe ser sobreescrito por las clases que heredan de «Objeto_estandar»");
        }
        moverse(vector_args) {
            Utilidades.tracear("Objeto_estandar.moverse", arguments, this);
            const vector = Utilidades.extraer_como_vector(vector_args);
            const x = this.$original.position.x + vector.x;
            const y = this.$original.position.y + vector.y;
            const z = this.$original.position.z + vector.z;
            this.$original.position = new BABYLON.Vector3(x, y, z);
            return this;
        }
        posicionarse(vector_args) {
            Utilidades.tracear("Objeto_estandar.posicionarse", arguments, this);
            const vector = Utilidades.extraer_como_vector(vector_args);
            this.$original.position = new BABYLON.Vector3(vector.x, vector.y, vector.z);
            return this;
        }
        establecer_color(color) {
            Utilidades.tracear("Objeto_cara_estandar.establecer_color", arguments, this);
            if (!this.$mesh.material) {
                this.$mesh.material = new BABYLON.StandardMaterial("", this.homactografo.escena_actual.$scene);
            }
            this.$mesh.material.diffuseColor = Utilidades.generar_color(color);
            this.$mesh.material.specularColor = Utilidades.generar_color(color);
            this.$mesh.material.emissiveColor = Utilidades.generar_color(color);
            this.$mesh.material.ambientColor = Utilidades.generar_color(color);
            return this;
        }
    }

    class Objeto_cara_estandar extends Objeto_estandar {
        constructor(homactografo, id) {
            super(homactografo, id);
            Utilidades.tracear("Objeto_cara_estandar.constructor", arguments, this);
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Objeto_cara_estandar.prepararse", arguments, this);
            this.$mesh = BABYLON.MeshBuilder.CreatePlane(this.id, {
                width: 6,
                height: 6
            }, this.homactografo.escena_actual.$scene);
            this.$mesh.position.y = 1;
            this.$original = this.$mesh;
        }
    }

    class Objeto_cubo_estandar extends Objeto_estandar {
        constructor(homactografo, id) {
            super(homactografo, id);
            Utilidades.tracear("Objeto_cubo_estandar.constructor", arguments, this);
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Objeto_cubo_estandar.prepararse", arguments, this);
            this.$mesh = BABYLON.MeshBuilder.CreateBox(this.id, {
                diameter: 2,
                segments: 32
            }, this.homactografo.escena_actual.$scene);
            this.$mesh.position.y = 1;
            this.$original = this.$mesh;
        }
    }

    class Objeto_cilindro_estandar extends Objeto_estandar {
        constructor(homactografo, id) {
            super(homactografo, id);
            Utilidades.tracear("Objeto_cilindro_estandar.constructor", arguments, this);
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Objeto_cilindro_estandar.prepararse", arguments, this);
            this.$mesh = BABYLON.MeshBuilder.CreateCylinder(this.id, {
                ______: "?"
            }, this.homactografo.escena_actual.$scene);
            this.$mesh.position.y = 1;
            this.$original = this.$mesh;
        }
    }

    class Objeto_esfera_estandar extends Objeto_estandar {
        constructor(homactografo, id) {
            super(homactografo, id);
            Utilidades.tracear("Objeto_esfera_estandar.constructor", arguments, this);
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Objeto_esfera_estandar.prepararse", arguments, this);
            this.$mesh = BABYLON.MeshBuilder.CreateSphere(this.id, {
                diameter: 2,
                segments: 32
            }, this.homactografo.escena_actual.$scene);
            this.$mesh.position.y = 1;
            this.$original = this.$mesh;
        }
    }

    class Objeto_donut_estandar extends Objeto_estandar {
        constructor(homactografo, id) {
            super(homactografo, id);
            Utilidades.tracear("Objeto_donut_estandar.constructor", arguments, this);
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Objeto_donut_estandar.prepararse", arguments, this);
            this.$mesh = BABYLON.MeshBuilder.CreateTorus(this.id, {
                diameter: 2,
                segments: 32
            }, this.homactografo.escena_actual.$scene);
            this.$mesh.position.y = 1;
            this.$original = this.$mesh;
        }
    }

    class Objeto_suelo_estandar extends Objeto_estandar {
        constructor(homactografo, id) {
            super(homactografo, id);
            Utilidades.tracear("Objeto_suelo_estandar.constructor", arguments, this);
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Objeto_suelo_estandar.prepararse", arguments, this);
            this.$mesh = BABYLON.MeshBuilder.CreateGround(this.id, {
                width: 6,
                height: 6
            }, this.homactografo.escena_actual.$scene);
            this.$original = this.$mesh;
        }
    }

    class Camara_estandar extends Objeto_estandar {
        constructor(homactografo, id, parametros = {}) {
            super(homactografo, id);
            Utilidades.tracear("Camara_estandar.constructor", arguments, this);
            this.parametros = parametros;
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Camara_estandar.prepararse", arguments, this);
            const homactografo = this.homactografo;
            const parametros = this.parametros;
            const id = Utilidades.extraer_de_parametros(parametros, "id", "camara_principal");
            const vector = Object.assign({}, { x: 0, y: 1, z: 0 }, Utilidades.extraer_de_parametros(parametros, "vector", {}));
            const sensibilidad_de_rueda_en_delta = Utilidades.extraer_de_parametros(parametros, "sensibilidad_de_rueda_en_delta", 0.05);
            const alfa = Utilidades.extraer_de_parametros(parametros, "alfa", 0);
            const beta = Utilidades.extraer_de_parametros(parametros, "beta", 0);
            const radio = Utilidades.extraer_de_parametros(parametros, "radio", 10);
            this.$camera = new BABYLON.ArcRotateCamera(id, alfa, beta, radio, new BABYLON.Vector3(vector.x, vector.y, vector.z), this.homactografo.escena_actual.$scene);
            this.$camera.attachControl(this.homactografo.$canvas, true);
            this.$camera.wheelDeltaPercentage = sensibilidad_de_rueda_en_delta;
            this.$original = this.$camera;
        }
        establecer_color() {
            throw new Error("La clase «Camara_estandar» no implementa el método «establecer_color» por el momento");
        }
    }

    class Luz_estandar extends Objeto_estandar {
        constructor(homactografo, id, parametros = {}) {
            super(homactografo, id);
            Utilidades.tracear("Luz_estandar.constructor", arguments, this);
            this.parametros = parametros;
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Luz_estandar.prepararse", arguments, this);
            const homactografo = this.homactografo;
            const parametros = this.parametros;
            const id = Utilidades.extraer_de_parametros(parametros, "id", "light");
            const vector = Object.assign({}, { x: 0, y: 1, z: 0 }, Utilidades.extraer_de_parametros(parametros, "vector", {}));
            const intensidad = Utilidades.extraer_de_parametros(parametros, "intensidad", 0.7);
            this.$light = new BABYLON.HemisphericLight(id, new BABYLON.Vector3(vector.x, vector.y, vector.z), this.homactografo.escena_actual.$scene);
            this.$light.intensity = intensidad;
            this.$original = this.$light;
        }
        establecer_color() {
            throw new Error("La clase «Camara_estandar» no implementa el método «establecer_color» por el momento");
        }
    }












    class Persona {
        static utilidad_de_aplicar_rotacion(parametros) {
            Utilidades.tracear("Persona.constructor.utilidad_de_aplicar_rotacion", arguments, this);
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
        static utilidad_de_aplicar_posicionamiento(parametros) {
            Utilidades.tracear("Persona.constructor.utilidad_de_aplicar_posicionamiento", arguments, this);
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
        static Extender_con_api_de_movimientos_de_bajo_nivel_de_paloman(persona) {
            Utilidades.tracear("Persona.constructor.Extender_con_api_de_movimientos_de_bajo_nivel_de_paloman", arguments, this);
            const factoria = {
                de_rotar_eje: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_cabeza", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_cuello: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_cuello", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_hombro_i: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_hombro_i", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_hombro_d: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_hombro_d", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_codo_i: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_codo_i", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_codo_d: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_codo_d", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_pierna_i: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_pierna_i", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_pierna_d: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_pierna_d", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_rodilla_i: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_rodilla_i", vector: punto_3d_args, duracion: tiempo }),
                de_rotar_rodilla_d: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_rotacion({ persona, parte: "esfera_de_rodilla_d", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_eje: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_cabeza", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_cuello: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_cuello", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_hombro_i: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_hombro_i", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_hombro_d: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_hombro_d", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_codo_i: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_codo_i", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_codo_d: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_codo_d", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_pierna_i: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_pierna_i", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_pierna_d: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_pierna_d", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_rodilla_i: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_rodilla_i", vector: punto_3d_args, duracion: tiempo }),
                de_posicionar_rodilla_d: (persona) => (punto_3d_args, tiempo = 1000) => this.utilidad_de_aplicar_posicionamiento({ persona, parte: "esfera_de_rodilla_d", vector: punto_3d_args, duracion: tiempo }),
            };
            Object.assign(persona, {
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
                        i: factoria.de_rotar_pierna_i(persona),
                        d: factoria.de_rotar_pierna_d(persona),
                    },
                    rodilla: {
                        i: factoria.de_rotar_rodilla_i(persona),
                        d: factoria.de_rotar_rodilla_d(persona),
                    }
                },
                posicionar: {
                    eje: factoria.de_posicionar_eje(persona),
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

        constructor(posicion, opciones, escena) {
            Utilidades.tracear("Persona.constructor", arguments, this);
            this.escena = escena;
            this.opciones = opciones;
            this.utilidades = Object.assign({}, this.constructor.utilidades_por_defecto);
            this.configuraciones = Object.assign({}, this.constructor.configuraciones_por_defecto, this.opciones.configuraciones || {});
            this.locales = Object.assign({}, this.constructor.locales_por_defecto, this.opciones.locales || {});
            this.posicion = Object.assign({}, posicion);
            Object.assign(this.configuraciones, this.posicion);
            this.prepararse();
        }
        prepararse() {
            Utilidades.tracear("Persona.prepararse", arguments, this);
            this.constructor.Extender_con_api_de_movimientos_de_bajo_nivel_de_paloman(this);
            this.componerse();
        }
        static get configuraciones_por_defecto() {
            Utilidades.tracear("Persona.constructor.configuraciones_por_defecto", arguments, this);
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
                ancho_de_esferas: 0.08,
                ancho_de_palos: 0.02,
                ancho_de_cadera: (configuralmente.ancho_de_espalda / 4 * 3) / 2,
                largo_de_cuello: 0.3,
                largo_de_espalda: configuralmente.ancho_de_espalda,
                largo_de_columna: 0.7,
                largo_de_antebrazo: 0.5,
                largo_de_brazo: 0.4,
                largo_de_antepierna: 0.7,
                largo_de_pierna: 0.6,
                angulo_de_hombro_izquierdo: 0, // moverá antebrazo izquierdo
                angulo_de_hombro_derecho: 0, // moverá antebrazo derecho
                angulo_de_codo_izquierdo: 0, // moverá brazo izquierdo
                angulo_de_codo_derecho: 0, // moverá brazo derecho
                angulo_de_pierna_izquierda: 0, // moverá antepierna izquierda
                angulo_de_pierna_derecha: 0, // moverá antepierna derecha
                angulo_de_rodilla_izquierda: 0, // moverá pierna izquierda
                angulo_de_rodilla_derecha: 0, // moverá pierna derecha
            });
            return configuralmente;
        }
        static get locales_por_defecto() {
            Utilidades.tracear("Persona.constructor.locales_por_defecto", arguments, this);
            return {};
        }
        static get utilidades_por_defecto() {
            Utilidades.tracear("Persona.constructor.utilidades_por_defecto", arguments, this);
            const utilmente = {};
            const { escena } = this;
            // Utilidades: primera ola.
            Object.assign(utilmente, { escena });
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
        componerse() {
            // Este método en esta API no está pensado para llamarlo como usuario.
            // Es de uso interno, igual que `pintarse`.
            Utilidades.tracear("Persona.componerse", arguments, this);
            if (Object.keys(this.locales).length !== 0) return;
            const { escena } = this;
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
                        + (configuralmente.ancho_de_esferas / 2),
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
                    diameter: configuralmente.ancho_de_esferas,
                    segments: 32,
                    width: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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
                    diameter: configuralmente.ancho_de_esferas,
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

















///////////////////////////////////////////////////////////////////////////////////////////////////////////

    class Persona_estandar extends Persona {
        constructor(homactografo, id, ...parametros) {
            super({}, {}, homactografo.escena_actual.$scene);
            Utilidades.tracear("Persona_estandar.constructor", arguments, this);
            this.homactografo = homactografo;
            this.id = id;
            this.parametros = parametros;
            this.prepararse_para_persona_estandar();
        }
        prepararse_para_persona_estandar() {
            Utilidades.tracear("Persona_estandar.prepararse_para_persona_estandar", arguments, this);
            // @OK
        }
        moverse(vector_args) {
            Utilidades.tracear("Persona_estandar.moverse", arguments, this);
            const vector = Utilidades.extraer_como_vector(vector_args);
            const x = this.$original.position.x + vector.x;
            const y = this.$original.position.y + vector.y;
            const z = this.$original.position.z + vector.z;
            this.$original.position = new BABYLON.Vector3(x, y, z);
            return this;
        }
        posicionarse(vector_args) {
            Utilidades.tracear("Persona_estandar.posicionarse", arguments, this);
            const vector = Utilidades.extraer_como_vector(vector_args);
            this.$original.position = new BABYLON.Vector3(vector.x, vector.y, vector.z);
            return this;
        }
    }

    class Homactografo {
        static registrar_tipo_en_homactografo(homactografo, tipo, subtipo, clase) {
            Utilidades.tracear("Homactografo.constructor.registrar_tipo_en_homactografo", arguments, this);
            const tipos_de_x = homactografo["tipos_de_" + tipo];
            tipos_de_x[subtipo] = clase;
        }
        clases_tipo_por_defecto() {
            return {
                "objeto:aro": "Objeto_aro_estandar",
                "objeto:cilindro": "Objeto_cilindro_estandar",
                "objeto:cubo": "Objeto_cubo_estandar",
                "objeto:esfera": "Objeto_esfera_estandar",
                "objeto:objeto": "Objeto_estandar",
                "objeto:suelo": "Objeto_suelo_estandar",
                "persona:persona": "Persona_estandar",
                "escena:escena": "Escena_estandar",
                "luz:luz": "Luz_estandar",
                "camara:camara": "Camara_estandar"
            };
        }
        static crear_instancia_en_homactografo(homactografo, grupo, subgrupo, clase, id, parametros = [], inicializador = false, lanzar_error_si_ya_existe = false) {
            Utilidades.tracear("Homactografo.constructor.crear_instancia_en_homactografo", arguments, this);
            const tipos_de_x = homactografo["tipos_de_" + grupo];
            if (!!!clase) {
                const identificador_de_subgrupo = grupo + ":" + subgrupo;
                const clases_por_defecto = homactografo.clases_tipo_por_defecto();
                if (!(identificador_de_subgrupo in clases_por_defecto)) {
                    throw new Error("Error al crear «" + id + "» (clase «" + clase + "»; tipo: «" + grupo + "») porque no se encontró una clase tipo por defecto para el subgrupo «" + identificador_de_subgrupo + "»");
                }
                clase = clases_por_defecto[identificador_de_subgrupo];
            }
            if (!(clase in tipos_de_x)) {
                throw new Error("Error al crear «" + id + "» (clase «" + clase + "»; tipo: «" + grupo + "») porque no se encontró el tipo «" + clase + "»")
            }
            const tipo_de_x = tipos_de_x[clase];
            const instancias_de_x = homactografo["instancias_de_" + grupo];
            if (id in instancias_de_x) {
                if (lanzar_error_si_ya_existe) {
                    throw new Error("Error al crear «" + id + "» (clase «" + clase + "»; tipo: «" + grupo + "») porque ya existe una instancia con ese mismo identificador «" + id + "»")
                }
                return instancias_de_x[id];
            }
            let instancia_de_x = new tipo_de_x(...[homactografo, id].concat(parametros));
            if (typeof inicializador === "function") {
                const resultado = inicializador(instancia_de_x);
                if (typeof resultado !== "undefined") {
                    instancia_de_x = resultado;
                }
            }
            homactografo["instancias_de_" + grupo][id] = instancia_de_x;
            return instancia_de_x;
        }
        static eliminar_instancia_en_homactografo(homactografo, tipo, id, parametros = []) {
            Utilidades.tracear("Homactografo.constructor.eliminar_instancia_en_homactografo", arguments, this);
            const instancias_de_x = homactografo["instancias_de_" + tipo];
            if (!(id in instancias_de_x)) {
                throw new Error("Error al eliminar «" + id + "» (tipo: «" + tipo + "») porque no se encontró la instancia «" + id + "»");
            }
            instancias_de_x[id].dispose(...parametros);
            delete instancias_de_x[id];
            return homactografo;
        }
        static seleccionar_muchos_en_homactografo(homactografo, tipo, filtro = undefined) {
            Utilidades.tracear("Homactografo.constructor.seleccionar_muchos_en_homactografo", arguments, this);
            let all = [];
            if (tipo === "*") {
                all = homactrografo.instancias();
            } else {
                all = homactrografo["instancias_de_" + tipo];
            }
            return Object.keys(all).filter((clave, index) => {
                return filtro(clave, all[clave], index, all, homactografo);
            });
        }
        static seleccionar_uno_en_homactografo(homactografo, tipo, id) {
            Utilidades.tracear("Homactografo.constructor.seleccionar_uno_en_homactografo", arguments, this);
            let all = [];
            if (tipo === "*") {
                all = homactografo.instancias();
            } else {
                all = homactografo["instancias_de_" + tipo];
            }
            if(!(id in all)) {
                throw new Error("Error al «seleccionar_uno_en_homactografo» porque no se encontró id «" + id + "» en tipo «" + tipo + "»")
            }
            return all[id];
        }
        static ejecutar_inyecciones_en_bucle_de_escena(homactografo, escena_de_homactografo) {
            Utilidades.tracear("Homactografo.ejecutar_inyecciones_en_bucle_de_escena", arguments, this);
            const escena_id = typeof escena_de_homactografo === "undefined" ? "*" : escena_de_homactografo.id;
            if (!(escena_id in homactografo.instancias_de_accion_en_bucle)) {
                homactografo.instancias_de_accion_en_bucle[escena_id] = {};
            }
            const escena_acciones = homactografo.instancias_de_accion_en_bucle[escena_id];
            const acciones_ids = Object.keys(escena_acciones);
            for (let i = 0; i < acciones_ids.length; i++) {
                const accion_id = acciones_ids[i];
                const { accion } = escena_acciones[accion_id];
                accion(escena_de_homactografo, homactografo);
            }
        }
        constructor(dom_canvas, metadatos = {}) {
            Utilidades.tracear("Homactografo.constructor", arguments, this);
            this.$canvas = dom_canvas;
            this.$engine = new BABYLON.Engine(this.$canvas, true, {
                preserveDrawingBuffer: true,
                stencil: true,
                disableWebGL2Support: false
            });
            this.escena_actual = undefined;
            this.instancias_de_escena = {};
            this.instancias_de_camara = {};
            this.instancias_de_luz = {};
            this.instancias_de_persona = {};
            this.instancias_de_objeto = {};
            this.instancias_de_accion_en_bucle = {};
            this.tipos_de_escena = {};
            this.tipos_de_camara = {};
            this.tipos_de_luz = {};
            this.tipos_de_persona = {};
            this.tipos_de_objeto = {};
            this.metadatos = metadatos;
            this.prepararse();
        }

        prepararse() {
            Utilidades.tracear("Homactografo.prepararse", arguments, this);
            this.cargar_tipos();
            this.cargar_instancias();
            this.cargar_eventos_del_dom();
        }

        cargar_eventos_del_dom() {
            window.addEventListener("resize", () => {
                this.$engine.resize();
            });
        }
        cargar_tipos() {
            Utilidades.tracear("Homactografo.cargar_tipos", arguments, this);
            this.tipos_de_escena.Escena_estandar = Escena_estandar;
            this.tipos_de_camara.Camara_estandar = Camara_estandar;
            this.tipos_de_luz.Luz_estandar = Luz_estandar;
            this.tipos_de_persona.Persona_estandar = Persona_estandar;
            this.tipos_de_objeto.Objeto_estandar = Objeto_estandar;
            this.tipos_de_objeto.Objeto_esfera_estandar = Objeto_esfera_estandar;
            this.tipos_de_objeto.Objeto_suelo_estandar = Objeto_suelo_estandar;
        }
        cargar_instancias() {
            Utilidades.tracear("Homactografo.cargar_instancias", arguments, this);
        }

        cargar_inyector_en_bucle_de_escena(escena_de_homactografo) {
            Utilidades.tracear("Homactografo.cargar_inyector_en_bucle_de_escena", arguments, this);
            if (escena_de_homactografo.esta_bucle_inyectado) return false;
            escena_de_homactografo.$scene.registerBeforeRender(() => {
                this.constructor.ejecutar_inyecciones_en_bucle_de_escena(this, escena_de_homactografo);
                this.constructor.ejecutar_inyecciones_en_bucle_de_escena(this, undefined);
            });
            escena_de_homactografo.esta_bucle_inyectado = true;
            return true;
        }

        clases() {
            Utilidades.tracear("Homactografo.clases", arguments, this);
            return Object.assign(
                {},
                this.tipos_de_escena,
                this.tipos_de_camara,
                this.tipos_de_luz,
                this.tipos_de_objeto,
                this.tipos_de_persona
            );
        }

        instancias() {
            Utilidades.tracear("Homactografo.instancias", arguments, this);
            return Object.assign(
                {},
                this.instancias_de_escena,
                this.instancias_de_camara,
                this.instancias_de_luz,
                this.instancias_de_objeto,
                this.instancias_de_persona
            );
        }

        selectores() {
            return {
                elementos: this.seleccionar_por_filtro.bind(this),
                elemento: this.seleccionar_por_id.bind(this),
                escena: this.seleccionar_escena.bind(this),
                escenas: this.seleccionar_escenas.bind(this),
                camara: this.seleccionar_camara.bind(this),
                camaras: this.seleccionar_camaras.bind(this),
                luz: this.seleccionar_luz.bind(this),
                luces: this.seleccionar_luces.bind(this),
                objeto: this.seleccionar_objeto.bind(this),
                objetos: this.seleccionar_objetos.bind(this),
                persona: this.seleccionar_persona.bind(this),
                personas: this.seleccionar_personas.bind(this),
                entrar: {
                    escena: this.crear_escena.bind(this),
                    camara: this.crear_camara.bind(this),
                    luz: this.crear_luz.bind(this),
                    objeto: this.crear_objeto.bind(this),
                    objeto_esfera: this.crear_objeto_esfera.bind(this),
                    objeto_suelo: this.crear_objeto_suelo.bind(this),
                    persona: this.crear_persona.bind(this),
                    evento_en_bucle: this.activar_accion_en_bucle.bind(this),
                },
                salir: {
                    escena: this.eliminar_escena.bind(this),
                    camara: this.eliminar_camara.bind(this),
                    luz: this.eliminar_luz.bind(this),
                    objeto: this.eliminar_objeto.bind(this),
                    persona: this.eliminar_persona.bind(this),
                    evento_en_bucle: this.desactivar_accion_en_bucle.bind(this),
                }
            };
        }

        async representar(representacion) {
            try {
                this.$engine.runRenderLoop(() => {
                    if (this.escena_actual.$scene && this.escena_actual.$scene.activeCamera) {
                        this.escena_actual.$scene.render();
                    }
                });
                await representacion.call(this);
            } catch (error) {
                console.log("Error homactográfico durante la representación:", error);
                throw error;
            }
        }

        registrar_tipo_de_escena(tipo, creador = false) {
            Utilidades.tracear("Homactografo.registrar_tipo_de_escena", arguments, this);
            return this.constructor.registrar_tipo_en_homactografo(this, "escena", tipo, creador);
        }
        registrar_tipo_de_camara(tipo, creador = false) {
            Utilidades.tracear("Homactografo.registrar_tipo_de_camara", arguments, this);
            return this.constructor.registrar_tipo_en_homactografo(this, "camara", tipo, creador);
        }
        registrar_tipo_de_luz(tipo, creador = false) {
            Utilidades.tracear("Homactografo.registrar_tipo_de_luz", arguments, this);
            return this.constructor.registrar_tipo_en_homactografo(this, "luz", tipo, creador);
        }
        registrar_tipo_de_persona(tipo, creador = false) {
            Utilidades.tracear("Homactografo.registrar_tipo_de_persona", arguments, this);
            return this.constructor.registrar_tipo_en_homactografo(this, "persona", tipo, creador);
        }
        registrar_tipo_de_objeto(tipo, creador = false) {
            Utilidades.tracear("Homactografo.registrar_tipo_de_objeto", arguments, this);
            return this.constructor.registrar_tipo_en_homactografo(this, "objeto", tipo, creador);
        }

        crear_escena(id, clase = "Escena_estandar", parametros = [], inicializador = undefined) {
            Utilidades.tracear("Homactografo.crear_escena", arguments, this);
            return this.constructor.crear_instancia_en_homactografo(this, "escena", "escena", clase, id, parametros, inicializador);
        }
        crear_camara(id, clase = "Camara_estandar", parametros = [], inicializador = undefined) {
            Utilidades.tracear("Homactografo.crear_camara", arguments, this);
            return this.constructor.crear_instancia_en_homactografo(this, "camara", "camara", clase, id, parametros, inicializador);
        }
        crear_luz(id, clase = "Luz_estandar", parametros = [], inicializador = undefined) {
            Utilidades.tracear("Homactografo.crear_luz", arguments, this);
            return this.constructor.crear_instancia_en_homactografo(this, "luz", "luz", clase, id, parametros, inicializador);
        }
        crear_persona(id, clase = "Persona_estandar", parametros = [], inicializador = undefined) {
            Utilidades.tracear("Homactografo.crear_persona", arguments, this);
            return this.constructor.crear_instancia_en_homactografo(this, "persona", "persona", clase, id, parametros, inicializador);
        }
        crear_objeto(id, clase = "Objeto_estandar", parametros = [], inicializador = undefined) {
            Utilidades.tracear("Homactografo.crear_objeto", arguments, this);
            return this.constructor.crear_instancia_en_homactografo(this, "objeto", "objeto", clase, id, parametros, inicializador);
        }
        crear_objeto_esfera(id, clase = "Objeto_esfera_estandar", parametros = [], inicializador = undefined) {
            Utilidades.tracear("Homactografo.crear_objeto_esfera", arguments, this);
            return this.constructor.crear_instancia_en_homactografo(this, "objeto", "esfera", clase, id, parametros, inicializador);
        }
        crear_objeto_suelo(id, clase = "Objeto_suelo_estandar", parametros = [], inicializador = undefined) {
            Utilidades.tracear("Homactografo.crear_objeto_suelo", arguments, this);
            return this.constructor.crear_instancia_en_homactografo(this, "objeto", "suelo", clase, id, parametros, inicializador);
        }

        seleccionar_por_filtro(filtro = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_por_filtro", arguments, this);
            return this.constructor.seleccionar_uno_en_homactografo(this, "*", filtro);
        }
        seleccionar_escenas(filtro = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_escenas", arguments, this);
            return this.constructor.seleccionar_muchos_en_homactografo(this, "escena", filtro);
        }
        seleccionar_camaras(filtro = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_camaras", arguments, this);
            return this.constructor.seleccionar_muchos_en_homactografo(this, "escena", filtro);
        }
        seleccionar_luces(filtro = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_luces", arguments, this);
            return this.constructor.seleccionar_muchos_en_homactografo(this, "escena", filtro);
        }
        seleccionar_personas(filtro = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_personas", arguments, this);
            return this.constructor.seleccionar_muchos_en_homactografo(this, "escena", filtro);
        }
        seleccionar_objetos(filtro = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_objetos", arguments, this);
            return this.constructor.seleccionar_muchos_en_homactografo(this, "escena", filtro);
        }

        seleccionar_por_id(id = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_por_id", arguments, this);
            return this.constructor.seleccionar_uno_en_homactografo(this, "*", id);
        }
        seleccionar_escena(id = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_escena", arguments, this);
            return this.constructor.seleccionar_uno_en_homactografo(this, "escena", id);
        }
        seleccionar_camara(id = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_camara", arguments, this);
            return this.constructor.seleccionar_uno_en_homactografo(this, "camara", id);
        }
        seleccionar_luz(id = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_luz", arguments, this);
            return this.constructor.seleccionar_uno_en_homactografo(this, "luz", id);
        }
        seleccionar_persona(id = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_persona", arguments, this);
            return this.constructor.seleccionar_uno_en_homactografo(this, "persona", id);
        }
        seleccionar_objeto(id = undefined) {
            Utilidades.tracear("Homactografo.seleccionar_objeto", arguments, this);
            return this.constructor.seleccionar_uno_en_homactografo(this, "objeto", id);
        }

        eliminar_escena(id = undefined) {
            Utilidades.tracear("Homactografo.eliminar_escena", arguments, this);
            return this.constructor.eliminar_instancia_en_homactografo(this, "escena", id);
        }
        eliminar_camara(id = undefined) {
            Utilidades.tracear("Homactografo.eliminar_camara", arguments, this);
            return this.constructor.eliminar_instancia_en_homactografo(this, "camara", id);
        }
        eliminar_luz(id = undefined) {
            Utilidades.tracear("Homactografo.eliminar_luz", arguments, this);
            return this.constructor.eliminar_instancia_en_homactografo(this, "luz", id);
        }
        eliminar_persona(id = undefined) {
            Utilidades.tracear("Homactografo.eliminar_persona", arguments, this);
            return this.constructor.eliminar_instancia_en_homactografo(this, "persona", id);
        }
        eliminar_objeto(id = undefined) {
            Utilidades.tracear("Homactografo.eliminar_objeto", arguments, this);
            return this.constructor.eliminar_instancia_en_homactografo(this, "objeto", id);
        }

        activar_accion_en_bucle(id, accion, escena_id = "*", lanzar_error_si_ya_existe = false) {
            if (!(escena_id in this.instancias_de_accion_en_bucle)) {
                this.instancias_de_accion_en_bucle[escena_id] = {};
            }
            if (id in this.instancias_de_accion_en_bucle[escena_id]) {
                if (lanzar_error_si_ya_existe) {
                    throw new Error("Error al «activar_accion_en_bucle» porque ya existe una acción «" + id + "» en escena «" + escena_id + "»");
                }
                return this;
            }
            this.instancias_de_accion_en_bucle[escena_id][id] = { id, accion, escena_id };
            return this;
        }
        desactivar_accion_en_bucle(id, escena_id = "*") {
            if (!(escena_id in this.instancias_de_accion_en_bucle)) {
                this.instancias_de_accion_en_bucle[escena_id] = {};
            }
            if (!(id in this.instancias_de_accion_en_bucle[escena_id])) {
                this.instancias_de_accion_en_bucle[escena_id] = {};
            }
            delete this.instancias_de_accion_en_bucle[escena_id][id];
            return this;
        }
    };
    Homactografo.default = Homactografo;
    return Homactografo;
});