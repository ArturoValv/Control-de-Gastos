import React from "react";

const Gasto = ({ gasto }) => {
  const { categoria, concepto, monto, id } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{concepto}</p>
        </div>
      </div>
    </div>
  );
};

export default Gasto;
