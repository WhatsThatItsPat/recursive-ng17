import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NoRecursivePreloadingStrategy extends PreloadingStrategy {
  /**
   * My infinitely recursive routing crashes the browser because it
   * tries to preload infinite lazy routes. Recursive routes need to
   * prevent further preloading by using this:
   *    data: { preventPreload: true }
   */
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    console.log(
      `${route.data?.['preventPreload'] ?
        `Preventing preload of ${route.path}` :
        `Preloading ${route.path}`
      }`,
      route
    );
    return route?.data?.['preventPreload'] === true ? EMPTY : load();
  }
}
