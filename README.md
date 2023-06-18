
# CreditCard
Deploy de nuestro Front en Netlify.

- Abrimos nuestro componente service o donde tenemos el controlador en angular.
- Creamos una variable con la url de nuestro backend que ya publicamos en azure.
  Ej: private URL = "https://fbcreditcard20230618135144.azurewebsites.net/api/[controllerName]/";
- y en los metodos del crud reemplazamos las url que teníamos del proyecto local por la nueva url de prod.
- ya luego en la terminal ejecutamos ng build para el deploy.
- abrimos netlify y nos logueamos.
- luego entramos a nuestro proyecto desde el explorador de archivos y arrastramos la carpeta dist a netlify.
- esperamos que haga el deploy y abrimos el link y probamos la aplicación para ver si funciona el crud.

- Para ver que los cambios se están guardando en nuestra DB, abrimos azure.
- Presionamos el menú hamburguesa y le damos en todos los recursos.
- Entramos al servidor o a la base de datos que creamos para el back.
- Y copiamos el nombre del servidor que aparece en la información general.
- Abrimos sql server, pegamos en el server name el nombre del servidor e iniciamos con la contraseña y usuario que creamos también.
- le hacemos un select a la tabla y deben aparecer los cambios que hicimos en el front.

  Url del proyecto: https://proyectcreditcard-cam.netlify.app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
