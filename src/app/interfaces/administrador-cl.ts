export class AdministradorCl {
  public id?: number;
  public usuario: string;
  public password: string;

  constructor(usuario: string, password: string) {
    this.usuario = usuario;
    this.password = password;
  }
}
