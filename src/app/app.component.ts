import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0; 
      // border: solid 3px purple;
    }
  `],
})
export class AppComponent {
  ngOnInit() {
    console.log(`AppComponent > ngOnInit`);
  }
}

export default [
  {
    path: '',
    loadChildren: () => import('./tabs.component'),
  },
] as Routes;
