import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClienteService} from "../../../services/cliente.service";
import {VeterinarioService} from "../../../services/veterinario.service";
import {VeterinarioCl} from "../../../interfaces/veterinario-cl";

@Component({
  selector: 'app-registro-vet',
  templateUrl: './registro-vet.component.html',
  styleUrls: ['./registro-vet.component.css']
})
export class RegistroVetComponent implements OnInit, OnChanges {

  @Input() userRole: string = 'editar';

  veterinarioToEdit: VeterinarioCl | undefined;
  formVeterinario: VeterinarioCl = new VeterinarioCl('', '', '', '', '', 0);
  veterinarios : VeterinarioCl[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private veterinarioService: VeterinarioService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.userRole = 'editar';
        console.log(id);
        this.veterinarioService.getVeterinarioById(id).subscribe(veterinario => {
          console.log("veterinario",veterinario);
          this.veterinarioToEdit = veterinario;
          if (this.veterinarioToEdit) {
            this.formVeterinario = {...this.veterinarioToEdit };
          }
        });
      }
    });
  }

  ngOnChanges(changes: any): void {
    if (changes['clienteToEdit'] && this.veterinarioToEdit) {
      this.formVeterinario = {...this.veterinarioToEdit };
    }
  }

  addVeterinarioForm(): void {
    if (this.formVeterinario.id) {
      this.veterinarioService.updateVeterinario(this.formVeterinario);
    } else {
      this.veterinarioService.addVeterinario(this.formVeterinario);
    }
    this.formVeterinario = new VeterinarioCl('', '', '', '', '', 0);
    this.router.navigate(['/veterinarios']);
  }

}
