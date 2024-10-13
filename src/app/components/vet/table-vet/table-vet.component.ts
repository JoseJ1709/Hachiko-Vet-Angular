import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VeterinarioCl} from "../../../interfaces/veterinario-cl";
import {VeterinarioService} from "../../../services/veterinario.service";

@Component({
  selector: 'app-table-vet',
  templateUrl: './table-vet.component.html',
  styleUrls: ['./table-vet.component.css']
})
export class TableVetComponent implements OnInit{
  veterinarios: VeterinarioCl[] = [];

  constructor(private veterinarioService : VeterinarioService, private router: Router) {}

  ngOnInit(): void {
    this.refreshVeterinarios();
  }

  deleteVeterinario(id: number): void {
    this.veterinarios = this.veterinarios.filter(veterinario => veterinario.id !== id);
    this.veterinarioService.deleteVeterinario(id);

  }

  editVeterinario(veterinario: VeterinarioCl): void {
    const updatedVeterinario: VeterinarioCl = veterinario;
    const index = this.veterinarios.findIndex(c => c.id === updatedVeterinario.id);
    if (index !== -1) {
      this.veterinarios[index] = updatedVeterinario;
    }
    this.router.navigate(['/registro-v'], { queryParams: { id: veterinario.id } });
  }

  refreshVeterinarios(): void {
    this.router.navigate(['/veterinarios']);
    this.veterinarioService.getVeterinarios().subscribe(
      (veterinarios) => {
        this.veterinarios = veterinarios;
      });
  }


}
