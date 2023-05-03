window.Homactografo3d = class {
    static iniciar(canvas) {
        const start_render_loop = function (engine, canvas) {
            engine.runRenderLoop(function () {
                if (sceneToRender && sceneToRender.activeCamera) {
                    sceneToRender.render();
                }
            });
        };
        const engine = null;
        const scene = null;
        const sceneToRender = null;
        const createDefaultEngine = function () {
            return new BABYLON.Engine(canvas, true, {
                preserveDrawingBuffer: true,
                stencil: true,
                disableWebGL2Support: false
            });
        };
        window.initFunction = async function () {
            const asyncEngineCreation = async function () {
                try {
                    return createDefaultEngine();
                } catch (e) {
                    console.log("the available createEngine function failed. Creating the default engine instead");
                    return createDefaultEngine();
                }
            };
            window.engine = await asyncEngineCreation();
            if (!engine) throw 'engine should not be null.';
            start_render_loop(engine, canvas);
            window.scene = window.createScene(engine);
        };
        initFunction().then(() => {
            sceneToRender = scene;
        });
        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });
    }
    constructor() {

    }
};

window.Homactografo3d.clase = {};