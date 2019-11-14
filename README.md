# Widgets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Build elements

Build procedure for elements to be run inside Form Builder needs some adjustments, explained in the next few lines.

### 1. Install custom-webpack from angular-builders module

```
npm i -D @angular-builders/custom-webpack
```

### 2. Make the below changes in angular.json

- change the builder property to **@angular-builders/custom-webpack:browser**
- add **customWebpackConfig** property as below.

```
"architect": {
    "build": {
      "builder": "@angular-builders/custom-webpack:browser",
      "options": {
        ...
        "customWebpackConfig": {
          "path": "./extra-webpack.config.js",
          "mergeStrategies": {
            "externals": "replace"
          }
        }
      }
```

### 3. Create config file “extra-webpack.config.js” under project root folder

- **jsonpFunction** — give some unique name which is specific to angular element
- **library** — give the app name or angular element

```
module.exports = {
  output: {
  jsonpFunction: ‘webpackJsonpAppName’,
  library: ‘appname’
  }
};
```

### 4. When you build the project you will see the **main.js** content as below. webpackJsonP variable will be replaced with the name specified in your **“extra-webpack.config.js”** configuration file.

```
var appname=(window.webpackJsonpAppname=window.webpackJsonpAppname||[])..........
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
