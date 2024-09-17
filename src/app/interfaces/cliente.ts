import { Mascota } from './mascota';

export interface Cliente {
  id?: number;
  cedula: number;
  nombre: string;
  correo: string;
  celular: number;
  mascotasList: Mascota[];
}
