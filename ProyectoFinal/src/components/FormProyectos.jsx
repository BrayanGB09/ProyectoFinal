import React, { useState } from 'react';

function FormProyectos () {
  
  const convertirBase64 = (archivos) => {
    Array.from(archivos).forEach(archivo => {
      let reader = new FileReader ();
      reader.readAsDataURL(archivo);
      reader.onload = function () {
        let arregloAuxiliar = [];
        let base64 = reader.result;
        //console.log(base64);
        arregloAuxiliar = base64.split (',')
        console.log(arregloAuxiliar[1]);
        
      }
    })
  }

  return (
    <div>
      <div>
        <input className="input" type="text" id="nombre" name="nombre" placeholder="Agregar Proyecto" /*value={nombre} onChange={cargaNombre} required*/ />

          <br />
          <br />

        <input className="input" type="text" id="tarea"  name="tarea" placeholder="Descripción del Proyecto" /*value={tarea} onChange={cargaTarea} required*/ />
      </div>
      
      <h2>Subir Imagen</h2>
      <input type="file" multiple onChange = {(e) => convertirBase64(e.target.files)} />

      <button>Guardar</button>
    </div>
  );
}

export default FormProyectos