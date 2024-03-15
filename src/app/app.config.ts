import { ApplicationConfig } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  provideRouter,
  withPreloading
} from '@angular/router';
import routes from './app.component';
import { NoRecursivePreloadingStrategy } from './no-recursive.preloading-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      /**
       * NoPreloading is the default. No need to be explicit like this.
       */
      // withPreloading(NoPreloading)
      /**
       * This will crash things because of our Recursive component.
       */
      // withPreloading(PreloadAllModules)
      /**
       * This prevents further preloading of recursive paths.
       */
      withPreloading(NoRecursivePreloadingStrategy)
    )
  ]
};
