import React from "react";
import { formatearFecha } from "../helpers";

const Gasto = ({ gasto }) => {
  const { categoria, concepto, monto, id, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        {/*Imagen*/}
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{concepto}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${monto}</p>
    </div>
  );
};

export default Gasto;
