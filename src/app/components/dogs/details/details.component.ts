import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MascotaService} from "../../../services/mascota.service";
import {MascotaCl} from "../../../interfaces/mascota-cl";
import {TratamientoCl} from "../../../interfaces/tratamiento-cl";
import {TratamientoService} from "../../../services/tratamiento.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private router: Router, private route : ActivatedRoute, private mascotaService : MascotaService, private tratamientoService : TratamientoService) {}
  tratamientosMascota : TratamientoCl[] = [];
  mascota : MascotaCl | undefined;

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      this.mascotaService.getMascotaById(id).subscribe((mascota) => {
        this.mascota = mascota;
      });
      this.tratamientoService.getTratamientoMascota(id).subscribe((tratamientos) => {
        this.tratamientosMascota = tratamientos;
      });
    });
  }
}
