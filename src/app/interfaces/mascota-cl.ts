import { ClienteCl } from './cliente-cl';

export class MascotaCl {
  public id?: number;
  public nombre: string;
  public raza: string;
  public edad: number;
  public peso: number;
  public enfermedad: string;
  public estado: boolean;
  public foto: string;
  public cliente?: ClienteCl;

  constructor(nombre: string, raza: string, edad: number, peso: number, enfermedad: string, estado: boolean, foto: string, cliente?: ClienteCl) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.peso = peso;
    this.enfermedad = enfermedad;
    this.estado = estado;
    this.foto = foto;
    this.cliente = cliente;
  }
}
