
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🧍‍♂️ Homactogramas 3D de Calo</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <style>\n      .canvas_box {\n        width: 100%;\n        text-align: center;\n        padding-top: 20px;\n        padding-bottom: 20px;\n      }\n      .w_100 { width: 100%; }\n      textarea,\n      pre {\n        -moz-tab-size : 2;\n        -o-tab-size : 2;\n        tab-size : 2;\n      }\n    </style>\n    <script src=\"./babylonjs.setup.js\"></script>\n    <script src=\"./calo.js\"></script>\n    <script src=\"./castelog-parser.js\"></script>\n    <script src=\"./homactografo.js\"></script>\n</head>","body":"<body class=\"win7\">\n  <div style=\"padding:4px;\">\n    <div class=\"window\">\n      <div class=\"title-bar\">\n        <div class=\"title-bar-text\">\n          ✨ Homactógrafo 3D de Castelog ✨\n        </div>\n      </div>\n      <div class=\"window-body\" style=\"overflow-y: hide;\">\n        <div style=\"overflow-y: scroll;background-color: #222;box-shadow: 0 0 4px black;\">\n          <div class=\"canvas_box\">\n            <canvas id=\"canvas_for_demo\" class=\"w_100\"></canvas>\n          </div>\n        </div>\n        <div id=\"app\"></div>\n      </div>\n    </div>\n  </div>\n</body>"}}

