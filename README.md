# Radius Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

[![Build Status](https://dev.azure.com/radius2/radius-azure/_apis/build/status/usrrname.radius-angular?branchName=refs%2Fpull%2F2%2Fmerge)](https://dev.azure.com/radius2/radius-azure/_build/latest?definitionId=1&branchName=refs%2Fpull%2F2%2Fmerge)

# About

This is 1 of 3 repositories that facilitates the generation of design system instances.

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

- Run the command `npm run build:ds` to build the design system, this will create a dist folder, in package.json in dist folder change the name and the version of it accordingly.
- Go into dist directory using command `cd dist`.
- Pack the distribution directory using `npm pack` as an archive to upload.
- Publish the library using `npm publish`.

> You would have to do `npm login` to publish the library. If you have an account put your login information or, you can create one at <https://www.npmjs.com> for free.
