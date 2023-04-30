const createScene = function () {
    const { Color3 } = BABYLON;
    const escena = new BABYLON.Scene(engine);
    Inicializar_escena: {
        escena.clearColor = new BABYLON.Color3.FromHexString("#66b7d8");
        const hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/environment.dds", escena);
    }
    const camara = new BABYLON.ArcRotateCamera("camara_principal", 0, 0, 10, new BABYLON.Vector3(0, 10, 0), escena);
    Inicializar_camara: {
        camara.attachControl(canvas, true);
        camara.wheelDeltaPercentage = 0.05;
    }
    const luz = new BABYLON.HemisphericLight("luz", new BABYLON.Vector3(0, 0, 0), escena);
    Inicializar_luz: {
        Object.assign(luz, {
            intensity: 0.7
        });
    }
    const temporalmente = {
        ancho_de_espalda: 0.5
    };
    const configuralmente = {
        anchura: 0.8,
        ancho_de_cabeza: temporalmente.ancho_de_espalda / 4 * 3,
        ancho_de_bolas: 0.08,
        ancho_de_palos: 0.02,
        ancho_de_cadera: (temporalmente.ancho_de_espalda / 4 * 3) / 2,
        largo_de_cuello: 0.3,
        largo_de_espalda: temporalmente.ancho_de_espalda,
        largo_de_columna: 0.7,
        largo_de_antebrazo: 0.5,
        largo_de_brazo: 0.4,
        largo_de_antepierna: 0.7,
        largo_de_pierna: 0.6,
    };
    Object.assign(configuralmente, {
        altura_de_cabeza: 0
            + (configuralmente.ancho_de_cabeza / 2)
            + configuralmente.largo_de_cuello - (configuralmente.ancho_de_cabeza / 2)
            + configuralmente.largo_de_columna
            + configuralmente.largo_de_antepierna
            + configuralmente.largo_de_pierna
            + (configuralmente.ancho_de_bolas / 2),
    })
    const localmente = {};
    const utilmente = {
        localmente,
        escena,
        camara,
        luz,
        fabricar_material_traslucido_de_color_1: function (hex1, hex2, id) {
            const material_traslucido = new BABYLON.PBRMaterial(id, escena);
            material_traslucido.indexOfRefraction = 0;
            material_traslucido.alpha = 0.5;
            material_traslucido.directIntensity = 0.0;
            material_traslucido.environmentIntensity = 0.7;
            material_traslucido.cameraExposure = 0.66;
            material_traslucido.cameraContrast = 1.66;
            material_traslucido.microSurface = 1;
            material_traslucido.reflectivityColor = BABYLON.Color3.FromHexString(hex1);
            material_traslucido.albedoColor = BABYLON.Color3.FromHexString(hex2);
            return material_traslucido;
        },
        fabricar_material_traslucido_de_color_2: function (hex1, hex2, id) {
            return utilmente.fabricar_material_de_color(hex1, id);
        },
        fabricar_material_traslucido_de_color_3: function (hex1, hex2, id) {
            const material_traslucido = new BABYLON.PBRMaterial("pbr", escena);
            material_traslucido.metallic = 0.0;
            material_traslucido.roughness = 0;
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
    }
    Crear_suelo: {
        const suelo = BABYLON.MeshBuilder.CreateGround("suelo", {
            width: 5,
            height: 100
        }, escena);
        Object.assign(suelo, {
            material: utilmente.fabricar_material_de_color("#00BA41", "material_de_suelo")
        });
        Object.assign(localmente, {
            suelo
        });
    }
    Crear_esfera_de_cabeza: {
        const esfera_de_cabeza = BABYLON.MeshBuilder.CreateSphere("esfera_de_cabeza", {
            diameter: configuralmente.ancho_de_cabeza,
            segments: 32
        }, escena);
        Object.assign(esfera_de_cabeza.position, {
            x: 0,
            y: configuralmente.altura_de_cabeza,
            z: 0
        });
        Object.assign(esfera_de_cabeza, {
            material: utilmente.fabricar_material_de_color("#CCCCCC", "material_de_cabeza")
        });
        Object.assign(localmente, {
            esfera_de_cabeza
        });
        Hacer_esfera_espejo: {
            esfera_de_cabeza.material = utilmente.fabricar_material_traslucido_de_color_1("#FFFFFF", "#FFFFFF", "material_de_cabeza");
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
            x: 0,
            y: configuralmente.altura_de_cabeza,
            z: 0
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
            x: 0,
            y: configuralmente.altura_de_cabeza - (configuralmente.largo_de_cuello / 2),
            z: 0
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
            x: 0,
            y: localmente.cilindro_de_cuello.position.y - (configuralmente.largo_de_cuello / 2),
            z: 0
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
            x: 0,
            y: localmente.esfera_de_cuello.position.y,
            z: 0
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
            x: 0,
            y: localmente.esfera_de_cuello.position.y,
            z: -(configuralmente.largo_de_espalda / 2)
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
            x: 0,
            y: localmente.esfera_de_cuello.position.y,
            z: +(configuralmente.largo_de_espalda / 2)
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
            x: 0,
            y: localmente.esfera_de_hombro_izquierdo.position.y - (configuralmente.largo_de_antebrazo / 2),
            z: localmente.esfera_de_hombro_izquierdo.position.z
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
            x: 0,
            y: localmente.esfera_de_hombro_derecho.position.y - (configuralmente.largo_de_antebrazo / 2),
            z: localmente.esfera_de_hombro_derecho.position.z
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
            x: 0,
            y: localmente.cilindro_de_antebrazo_izquierdo.position.y - (configuralmente.largo_de_antebrazo / 2),
            z: localmente.esfera_de_hombro_izquierdo.position.z
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
            x: 0,
            y: localmente.cilindro_de_antebrazo_derecho.position.y - (configuralmente.largo_de_antebrazo / 2),
            z: localmente.esfera_de_hombro_derecho.position.z
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
            x: 0,
            y: localmente.esfera_de_codo_izquierdo.position.y - (configuralmente.largo_de_brazo / 2),
            z: localmente.esfera_de_hombro_izquierdo.position.z
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
            x: 0,
            y: localmente.esfera_de_codo_derecho.position.y - (configuralmente.largo_de_brazo / 2),
            z: localmente.esfera_de_hombro_derecho.position.z
        });
        Object.assign(cilindro_de_brazo_derecho, {
            material: utilmente.fabricar_material_de_color("#333333", "material_de_cilindro_de_brazo_derecho")
        });
        Object.assign(localmente, {
            cilindro_de_brazo_derecho
        });
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
            x: 0,
            y: localmente.cilindro_de_brazo_derecho.position.y - (configuralmente.largo_de_brazo / 2),
            z: localmente.esfera_de_hombro_izquierdo.position.z
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
    Crear_esfera_de_mano_derecha: {
        const esfera_de_mano_derecha = BABYLON.MeshBuilder.CreateSphere("esfera_de_mano_derecha", {
            diameter: configuralmente.ancho_de_bolas,
            segments: 32,
            width: 0.4,
            height: 0.1,
            depth: 0.2,
        }, escena);
        Object.assign(esfera_de_mano_derecha.position, {
            x: 0,
            y: localmente.cilindro_de_brazo_derecho.position.y - (configuralmente.largo_de_brazo / 2),
            z: localmente.esfera_de_hombro_derecho.position.z
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
            x: 0,
            y: localmente.esfera_de_cuello.position.y - (configuralmente.largo_de_columna / 2),
            z: 0
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
            x: 0,
            y: localmente.cilindro_de_columna.position.y - (configuralmente.largo_de_columna / 2),
            z: 0
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
            x: 0,
            y: localmente.cilindro_de_columna.position.y - (configuralmente.largo_de_columna / 2),
            z: 0
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
            x: 0,
            y: localmente.cilindro_de_cadera.position.y,
            z: configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.cilindro_de_cadera.position.y,
            z: -configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.esfera_de_cadera_izquierda.position.y - (configuralmente.largo_de_antepierna / 2),
            z: -configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.esfera_de_cadera_derecha.position.y - (configuralmente.largo_de_antepierna / 2),
            z: +configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.cilindro_de_antepierna_derecha.position.y - (configuralmente.largo_de_antepierna / 2),
            z: +configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.cilindro_de_antepierna_derecha.position.y - (configuralmente.largo_de_antepierna / 2),
            z: -configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.esfera_de_rodilla_izquierda.position.y - (configuralmente.largo_de_pierna / 2),
            z: -configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.esfera_de_rodilla_derecha.position.y - (configuralmente.largo_de_pierna / 2),
            z: +configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.cilindro_de_pierna_izquierda.position.y - (configuralmente.largo_de_pierna / 2),
            z: +configuralmente.ancho_de_cadera
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
            x: 0,
            y: localmente.cilindro_de_pierna_derecha.position.y - (configuralmente.largo_de_pierna / 2),
            z: -configuralmente.ancho_de_cadera
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
    Configuraciones_finales: {
        Configuraciones_de_camara: {
            camara.setTarget(localmente.esfera_de_cabeza);
            camara.alpha = BABYLON.Tools.ToRadians(-40);
            camara.beta = BABYLON.Tools.ToRadians(75);
            camara.radius = 7;
        }
    }
    return escena;
};