import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ClienteCl} from "../../../interfaces/cliente-cl";
import {ActivatedRoute, Router} from "@angular/router";
import {ClienteService} from "../../../services/cliente.service";

@Component({
  selector: 'app-registro-client',
  templateUrl: './registro-client.component.html',
  styleUrls: ['./registro-client.component.css']
})
export class RegistroClientComponent implements OnInit, OnChanges {
  @Input() userRole: string = 'editar';

  clienteToEdit: ClienteCl | undefined;
  formCliente: ClienteCl = new ClienteCl(0,'','',0,undefined);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.userRole = 'editar';
        this.clienteService.getClienteById(id).subscribe(cliente => {
          console.log(cliente);
          this.clienteToEdit = cliente;
          if (this.clienteToEdit) {
            this.formCliente = {...this.clienteToEdit };
          }
        });
      }
    });
  }

  ngOnChanges(changes: any): void {
    if (changes['clienteToEdit'] && this.clienteToEdit) {
      this.formCliente = {...this.clienteToEdit };
    }
  }

  addClienteForm(): void {
    if (this.formCliente.id) {
      this.clienteService.updateCliente(this.formCliente);
    } else {
      this.clienteService.addCliente(this.formCliente);
    }
    this.formCliente = new ClienteCl(0,'','',0,undefined);
    this.router.navigate(['/clientes']);
  }
}
