window.Homactografo3d.clase.camara = {
    estandar: class extends window.Homactografo3d.clase.objeto_de_escena {
        constructor(...args) {
            this.original = new BABYLON.ArcRotateCamera(...args);
        }
    }
};