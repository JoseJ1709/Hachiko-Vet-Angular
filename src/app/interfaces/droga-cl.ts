export class DrogaCl {
  public id?: number;
  public nombre: string;
  public precioCompra: number;
  public precioVenta: number;
  public unidadesDisponibles: number;
  public unidadesVendidas: number;

  constructor(nombre: string, precioCompra: number, precioVenta: number, unidadesDisponibles: number, unidadesVendidas: number) {
    this.nombre = nombre;
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.unidadesDisponibles = unidadesDisponibles;
    this.unidadesVendidas = unidadesVendidas;
  }
}
