import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaCl } from '../../interfaces/mascota-cl';
import { MascotaService } from '../../services/mascota.service';

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
    this.mascotaService.deleteMascota(id);
    this.refreshMascotas();
  }

  editMascota(mascota: MascotaCl): void {
    this.router.navigate(['/registro-m'], { queryParams: { id: mascota.id } });
  }

  refreshMascotas(): void {
    this.mascotas = this.mascotaService.getMascotas();
  }
}
