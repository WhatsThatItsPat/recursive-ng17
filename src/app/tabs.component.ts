import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="tab-container">
      <router-outlet></router-outlet>
    </div>
    <div class="tab-buttons">
      <button routerLink="tab1" name="tab1">Tab 1</button>
      <button routerLink="tab2" name="tab2">Tab 2</button>
      <button routerLink="tab3" name="tab3">Tab 3</button>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      outline: 3px orange solid;
    }
    .tab-container {
      outline: 3px red solid;
      display: flex;
      flex-grow: 1;
    }
    .tab-buttons {
      display: flex;
      outline: 3px cyan solid;
      height: 40px;
      button {
        flex-grow: 1;
      }
    }
  `],
})
export class TabsComponent {
  ngOnInit() {
    console.log(`TabsComponent > ngOnInit`);
  }
}


export default [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./tab.component'),
      },
      {
        path: 'tab2',
        loadChildren: () => import('./tab.component'),
      },
      {
        path: 'tab3',
        loadChildren: () => import('./tab.component'),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
] as Routes;
