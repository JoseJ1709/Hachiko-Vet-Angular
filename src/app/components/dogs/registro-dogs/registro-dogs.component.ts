import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaCl } from '../../../interfaces/mascota-cl';
import { MascotaService } from '../../../services/mascota.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClienteCl} from "../../../interfaces/cliente-cl";
import {ClienteService} from "../../../services/cliente.service";

@Component({
  selector: 'app-registro-dogs',
  templateUrl: './registro-dogs.component.html',
  styleUrls: ['./registro-dogs.component.css']
})
export class RegistroDogsComponent implements OnInit, OnChanges {
  @Input() userRole: string = 'editar';

  mascotaToEdit: MascotaCl | undefined;
  formMascota: MascotaCl = new MascotaCl('', '', 0, 0, '', false, '');
  clientes:ClienteCl[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mascotaService: MascotaService,private clienteService:ClienteService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      this.clienteService.getClientes().subscribe(
        (clientes) => {
          this.clientes = clientes;
        });
      if (id) {
        this.userRole = 'editar';
        this.mascotaService.getMascotaById(id).subscribe(mascota => {
          this.mascotaToEdit = mascota;
          if (this.mascotaToEdit) {
            this.formMascota = {...this.mascotaToEdit };
          }
        });
      }
      else {
        this.clienteService.getClientes().subscribe(
          (clientes) => {
          this.clientes = clientes;
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mascotaToEdit'] && this.mascotaToEdit) {
      this.formMascota = {...this.mascotaToEdit };
    }
  }

  addMascotaForm(): void {
    if (this.formMascota.cliente && this.formMascota.cliente.id) {
      if (this.formMascota.id) {
        this.mascotaService.updateMascota(this.formMascota, this.formMascota.cliente.id);
      } else {
        this.mascotaService.addMascota(this.formMascota, this.formMascota.cliente.id);
      }
    }
    this.formMascota = new MascotaCl('', '', 0, 0, '', false, '');
    this.router.navigate(['/mascotas']);
  }

}
