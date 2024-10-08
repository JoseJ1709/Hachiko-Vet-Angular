import {Component } from '@angular/core';
import {ClienteService} from "../../../services/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClienteCl} from "../../../interfaces/cliente-cl";

@Component({
  selector: 'app-component-client',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentClient  {

  cedula : number = 0;
  constructor(    private clienteService: ClienteService, private router: Router, private route : ActivatedRoute) {
  }
  cliente : ClienteCl | undefined;
  checkLogin(){
    console.log(this.cedula);
    this.clienteService.loginCLiente(this.cedula).subscribe((res) => {
      if(res){
        this.cliente = res;
        this.router.navigate(['/mascotas-cliente'], {queryParams: { id: this.cliente?.id}});
      }else{
        alert('Cedula incorrecta');
      }
    });
  }
}
