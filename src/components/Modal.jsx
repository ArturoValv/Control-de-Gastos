import CerrarBtn from "../img/cerrar.svg";
const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>
      <form
        action=""
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="concepto">Concepto del Gasto</label>
          <input
            id="concepto"
            type="text"
            placeholder="Añade el Concepto del Gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="monto">Monto</label>
          <input
            id="monto"
            type="number"
            placeholder="Añade el Monto del Gasto: ej. 300"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select name="" id="categoria">
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
