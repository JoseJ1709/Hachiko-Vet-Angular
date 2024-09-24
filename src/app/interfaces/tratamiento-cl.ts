import {VeterinarioCl} from './veterinario-cl';
import {MascotaCl} from "./mascota-cl";
import {DrogaCl} from "./droga-cl";
export class TratamientoCl{
  public id?: number;
  public veterinario: VeterinarioCl;
  public mascota: MascotaCl;
  public droga: DrogaCl;
  public fecha: Date;

  constructor(veterinario: VeterinarioCl, mascota: MascotaCl, droga: DrogaCl, fecha: Date) {
    this.veterinario = veterinario;
    this.mascota = mascota;
    this.droga = droga;
    this.fecha = fecha;
  }
}
