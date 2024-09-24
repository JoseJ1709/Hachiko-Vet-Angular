import { Injectable } from '@angular/core';
import { MascotaCl } from '../interfaces/mascota-cl';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private mascotas: MascotaCl[] = [
    { id: 1, nombre: 'Max', raza: 'Labrador', edad: 5, peso: 30, enfermedad: 'None', estado: true, foto: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, nombre: 'Bella', raza: 'Beagle', edad: 3, peso: 20, enfermedad: 'None', estado: true, foto: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 3, nombre: 'Charlie', raza: 'Poodle', edad: 4, peso: 25, enfermedad: 'None', estado: true, foto: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 4, nombre: 'Luna', raza: 'German Shepherd', edad: 6, peso: 35, enfermedad: 'None', estado: true, foto:"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { id: 5, nombre: 'Rocky', raza: 'Bulldog', edad: 2, peso: 22, enfermedad: 'None', estado: true, foto: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 4, nombre: 'Luna', raza: 'German Shepherd', edad: 6, peso: 35, enfermedad: 'None', estado: true, foto:"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { id: 4, nombre: 'Luna', raza: 'German Shepherd', edad: 6, peso: 35, enfermedad: 'None', estado: true, foto:"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { id: 4, nombre: 'Luna', raza: 'German Shepherd', edad: 6, peso: 35, enfermedad: 'None', estado: true, foto:"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { id: 4, nombre: 'Luna', raza: 'German Shepherd', edad: 6, peso: 35, enfermedad: 'None', estado: true, foto:"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { id: 4, nombre: 'Luna', raza: 'German Shepherd', edad: 6, peso: 35, enfermedad: 'None', estado: true, foto:"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}

  ];

  getMascotas(): MascotaCl[] {
    return this.mascotas;
  }

  addMascota(mascota: MascotaCl): void {
    mascota.id = this.mascotas.length ? Math.max(...this.mascotas.map(m => m.id!)) + 1 : 1;
    this.mascotas.push(mascota);
  }

  deleteMascota(id: number): void {
    this.mascotas = this.mascotas.filter(mascota => mascota.id !== id);
  }

  updateMascota(updatedMascota: MascotaCl): void {
    const index = this.mascotas.findIndex(mascota => mascota.id === updatedMascota.id);
    if (index !== -1) {
      this.mascotas[index] = updatedMascota;
    }
  }

  getMascotaById(id: number): MascotaCl | undefined {
    return this.mascotas.find(mascota => mascota.id === id);
  }
}
