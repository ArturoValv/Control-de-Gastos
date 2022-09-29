import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";
const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  const [mensaje, setMensaje] = useState("");
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([concepto, monto, categoria].includes("")) {
      setTimeout(() => {
        setMensaje("Todos los campos son obligatorios");
      }, 3000);
      return;
    }

    guardarGasto({ concepto, monto, categoria });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}
        <div className="campo">
          <label htmlFor="concepto">Concepto del Gasto</label>
          <input
            id="concepto"
            type="text"
            placeholder="Añade el Concepto del Gasto"
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="monto">Monto</label>
          <input
            id="monto"
            type="number"
            placeholder="Añade el Monto del Gasto: ej. 300"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            name=""
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="hogar">Hogar</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="gastos">Gastos Varios</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
