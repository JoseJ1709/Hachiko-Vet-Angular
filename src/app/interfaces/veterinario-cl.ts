export class VeterinarioCl {
  public id?: number;
  public nombre: string;
  public cedula: string;
  public contraseña: string;
  public especialidad: string;
  public foto: string;
  public num_atenciones: number;

  constructor(nombre: string, cedula: string, contraseña: string, especialidad: string, foto: string, num_atenciones: number) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.contraseña = contraseña;
    this.especialidad = especialidad;
    this.foto = foto;
    this.num_atenciones = num_atenciones;
  }
}
