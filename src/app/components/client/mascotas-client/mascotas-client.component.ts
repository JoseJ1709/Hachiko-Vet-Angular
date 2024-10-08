import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../../services/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MascotaCl} from "../../../interfaces/mascota-cl";
import {ClienteCl} from "../../../interfaces/cliente-cl";

@Component({
  selector: 'app-mascotas-client',
  templateUrl: './mascotas-client.component.html',
  styleUrls: ['./mascotas-client.component.css']
})
export class MascotasClientComponent implements OnInit {
  mascotas : MascotaCl[] = [];
  client : ClienteCl | undefined;

  constructor(   private router: Router,
                 private route: ActivatedRoute,
                 private clienteService: ClienteService) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.clienteService.mascotasClientes(id).subscribe(mascotas => {
          this.mascotas = mascotas;
          console.log(this.mascotas);
        });
      }
      if (id){
        this.clienteService.getClienteById(id).subscribe(cliente => {
          this.client = cliente;
        });
      }
    });
  }
}
