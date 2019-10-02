# shiny-memory-frontend

This is the frontend application for the 'shiny-memmory' project.
## Installation
Use npm to install dependencies
```bash
npm install
```
## Running the application
Production
Add the url of the 'shiny-memory' service to the baseUrl field in config.ts. Then execute the below command. The contents of the dist folder needs to be hosted on a http-server.
```bash
ng run build
```
Development (Default port 4200)
Add the url of the 'shiny-memory' service to the target field in proxy.conf.json. Then execute the below command.
```bash
npm start
```
