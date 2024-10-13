import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaCl } from '../../../interfaces/mascota-cl';
import { MascotaService } from '../../../services/mascota.service';
import {ClienteCl} from "../../../interfaces/cliente-cl";


@Component({
  selector: 'app-table-dogs',
  templateUrl: './table-dogs.component.html',
  styleUrls: ['./table-dogs.component.css']
})
export class TableDogsComponent implements OnInit {
  mascotas: MascotaCl[] = [];

  constructor(private mascotaService: MascotaService, private router: Router) {}

  ngOnInit(): void {
    this.refreshMascotas();
  }

  deleteMascota(id: number): void {
    this.mascotas = this.mascotas.filter(mascota => mascota.id !== id);
    this.mascotaService.deleteMascota(id);

  }

  editMascota(mascota: MascotaCl): void {
    const updatedMascota: MascotaCl = mascota;
    const index = this.mascotas.findIndex(c => c.id === updatedMascota.id);
    if (index !== -1) {
      this.mascotas[index] = updatedMascota;
    }
    this.router.navigate(['/registro-m'], { queryParams: { id: mascota.id } });
  }

  refreshMascotas(): void {
    this.router.navigate(['/mascotas']);
    this.mascotaService.getMascotas().subscribe(
      (mascotas) => {
      this.mascotas = mascotas;
    });
  }

  showMascota(id: number | undefined): void {
    this.router.navigate(['/detalles-mascota'], { queryParams: { id } });
  }
}
