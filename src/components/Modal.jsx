import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";
const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setConcepto(gastoEditar.concepto);
      setMonto(gastoEditar.monto);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});

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

    guardarGasto({ concepto, monto, categoria, id, fecha });
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
        <legend>{gastoEditar.concepto ? "Editar Gasto" : "Nuevo Gasto"}</legend>
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
            onChange={(e) => setMonto(Number(e.target.value))}
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
        <input
          type="submit"
          value={gastoEditar.concepto ? "Guardar Cambios" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
