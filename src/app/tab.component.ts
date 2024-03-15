import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="header">
      <div class="title">{{tabName}}</div>
    </div>
    <div class="content">
      <p>This is the root of {{tabName}}.</p>
      <button routerLink="recursive">recursive 1</button>
    </div>
  `,
  host: { 'class': 'page' },
  styles: [``],
})
export class TabComponent {
  public tabName = inject(Router).url.split('/')[2];

  ngOnInit() {
    console.log(`TabComponent (${this.tabName}) > ngOnInit`);
  }
}


export default [
  {
    path: '',
    component: TabComponent,
  },
  {
    path: 'recursive',
    loadChildren: () => import('./recursive.component'),
  }
] as Routes;
