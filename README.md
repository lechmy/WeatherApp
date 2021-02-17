# Weather App

## Project setup
```
npm install
```

### Compiles and runs on local machine for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## About

Project is done in Vue v2 and typescript.
No external libraries for JS are included, everything is either from Vue or plain Javascript.
No external libraries for CSS are used since it is small project and there was no need, for bigger project tailwindCSS for utility classes and Vue Component library would be ideal for long run scalable projects.

## File Structure

- assets - Images, Icons, etc
- component - Simple parts of application that either don't have logic or simple one
- core - DTO, Models, DataModel, etc. Used as interfaces to ensure data type integrity and
- route - Routes used inside application
- service - HTTP services
- store - Data services, used for exchanging data between views/components
- views - Parts of applications that have logic and/or contains components

## Architecture

In main App part, aside from header and footer, on left we have component with city list with links to specific city, on the right we have dynamic part that loads modules depending on route. There we load Home page with wind speed and temperature for all 5 cities or City Details page with detailed weather forecast for next 24 hours.
By using links and route-mounted components approach, logic for gathering information from API and rendering are on same place, instead of writing logic in two deferent components and sending data via 'store'. This way we can send link to 3rd party what will open exactly what we wanted them to see and utilize regular application flow

