// src/app/components/header/header.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() userRole: 'veterinario' | 'usuario' | 'admin' = 'usuario';
}
