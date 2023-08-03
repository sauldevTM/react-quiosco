import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { categories, pedido, product } from "../interfaces";

interface QuioscoProviderProps {
  children: React.ReactNode;
}

interface QuioscoContextProps {
  categorias: categories[];
  categoriaActual: categories;
  modal: boolean;
  producto?: product;
  pedido: pedido[];
  total: number;
  handleClickCategoria: (id: number) => void;
  handleClickModal: () => void;
  handleSetProducto: (producto: product) => void;
  handleAgregarPedido: (pedido: pedido) => void;
  handleEditarCantidad: (id: number) => void;
  handlerEliminarProductoPedido: (id: number) => void;
}

export const QuioscoContext = createContext({} as QuioscoContextProps);

function QuioscoProvider({ children }: QuioscoProviderProps) {
  const [categorias, setCategorias] = useState<categories[]>([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState<product>();
  const [pedido, setPedido] = useState<pedido[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = pedido.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotal(total);
  }, [pedido]);

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios.get("http://localhost/api/categorias");
      setCategorias([...data.data]);
      setCategoriaActual({ ...data.data[0] });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const handleClickCategoria = (id: number) => {
    const nuevaCategoriaActual = categorias.filter(
      (categoria) => categoria.id === id
    )[0];
    setCategoriaActual(nuevaCategoriaActual);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProducto = (producto: product) => {
    setProducto(producto);
  };

  const handleAgregarPedido = (nuevoPedido: pedido) => {
    if (pedido.some((item) => item.id === nuevoPedido.id)) {
      const pedidoActualizado = pedido.map((item) =>
        item.id === nuevoPedido.id ? nuevoPedido : item
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado Correctamente");
    } else {
      setPedido([...pedido, nuevoPedido]);
      toast.success("Agregado al pedido");
    }
  };

  const handleEditarCantidad = (id: number) => {
    const productoActualizar = pedido.filter(
      (producto) => producto.id === id
    )[0];
    setProducto(productoActualizar);
    setModal(!modal);
  };

  const handlerEliminarProductoPedido = (id: number) => {
    const pedidoActualizado = pedido.filter((item) => item.id !== id);
    setPedido(pedidoActualizado);
    toast.success("Eliminado del pedido");
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        modal,
        producto,
        pedido,
        handleClickCategoria,
        handleClickModal,
        handleSetProducto,
        handleAgregarPedido,
        handleEditarCantidad,
        handlerEliminarProductoPedido,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
}

export default QuioscoProvider;
