import { product } from "../interfaces";
import { useQuiosco } from "../hooks";
import { formatearDinero } from "../helpers";

interface ProductoProps {
  producto: product;
}

function Producto({ producto }: ProductoProps) {
  const { handleClickModal, handleSetProducto } = useQuiosco();

  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-3 shadow bg-white">
      <img src={`/img/${imagen}.jpg`} alt={`imagen ${nombre}`} />

      <div className="p-5">
        <h3 className="font-bold text-2xl">{nombre}</h3>

        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Producto;
