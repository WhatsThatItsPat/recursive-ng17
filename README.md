# Ng17

## Solution

[@atscott](https://github.com/atscott) provided [a solution](https://github.com/angular/angular/issues/54898#issuecomment-2000518882), which is shown here [in the `loadchildren-sans-import-solution` branch](https://github.com/a702823_fidelity/recursive-ng17/blob/loadchildren-sans-import-solution/src/app/recursive.component.ts).

```ts
/**
 * We don't have to use `import` with `loadChildren`. Note the
 * default export of `RecursiveComponent` is a routes array,
 * not the class.
 */
loadChildren: () => import('./recursive.component'),

/**
 * We can create a typical `routes` variable and skip the
 * `import` statement.
 */
loadChildren: () => routes,

/**
 * But this doesn't work due to the error:
 * Block-scoped variable 'routes' used before its declaration.ts
 */
children: routes,
```

## Issue

This project shows that [recursively lazy loading](src/app/recursive.component.ts) pages DOES NOT work in Angular 17.

After successfully navigating to `tabs/tab1/recursive`, attempting to route to `tabs/tab1/recursive/recursive` fails with:

> `ERROR ReferenceError: require_recursive_component is not defined`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
