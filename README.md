# Radius Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

# About

This is 1 of 3 repositories that facilitates the generation of design system instances.

See also:

- [Radius Workspace](https://github.com/rangle/radius-workspace) / Radius CLI
- [Radius](https://github.com/rangle/radius) for React
- [rangle.io/radius](https://rangle.io/radius)
- [Radius Design Toolkit](https://www.figma.com/file/RqENxZWAzGiEWM7COch1Sc/Radius-Design-Kit)

# What's inside

```
.
├── .github                    <-- github actions ymls
├── .azure-devops              <-- azure devops ymls
├── .storybook                 <-- storybook config files
├── coverage
├── dist                       <-- all builds from this Angular workspace end up in here
│   └── ds
│       ├── bundles
│       ├── esm2015
│       ├── fesm2015
│       ├── lib
│       └── styles
├── projects                   <-- source folder for projects in this workspace
│   ├── demo
│   │   └── src
│   │       ├── app
│   │       │   ├── components
│   │       │   └── utils
│   │       ├── assets
│   │       └── environments
│   └── ds                    <-- design system source files
│       │   ├── docs
│       │   │   ├── static
│       │   │   │   └── imgs
│       │   │   └── tokens
│       │   └── lib
│       │       ├── button
│       │       ├── tag
│       │       └── text
│       └── styles
└── storybook-static/         <-- storybook output
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts from this workspace will be stored in the `dist/` directory.
Workspace configs are specified in `angular.json` and [ng-packagr](https://www.npmjs.com/package/ng-packagr) was used to determine export paths for each project

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Test Run Package Creation

If you cloned this repo to try your hand at creating packages from a workspace, we got you!
We recommend installing [Verdaccio](https://verdaccio.org/)

`npm install -g verdaccio`

`npm set registry http://localhost:4873/`

To help with local development, change your `package.json` to include the following:

```
{
  "publishConfig": {
    "registry": "http://localhost:4873"
  }
}
```

Run `verdaccio`, `npm publish`, then `npm install <your-package-name>` in a new project to check the latest published version can be imported.

## Creating NPM Packages

- Run the command `npm run build:ds` to build the design system, this will create a dist folder, in package.json in dist folder change the name and the version of it accordingly.
- Go into dist directory using command `cd dist/ds`.
- Pack the distribution directory using `npm pack` as an archive to upload.
  Note: the `package.json` within the selected `ds` project should contain updated package name, versioning, author and repo details.
- Publish the library using `npm publish`.

> You would have to do `npm login` to publish the library. If you have an account put your login information or, you can create one at <https://www.npmjs.com> for free.