const ConstructorDeHomactogramas3dDeCastelog = Castelog.metodos.un_componente_vue2("ConstructorDeHomactogramas3dDeCastelog",
  "<div class=\"ConstructorDeHomactogramas3dDeCastelog Component win7\">"
 + "    <div class=\"editor_box\">"
 + "      <div v-if=\"exito_de_compilacion\">"
 + "        <span>✔ La compilación fue exitosa.</span>"
 + "        <details>"
 + "          <summary>Mostrar código</summary>"
 + "          <div>"
 + "            <textarea class=\"w_100\" style=\"min-height: 300px;\" disabled=\"true\" :value=\"codigo_actual_js\"></textarea>"
 + "          </div>"
 + "        </details>"
 + "      </div>"
 + "      <div v-if=\"exito_de_ejecucion\">"
 + "        <span>✔ La ejecución fue exitosa.</span>"
 + "        <pre>{{ JSON.stringify(exito_de_ejecucion, null, 2) }}</pre>"
 + "      </div>"
 + "      <div v-if=\"error\">"
 + "        <span>✘ Error: {{ error.message }}</span>"
 + "      </div>"
 + "      <div style=\"position: relative;\">"
 + "        <textarea style=\"font-family: monospace; font-size: 9px; resize: vertical; min-height: 900px;\" class=\"w_100\" v-model=\"codigo_actual\"></textarea>"
 + "        <div style=\"position: absolute; top: 5px; right: 5px; left: auto; bottom: auto;\">"
 + "          <button style=\"opacity: 0.8;\" v-on:click=\"() => compilar(true)\">Compilar</button>"
 + "          <button style=\"opacity: 0.8;\" v-on:click=\"() => aplicar()\">Aplicar</button>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { data() {try {
return { codigo_actual_js:"",
codigo_actual:"\nhago entrar.escena(\"Escena_inicial\").activarse().\nhago entrar.objeto_esfera(\"Esfera_inicial\").establecer_textura_de_video(\"../recursos/videos/gatitos.mp4\").\nhago entrar.objeto_suelo(\"Suelo_inicial\").establecer_color(\"#00ba41\").\nhago entrar.persona(\"Protagonista\").\nhago entrar.camara(\"Principal normal\").enfocarse_a(objeto(\"Esfera_inicial\")).\nhago entrar.camara(\"Principal de perfil 1\").moverse({z:0+45}).\nhago entrar.camara(\"Principal de perfil 2\").moverse({z:0-45}).activarse().\nhago entrar.luz(\"Luz inicial 1\").\nhago entrar.sonido(\"Música de fondo\", \"../recursos/sonidos/kiffness-xylophone.mp3\").\n### hago escena(\"Escena_inicial\").establecer_fondo_fijo(\"../recursos/imagenes/nubes2.jpg\").\nhago escena(\"Escena_inicial\").establecer_fondo_panoramico(\"../recursos/hdri/carretera/carretera.env\").\nhago camara(\"Principal normal\").moverse({ x: 5, y: 0, z: 0 }).\nhago objeto(\"Esfera_inicial\").moverse({ x: 1.2, y: 0, z: 0 }).\nhago objeto(\"Suelo_inicial\").establecer_textura(\"../recursos/texture/cesped/cesped1.jpeg\").\nhago sonido(\"Música de fondo\", \"../recursos/sonidos/kiffness-xylophone.mp3\").\nhago persona(\"Protagonista\").rotar.eje({ x: 20, y: 0, z: 0 }).\nhago persona(\"Protagonista\").rotar.eje({ x: 20, y: 0, z: 0 }).\nhago entrar.evento_en_bucle(\"Modificar esfera inicial\", una lambda con () donde hago objeto(\"Esfera_inicial\").moverse({ x: 0.001, y: 0, z: 0 })).\nretorno escena(\"Escena_inicial\").$scene.\n".trim(  ),
exito_de_ejecucion:undefined,
exito_de_compilacion:undefined,
error:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_exito_de_ejecucion:function( resultado ) {try {
this.error = undefined;
this.exito_de_compilacion = undefined;
this.exito_de_ejecucion = resultado;
this.exito_de_ejecucion_timeout_id = setTimeout( () => {try {
this.exito_de_ejecucion = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 10 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
mostrar_exito_de_compilacion:function(  ) {try {
this.error = undefined;
this.exito_de_ejecucion = undefined;
this.exito_de_compilacion = true;
this.exito_timeout_id = setTimeout( () => {try {
this.exito_de_compilacion = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 10 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
mostrar_error:function( error ) {try {
console.log(error);
this.exito_de_ejecucion = undefined;
this.exito_de_compilacion = undefined;
this.error = error;
this.error_timeout_id = setTimeout( () => {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 10 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
compilar:function( mostrar_exito ) {try {
const codigo_calo = this.codigo_actual;
const codigo_js = Castelog_parser.parse( codigo_calo );
const homactografo = this.$window.homactografo3d;
const codigo_temporal = `((homactografo, componente) => homactografo.representar(function async () { try { const {entrar,salir,elemento,elementos,escena,escenas,camara,camaras,luz,luces,persona,personas,objeto,objetos,sonido,sonidos} = homactografo.selectores(); ${codigo_js} } catch(error) { componente.mostrar_error(error); } }))`;
const codigo_js_final = codigo_temporal;
this.codigo_actual_js = codigo_js_final;
if(mostrar_exito) {
this.mostrar_exito_de_compilacion(  );
}
return codigo_js_final;
} catch(error) {
this.mostrar_error( error );}
},
aplicar:async function() {try {
const homactografo = this.$window.homactografo3d;
const codigo_js = this.compilar(  );
const funcion_js = (await this.$window.eval( codigo_js ));
const resultado = (await funcion_js( homactografo,
this ));
if((!(typeof resultado === 'undefined'))) {
this.mostrar_exito_de_ejecucion( resultado );
}
} catch(error) {
this.mostrar_error( error );}
}
},
mounted() {try {
if(typeof this.$window.Homactografo3D === 'undefined') {
throw new Error( "El Homactógrafo 3D de Castelog requiere tener cargada el «window.Homactografo3D» para funcionar" );
}
const homactografo = new this.$window.Homactografo3D( document.getElementById( "canvas_for_demo" ) );
this.$window.homactografo3d = homactografo;
this.homactografo3d = homactografo;
this.aplicar(  );
return;
setTimeout( () => {try {
this.$window.homactografo3d.pantalla.pintarse(  );
} catch(error) {
console.log(error);
throw error;
}

},
1000 );
const scripts_de_ejemplo = [ "./js/homactogramas/kit.js" ];
for(let index = 0; index < scripts_de_ejemplo.length; index++) {const script_url = scripts_de_ejemplo[ index ];
const script_tag = document.createElement( "script" );
script_tag.src = script_url;
document.body.append( script_tag );}
} catch(error) {
this.mostrar_error( error );}
}
};},
  null);
const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">"
 + "    <router-view></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"Home",
component:ConstructorDeHomactogramas3dDeCastelog,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");