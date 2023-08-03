const formatearDinero = (cantidad: number) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export default formatearDinero;
