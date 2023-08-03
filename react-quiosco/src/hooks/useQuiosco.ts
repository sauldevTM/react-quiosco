import { useContext } from "react";
import { QuioscoContext } from "../context/QuioscoProvider";

const useQuiosco = () => {
  const {
    categorias,
    categoriaActual,
    modal,
    producto,
    pedido,
    total,
    handleClickCategoria,
    handleClickModal,
    handleSetProducto,
    handleAgregarPedido,
    handleEditarCantidad,
    handlerEliminarProductoPedido,
  } = useContext(QuioscoContext);

  return {
    categorias,
    categoriaActual,
    modal,
    producto,
    pedido,
    total,
    handleClickCategoria,
    handleClickModal,
    handleSetProducto,
    handleAgregarPedido,
    handleEditarCantidad,
    handlerEliminarProductoPedido,
  };
};

export default useQuiosco;
