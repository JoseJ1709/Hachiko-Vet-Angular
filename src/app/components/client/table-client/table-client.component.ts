import { Component } from '@angular/core';
import {ClienteCl} from "../../../interfaces/cliente-cl";
import {ClienteService} from "../../../services/cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent {
  clientes: ClienteCl[] = [];

  constructor(private clienteService: ClienteService, private router: Router, ) {}

  ngOnInit(): void {
    this.refreshClientes();
  }

  deleteCliente(id: number): void {
    this.clienteService.deleteCliente(id);
    this.refreshClientes();
  }

  editCliente(cliente: ClienteCl): void {
    this.router.navigate(['/registro-c'], { queryParams: { id: cliente.id } });
  }

  refreshClientes(): void {
    this.router.navigate(['/clientes']);
    this.clienteService.getClientes().subscribe(
      (clientes) => {
      this.clientes = clientes;
    });
  }
}
