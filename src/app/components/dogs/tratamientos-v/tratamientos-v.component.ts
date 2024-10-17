import { Component } from '@angular/core';
import {VeterinarioService} from "../../../services/veterinario.service";
import {TratamientoService} from "../../../services/tratamiento.service";
import {TratamientoCl} from "../../../interfaces/tratamiento-cl";
import {VeterinarioCl} from "../../../interfaces/veterinario-cl";

@Component({
  selector: 'app-tratamientos-v',
  templateUrl: './tratamientos-v.component.html',
  styleUrls: ['./tratamientos-v.component.css']
})
export class TratamientosVComponent {
  veterinario : VeterinarioCl | undefined;
  id :number = 0;
  cedulaVeterinario : string = '';
  tratamientosVeterinario : TratamientoCl[] = [];
  constructor( private veterinarioService : VeterinarioService , private tratamientoService : TratamientoService ) { }
  buscarVeterinario(): void {
    if (this.cedulaVeterinario) {
      this.veterinarioService.getVeterinarioByCedula(this.cedulaVeterinario).subscribe(
        (veterinario) => {
          this.veterinario = veterinario;
          this.id = veterinario.id!;
          this.tratamientoService.getTratamientosVeterinario(this.id).subscribe(
            (tratamientos) => {
              this.tratamientosVeterinario = tratamientos;
            });
        });

    }

  }
}
