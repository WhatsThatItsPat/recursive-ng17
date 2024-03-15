# Ng17

This project shows that [recursively lazy loading](src/app/recursive.component.ts) pages DOES NOT work in Angular 17.

After successfully navigating to `tabs/tab1/recursive`, attempting to route to `tabs/tab1/recursive/recursive` fails with:

> `ERROR ReferenceError: require_recursive_component is not defined`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
