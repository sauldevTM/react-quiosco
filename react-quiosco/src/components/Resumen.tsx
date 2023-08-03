import { formatearDinero } from "../helpers";
import { useQuiosco } from "../hooks";
import ResumenProducto from "./ResumenProducto";

function Resumen() {
  const { pedido, total } = useQuiosco();

  const hasPedido = () => pedido.length === 0;

  return (
    <aside className="w-72">
      <h1 className="text-4xl font-black">Mi Pedidio</h1>

      <p className="text-lg my-5">
        Aquí podrás ver el resumen y totales de tu pedido
      </p>

      <div>
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">No hay pedidos aún</p>
        ) : (
          pedido.map((producto) => (
            <ResumenProducto producto={producto} key={producto.id} />
          ))
        )}
      </div>

      <p className="text-xl mt-10">Total: {formatearDinero(total)}</p>

      <form className="w-full">
        <div className="mt-5">
          <input
            type="submit"
            className={`bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer 
                      ${hasPedido() && "opacity-50 cursor-not-allowed"}`}
            value="Confirmar Pedido"
            disabled={hasPedido()}
          />
        </div>
      </form>
    </aside>
  );
}

export default Resumen;
