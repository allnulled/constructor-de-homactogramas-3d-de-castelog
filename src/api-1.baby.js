
let createScene = function () {
    (function () {
        class Utilidades {
            static tracear(id, argz, ...args) {
                return;
                console.log("[TRACE] " + id, Array.from(argz), ...args);
            }
            static extraer_de_parametros(parametros, clave, valor_por_defecto = undefined) {
                Utilidades.tracear("Utilidades.extraer_de_parametros", arguments, this);
                if (!(clave in parametros)) return valor_por_defecto;
                const parametro = parametros[clave];
                return parametro ? parametro : valor_por_defecto;
            }
            static extraer_como_vector(arg) {
                return Object.assign({}, { x: 0, y: 0, z: 0 }, arg);
            }
        }
        class Escena_estandar {
            constructor(homactografo, id, parametros = {}) {
                Utilidades.tracear("Escena_estandar.constructor", arguments, this);
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
                Utilidades.tracear("Objeto_estandar.activarse", arguments, this);
                this.homactografo.cargar_inyector_en_bucle_de_escena(this);
                this.homactografo.escena_actual = this;
                return this;
            }
            desactivarse() {
                Utilidades.tracear("Objeto_estandar.desactivarse", arguments, this);
                if (this.homactografo.escena_actual === this) {
                    this.homactografo.escena_actual = undefined;
                }
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
        }
        class Objeto_esfera_estandar extends Objeto_estandar {
            constructor(homactografo, id) {
                super(homactografo, id);
                Utilidades.tracear("Objeto_esfera_estandar.constructor", arguments, this);
                this.prepararse();
            }
            prepararse() {
                Utilidades.tracear("Objeto_esfera_estandar.prepararse", arguments, this);
                this.$mesh = BABYLON.MeshBuilder.CreateSphere("sphere", {
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
                this.$mesh = BABYLON.MeshBuilder.CreateGround("ground", {
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
        }
        class Persona_estandar extends Objeto_estandar {
            constructor(homactografo, id) {
                super(homactografo, id);
                Utilidades.tracear("Persona_estandar.constructor", arguments, this);
                this.parametros = parametros;
                this.prepararse();
            }
            prepararse() {
                Utilidades.tracear("Persona_estandar.prepararse", arguments, this);
                const homactografo = this.homactografo;
                const parametros = this.parametros;
                // @TODO...
                this.$persona = {};
                this.$original = this.$persona;
            }
        }
        class Homactografo {
            static registrar_tipo_en_homactografo(homactografo, tipo, subtipo, clase) {
                Utilidades.tracear("Homactografo.constructor.registrar_tipo_en_homactografo", arguments, this);
                const tipos_de_x = homactografo["tipos_de_" + tipo];
                tipos_de_x[subtipo] = clase;
            }
            static crear_instancia_en_homactografo(homactografo, tipo, subtipo, id, parametros = [], inicializador = false) {
                Utilidades.tracear("Homactografo.constructor.crear_instancia_en_homactografo", arguments, this);
                const tipos_de_x = homactografo["tipos_de_" + tipo];
                if (!(subtipo in tipos_de_x)) {
                    throw new Error("Error al crear «" + id + "» (clase «" + subtipo + "»; tipo: «" + tipo + "») porque no se encontró el tipo «" + subtipo + "»")
                }
                const tipo_de_x = tipos_de_x[subtipo];
                const instancias_de_x = homactografo["instancias_de_" + tipo];
                if (id in instancias_de_x) {
                    throw new Error("Error al crear «" + id + "» (clase «" + subtipo + "»; tipo: «" + tipo + "») porque ya existe una instancia con ese mismo identificador «" + id + "»")
                }
                let instancia_de_x = new tipo_de_x(...[homactografo, id].concat(parametros));
                if (typeof inicializador === "function") {
                    const resultado = inicializador(instancia_de_x);
                    if (typeof resultado !== "undefined") {
                        instancia_de_x = resultado;
                    }
                }
                homactografo["instancias_de_" + tipo][id] = instancia_de_x;
                return instancia_de_x;
            }
            static eliminar_instancia_en_homactografo(homactografo, tipo, id, parametros = []) {
                Utilidades.tracear("Homactografo.constructor.eliminar_instancia_en_homactografo", arguments, this);
                const instancias_de_x = homactografo["instancias_de_" + tipo];
                if (!(id in instancias_de_x)) {
                    throw new Error("Error al eliminar «" + id + "» (tipo: «" + tipo + "») porque no se encontró la instancia «" + id + "»");
                }
                tipos_de_x[subtipo].dispose(...parametros);
                delete tipos_de_x[subtipo];
                return instancia_de_x;
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
                return all[id];
            }
            static ejecutar_inyecciones_en_bucle_de_escena(homactografo, escena_de_homactografo) {
                Utilidades.tracear("Homactografo.ejecutar_inyecciones_en_bucle_de_escena", arguments, this);
                const escena_id = typeof escena_de_homactografo === "undefined" ? "*" : escena_de_homactografo.id;
                if (!(escena_id in homactografo.acciones_en_bucle)) {
                    homactografo.acciones_en_bucle[escena_id] = {};
                }
                const escena_acciones = homactografo.acciones_en_bucle[escena_id];
                const acciones_ids = Object.keys(escena_acciones);
                for (let i = 0; i < acciones_ids.length; i++) {
                    const accion_id = acciones_ids[i];
                    const { accion } = escena_acciones[accion_id];
                    accion(escena_de_homactografo, homactografo);
                }
            }
            constructor(babylon_engine, dom_canvas, metadatos = {}) {
                Utilidades.tracear("Homactografo.constructor", arguments, this);
                this.$engine = babylon_engine;
                this.$canvas = dom_canvas;
                this.escena_actual = undefined;
                this.instancias_de_escena = {};
                this.instancias_de_camara = {};
                this.instancias_de_luz = {};
                this.instancias_de_persona = {};
                this.instancias_de_objeto = {};
                this.tipos_de_escena = {};
                this.tipos_de_camara = {};
                this.tipos_de_luz = {};
                this.tipos_de_persona = {};
                this.tipos_de_objeto = {};
                this.acciones_en_bucle = {};
                this.metadatos = metadatos;
                this.prepararse();
            }

            prepararse() {
                Utilidades.tracear("Homactografo.prepararse", arguments, this);
                this.cargar_tipos();
                this.cargar_instancias();
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

            crear_escena(id, tipo = "Escena_estandar", parametros = [], inicializador = undefined) {
                Utilidades.tracear("Homactografo.crear_escena", arguments, this);
                return this.constructor.crear_instancia_en_homactografo(this, "escena", tipo, id, parametros, inicializador);
            }
            crear_camara(id, tipo = "Camara_estandar", parametros = [], inicializador = undefined) {
                Utilidades.tracear("Homactografo.crear_camara", arguments, this);
                return this.constructor.crear_instancia_en_homactografo(this, "camara", tipo, id, parametros, inicializador);
            }
            crear_luz(id, tipo = "Luz_estandar", parametros = [], inicializador = undefined) {
                Utilidades.tracear("Homactografo.crear_luz", arguments, this);
                return this.constructor.crear_instancia_en_homactografo(this, "luz", tipo, id, parametros, inicializador);
            }
            crear_persona(id, tipo = "Persona_estandar", parametros = [], inicializador = undefined) {
                Utilidades.tracear("Homactografo.crear_persona", arguments, this);
                return this.constructor.crear_instancia_en_homactografo(this, "persona", tipo, id, parametros, inicializador);
            }
            crear_objeto(id, tipo = "Objeto_estandar", parametros = [], inicializador = undefined) {
                Utilidades.tracear("Homactografo.crear_objeto", arguments, this);
                return this.constructor.crear_instancia_en_homactografo(this, "objeto", tipo, id, parametros, inicializador);
            }
            crear_objeto_esfera(id, tipo = "Objeto_esfera_estandar", parametros = [], inicializador = undefined) {
                Utilidades.tracear("Homactografo.crear_objeto_esfera", arguments, this);
                return this.constructor.crear_instancia_en_homactografo(this, "objeto", tipo, id, parametros, inicializador);
            }
            crear_objeto_suelo(id, tipo = "Objeto_suelo_estandar", parametros = [], inicializador = undefined) {
                Utilidades.tracear("Homactografo.crear_objeto_suelo", arguments, this);
                return this.constructor.crear_instancia_en_homactografo(this, "objeto", tipo, id, parametros, inicializador);
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

            activar_accion_en_bucle(id, accion, escena_id = "*") {
                if (!(escena_id in this.acciones_en_bucle)) {
                    this.acciones_en_bucle[escena_id] = {};
                }
                if (id in this.acciones_en_bucle[escena_id]) {
                    throw new Error("Error al «activar_accion_en_bucle» porque ya existe una acción «" + id + "» en escena «" + escena_id + "»");
                }
                this.acciones_en_bucle[escena_id][id] = { id, accion, escena_id };
                return this;
            }
            desactivar_accion_en_bucle(id, escena_id = "*") {
                if (!(escena_id in this.acciones_en_bucle)) {
                    this.acciones_en_bucle[escena_id] = {};
                }
                if (!(id in this.acciones_en_bucle[escena_id])) {
                    this.acciones_en_bucle[escena_id] = {};
                }
                delete this.acciones_en_bucle[escena_id][id];
                return this;
            }
        };
        window.Homactografo = Homactografo;
    })();

    Script_de_escena: {
        const homactografo = new window.Homactografo(engine, canvas);
        homactografo.crear_escena("escena_inicial").activarse();
        homactografo.crear_objeto_esfera("esfera_inicial", "Objeto_esfera_estandar", [{ diameter: 2, segments: 32 }], esfera => { esfera.$mesh.position.y = 1; });
        homactografo.crear_objeto_suelo("suelo_inicial", "Objeto_suelo_estandar", [{ width: 6, height: 6 }]);
        homactografo.crear_camara("camara_inicial", "Camara_estandar", [], camara => { camara.$camera.setTarget(homactografo.seleccionar_objeto("esfera_inicial").$mesh); });
        homactografo.crear_camara("camara_perfil");
        homactografo.crear_camara("camara_frontal");
        homactografo.crear_luz("luz_inicial");
        homactografo.seleccionar_camara("camara_inicial").moverse({ x: 5, y: 0, z: 0 });
        homactografo.seleccionar_objeto("esfera_inicial").moverse({ x: 1.2, y: 0, z: 0 });
        homactografo.activar_accion_en_bucle("mover esfera inicial", () => {
            console.log("Intervaling");
            homactografo.seleccionar_objeto("esfera_inicial").moverse({ x: 0.01, y: 0, z: 0 });
        });
        window.$h = homactografo;
        return homactografo.seleccionar_escena("escena_inicial").$scene;
    };

};