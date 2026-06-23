import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// La exportación por defecto debe ser la función que inicializa la App con su configuración de servidor
const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;