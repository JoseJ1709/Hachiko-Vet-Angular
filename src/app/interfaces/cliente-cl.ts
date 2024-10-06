import { MascotaCl } from './mascota-cl';

export class ClienteCl {
  public id?: number;
  public cedula: number;
  public nombre: string;
  public correo: string;
  public celular: number;
  public mascotasList?: MascotaCl[];

  constructor(cedula: number, nombre: string, correo: string, celular: number, mascotasList?: MascotaCl[]) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.correo = correo;
    this.celular = celular;
    this.mascotasList = mascotasList;
  }
}
