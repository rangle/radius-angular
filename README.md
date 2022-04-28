# RadiusAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Creating NPM Packages

For example npm package for Angular you can take a look at [Radius Angular]<https://www.npmjs.com/package/radius-asparagus>

1) Update the path on line 7 in `projects/ds/src/ng-package.json`
2) Add your main CSS file into `angular.json` under `styles` E.g. line 61
3) After step 1 and 2 are done, run the following commands in order:
  `npm run packagr` - this will create a dist folder, in package.json in dist folder change the name and the version of it accordingly
  `cd dist`
  `npm pack`
  `npm login` - you need to have a npm account 
    If you have an account put your login information
    if you don't have one, you can create one at <https://www.npmjs.com> for free
  `npm publish`
