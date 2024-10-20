import {Component, OnInit} from '@angular/core';
import {VeterinarioService} from "../../../services/veterinario.service";
import {TratamientoService} from "../../../services/tratamiento.service";
import {MascotaService} from "../../../services/mascota.service";
import {MascotaCl} from "../../../interfaces/mascota-cl";
import {VeterinarioCl} from "../../../interfaces/veterinario-cl";
import {TratamientoCl} from "../../../interfaces/tratamiento-cl";
import {DrogaService} from "../../../services/droga.service";
import {DrogaCl} from "../../../interfaces/droga-cl";

@Component({
  selector: 'app-datos-a',
  templateUrl: './datos-a.component.html',
  styleUrls: ['./datos-a.component.css']
})
export class DatosAComponent implements OnInit {
  formMascotas : MascotaCl[] = [];
  formVeterinarios : VeterinarioCl[] = [];
  formTratamientos : TratamientoCl[] = [];
  formDrogas : DrogaCl[] = [];

  constructor(private mascotasService: MascotaService, private veterinariosService : VeterinarioService , private tratamientosService : TratamientoService, private drograsService : DrogaService) { }

  ngOnInit(): void {
    this.mascotasService.getMascotas().subscribe(data => {
      this.formMascotas = data;
      this.calcularMascotasTotales();
      this.calcularMascotasActivas();
    });

    this.veterinariosService.getVeterinarios().subscribe(data => {
      this.formVeterinarios = data;
    });

    this.tratamientosService.getTratamientos().subscribe(data => {
      this.formTratamientos = data;
      this.calcularTotalTratamientosUltimoMes();
      this.calcularTratamientosPorMedicamento();
      this.calcularTopTratamientosVendidos();
      this.calcularVentasYGanancias();
    });

    this.drograsService.getDrogas().subscribe(data => {
      this.formDrogas = data;
    });
  }


  totalTratamientosUltimoMes = 0;
  veterinariosActivos = 0;
  veterinariosInactivos = 0;
  mascotasTotales = 0;
  mascotasActivas = 0;
  ventasTotales = 0;
  gananciasTotales = 0;
  tratamientosPorMedicamento: any[] = [];
  topTratamientosVendidos: any[] = [];

  calcularTotalTratamientosUltimoMes() {
    const hoy = new Date();
    const mesPasado = new Date();
    mesPasado.setMonth(hoy.getMonth() - 1);

    this.totalTratamientosUltimoMes = this.formTratamientos.filter(tratamiento => {
      const fechaTratamiento = new Date(tratamiento.fecha);
      return fechaTratamiento >= mesPasado && fechaTratamiento <= hoy;
    }).length;
  }
/*
  calcularVeterinariosActivosInactivos() {
    this.veterinariosActivos = this.formVeterinarios.filter(veterinario => veterinario.estado === 'activo').length;
    this.veterinariosInactivos = this.formVeterinarios.filter(veterinario => veterinario.estado === 'inactivo').length;
  }

 */
  calcularMascotasTotales() {
    this.mascotasTotales = this.formMascotas.length;
  }

  calcularMascotasActivas() {
    this.mascotasActivas = this.formMascotas.filter(mascota => mascota.estado === true).length;
  }

  calcularTratamientosPorMedicamento() {
    const medicamentoCantidadMap = new Map();

    this.formTratamientos.forEach(tratamiento => {
      const nombreDroga = tratamiento.droga.nombre;
      if (medicamentoCantidadMap.has(nombreDroga)) {
        medicamentoCantidadMap.set(nombreDroga, medicamentoCantidadMap.get(nombreDroga) + 1);
      } else {
        medicamentoCantidadMap.set(nombreDroga, 1);
      }
    });

    this.tratamientosPorMedicamento = Array.from(medicamentoCantidadMap, ([nombre, cantidad]) => ({ nombre, cantidad }));
  }

  calcularVentasYGanancias() {
    this.ventasTotales = this.formTratamientos.reduce((total, tratamiento) => {
      if (tratamiento.droga && typeof tratamiento.droga.precioVenta === 'number' && typeof tratamiento.droga.uni_vendidas === 'number') {
        return total + (tratamiento.droga.precioVenta * tratamiento.droga.uni_vendidas);
      }
      return total;
    }, 0);

    this.gananciasTotales = this.formTratamientos.reduce((total, tratamiento) => {
      if (tratamiento.droga && typeof tratamiento.droga.precioVenta === 'number' && typeof tratamiento.droga.precioCompra === 'number' && typeof tratamiento.droga.uni_vendidas === 'number') {
        const gananciaPorUnidad = (tratamiento.droga.precioVenta - tratamiento.droga.precioCompra) * tratamiento.droga.uni_vendidas;
        return total + gananciaPorUnidad;
      }
      return total;
    }, 0);
  }
  calcularTopTratamientosVendidos() {
    const tratamientosUnidadesMap = new Map();

    this.formTratamientos.forEach(tratamiento => {
      const nombreTratamiento = tratamiento.droga.nombre;
      if (tratamientosUnidadesMap.has(nombreTratamiento)) {
        tratamientosUnidadesMap.set(nombreTratamiento, tratamientosUnidadesMap.get(nombreTratamiento) );
      } else {
        tratamientosUnidadesMap.set(nombreTratamiento, tratamiento.droga.uni_vendidas);
      }
    });

    const tratamientosArray = Array.from(tratamientosUnidadesMap, ([nombre, unidadesVendidas]) => ({ nombre, unidadesVendidas }));
    this.topTratamientosVendidos = tratamientosArray.sort((a, b) => b.unidadesVendidas - a.unidadesVendidas).slice(0, 3);
  }

}
