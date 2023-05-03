window.Homactografo = class {
    constructor(engine) {
        this.engine = engine;
        this.escena = new this.constructor.clases.Escena.Estandar(this);
        this.camara = new this.constructor.clases.Camara.Estandar(this);
    }
    iniciarse(elemento_canvas) {
        const startRenderLoop = function (engine, canvas) {
            engine.runRenderLoop(function () {
                if (sceneToRender && sceneToRender.activeCamera) {
                    sceneToRender.render();
                }
            });
        };
        let engine = null;
        let scene = null;
        let sceneToRender = null;
        const createDefaultEngine = function () {
            return new BABYLON.Engine(elemento_canvas, true, {
                preserveDrawingBuffer: true,
                stencil: true,
                disableWebGL2Support: false
            });
        };
        this.desplegarse();
    }
    desplegarse() {
        const initFunction = async function () {
            const asyncEngineCreation = async function () {
                try {
                    return createDefaultEngine();
                } catch (e) {
                    console.log("the available createEngine function failed. Creating the default engine instead");
                    return createDefaultEngine();
                }
            };
            this.engine = await asyncEngineCreation();
            if (!this.engine) {
                throw 'El «Homectografo3D» necesita una instancia de «BABYLON.Engine» válido para «desplegarse»';
            }
            startRenderLoop(engine, canvas);
            window.scene = createScene();
        };
        initFunction().then(() => {
            sceneToRender = scene
        });
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }
};
Homactografo.clase = {};
Homactografo.clase.Escena = {};
Homactografo.clase.Camara = {};
Homactografo.clase.Luz = {};
Homactografo.clase.Persona = {};
Homactografo.clase.Objeto = {};

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
    return escena;
};