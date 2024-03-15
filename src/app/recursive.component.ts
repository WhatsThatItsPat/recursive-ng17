import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-recursive',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="header">
      <button class="back" routerLink="../">< Back</button>
      <div class="title">recursive {{recursiveCount}}</div>
    </div>
    <div class="content">
      <p>This is recursive page {{recursiveCount | json}}.</p>
      <button routerLink="recursive">recursive {{recursiveCount + 1}}</button>
    </div>
  `,
  host: { 'class': 'page' },
  styles: [],
})
export class RecursiveComponent {
  public recursiveCount = inject(Router).url.match(/recursive/g)?.length || 0;

  ngOnInit() {
    console.log(`RecursiveComponent (${this.recursiveCount}) > ngOnInit`);
  }
}


export default [
  {
    path: '',
    component: RecursiveComponent
  },
  {
    path: 'recursive',
    loadChildren: () => import('./recursive.component'),
    /**
     * My infinitely recursive routing crashes the browser because it
     * tries to preload infinite lazy routes. This tells the preload
     * strategy not to load the next recursive level.
     */
    data: { preventPreload: true },
  }
] as Routes;
