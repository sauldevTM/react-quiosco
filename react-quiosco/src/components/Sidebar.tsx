import { useQuiosco } from "../hooks";
import RowCategorias from "./RowCategorias";

function Sidebar() {
  const { categorias } = useQuiosco();

  return (
    <div className="md:w-72">
      <div className="p-4">
        <img className="w-40" src="img/logo.svg" alt="imagen logotipo" />
      </div>

      <div className="mt-10">
        {categorias.map((categoria) => (
          <RowCategorias categorias={categoria} key={categoria.id} />
        ))}
      </div>

      <div className="my-5 py-5">
        <button
          type="button"
          className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
        >
          Cancelar Orden
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
