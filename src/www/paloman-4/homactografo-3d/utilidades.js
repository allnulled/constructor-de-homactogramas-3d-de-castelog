window.Homactografo3d.utilidades = {
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