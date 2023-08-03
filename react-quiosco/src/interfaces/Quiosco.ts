export type categories = {
  icono: string;
  nombre: string;
  id: number;
};

export type product = {
  nombre: string;
  precio: number;
  imagen: string;
  categoria_id: number;
  id: number;
};

export interface pedido extends product {
  cantidad: number;
}
