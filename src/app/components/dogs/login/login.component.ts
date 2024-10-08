import {Component, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MascotaService} from "../../../services/mascota.service";

@Component({
  selector: 'app-login-dogs',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentDogs {

  cedula : number = 0;
  contrase : string = '';
  constructor(    private mascotaService: MascotaService, private router: Router, private route : ActivatedRoute) {
  }

  checkLogin(){
   this.router.navigate(['/mascotas']);
  }
}
