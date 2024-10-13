import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() userRole: 'veterinario-d' |'login-c' | 'login-a' | 'login-v' | 'veterinario-c' | 'usuario' | 'admin' | 'landing' = 'usuario';
}
