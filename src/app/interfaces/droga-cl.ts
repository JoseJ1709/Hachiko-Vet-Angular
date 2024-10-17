export class DrogaCl {
  public id?: number;
  public nombre: string;
  public precioCompra: number;
  public precioVenta: number;
  public uni_disponibles: number;
  public uni_vendidas: number;

  constructor(nombre: string, precioCompra: number, precioVenta: number, uni_disponibles: number, uni_vendidas: number) {
    this.nombre = nombre;
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.uni_disponibles = uni_disponibles;
    this.uni_vendidas = uni_vendidas;
  }

}
