import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaCl } from '../../interfaces/mascota-cl';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-registro-dogs',
  templateUrl: './registro-dogs.component.html',
  styleUrls: ['./registro-dogs.component.css']
})
export class RegistroDogsComponent implements OnInit, OnChanges {
  @Input() mascotaToEdit: MascotaCl | null = null;
  @Output() addMascotaEvent = new EventEmitter<MascotaCl>();
  @Output() updateMascotaEvent = new EventEmitter<MascotaCl>();

  formMascota: MascotaCl = new MascotaCl('', '', 0, 0, '', false, '', undefined);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      if (id) {
        const mascota = this.mascotaService.getMascotaById(id);
        this.mascotaToEdit = mascota ? mascota : null;
        if (this.mascotaToEdit) {
          this.formMascota = { ...this.mascotaToEdit };
          console.log('formMascota:', this.formMascota);
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mascotaToEdit'] && this.mascotaToEdit) {
      this.formMascota = { ...this.mascotaToEdit };
    }
  }

  addMascotaForm(event: Event): void {
    event.preventDefault();
    if (this.formMascota.id) {
      this.mascotaService.updateMascota(this.formMascota);
      this.updateMascotaEvent.emit(this.formMascota);
    } else {
      this.mascotaService.addMascota(this.formMascota);
    }
    this.formMascota = new MascotaCl('', '', 0, 0, '', false, '', undefined);
    this.router.navigate(['/mascotas']);
  }
}
