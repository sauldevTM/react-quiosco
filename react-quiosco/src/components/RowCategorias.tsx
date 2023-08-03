import { useQuiosco } from "../hooks";
import { categories } from "../interfaces";

export interface CategoriesProps {
  categorias: categories;
}

function RowCategorias({ categorias }: CategoriesProps) {
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  const { nombre, icono, id } = categorias;
  return (
    <div
      className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 ${
        categoriaActual.id == id && "bg-amber-400"
      }`}
    >
      <img
        src={`/img/icono_${icono}.svg`}
        alt="Imagen Icono"
        className="w-12"
      />
      <button
        className="text-lg font-bold"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
}

export default RowCategorias;
