import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ClienteCl} from "../../../interfaces/cliente-cl";
import {ClienteService} from "../../../services/cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements OnInit{
  clientes: ClienteCl[] = [];

  constructor(private clienteService: ClienteService, private router: Router, ) {}

  ngOnInit(): void {
    this.refreshClientes();
  }

  deleteCliente(id: number): void {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    this.clienteService.deleteCliente(id);

  }

  editCliente(cliente: ClienteCl): void {
    const updatedCliente: ClienteCl = cliente;
    const index = this.clientes.findIndex(c => c.id === updatedCliente.id);
    if (index !== -1) {
      this.clientes[index] = updatedCliente;
    }
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
