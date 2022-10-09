import Gasto from "./Gasto";

const ListadoGastos = ({ gastos }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No Hay Gastos aún"}</h2>

      {gastos.map((gasto) => (
        <Gasto gasto={gasto} />
      ))}
    </div>
  );
};

export default ListadoGastos;
