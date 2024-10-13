import { Component } from '@angular/core';
import {MascotaService} from "../../../services/mascota.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-vete',
  templateUrl: './login-vete.component.html',
  styleUrls: ['./login-vete.component.css']
})
export class LoginVeteComponent {
  cedula : number = 0;
  contrase : string = '';
  constructor(    private mascotaService: MascotaService, private router: Router, private route : ActivatedRoute) {
  }

  checkLogin(){
    this.router.navigate(['/veterinarios']);
  }
}

