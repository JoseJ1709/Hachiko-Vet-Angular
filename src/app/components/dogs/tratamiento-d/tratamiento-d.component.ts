import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../../services/cliente.service";
import {MascotaService} from "../../../services/mascota.service";
import {DrogaService} from "../../../services/droga.service";
import {VeterinarioService} from "../../../services/veterinario.service";
import {VeterinarioCl} from "../../../interfaces/veterinario-cl";
import {MascotaCl} from "../../../interfaces/mascota-cl";
import {DrogaCl} from "../../../interfaces/droga-cl";
import {ActivatedRoute, Router} from "@angular/router";
import {TratamientoService} from "../../../services/tratamiento.service";
import {TratamientoCl} from "../../../interfaces/tratamiento-cl";

@Component({
  selector: 'app-tratamiento-d',
  templateUrl: './tratamiento-d.component.html',
  styleUrls: ['./tratamiento-d.component.css']
})
export class TratamientoDComponent implements OnInit{

  formVet : VeterinarioCl[] = [];
  formMascota : MascotaCl[] = [];
  formDroga : DrogaCl[] = [];
  formTratamiento: TratamientoCl = new TratamientoCl(new VeterinarioCl("","","","","",0), new MascotaCl("","",0,0,"",false,""), new DrogaCl("",0,0,0,0), new Date());

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private veterinarioService : VeterinarioService,
    private mascotaService : MascotaService,
    private drograService : DrogaService, private tratamientoService : TratamientoService ) { }
  today: string = new Date().toISOString().split('T')[0];

  ngOnInit(): void {
      this.veterinarioService.getVeterinarios().subscribe( (veterinarios) => {
        this.formVet = veterinarios;
      });
      this.mascotaService.getMascotas().subscribe( (mascotas) => {
        this.formMascota = mascotas;
      });
      this.drograService.getDrogas().subscribe( (drogas) => {
        this.formDroga = drogas;
      });
  }

  addTratamiento(): void {
    const fechaTratamiento = new Date(this.formTratamiento.fecha);
    const formattedDate = fechaTratamiento.toISOString().split('T')[0];
    console.log(this.formTratamiento.droga.id)
    if (this.formTratamiento.mascota.id && this.formTratamiento.veterinario.id && this.formTratamiento.droga.id) {
      console.log("enviando ")
        this.tratamientoService.addTratamiento(
          this.formTratamiento.mascota.id,
          this.formTratamiento.veterinario.id,
          this.formTratamiento.droga.id,
          formattedDate
        )

    }
  }
}
