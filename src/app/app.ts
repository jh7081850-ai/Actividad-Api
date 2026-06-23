import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { MainComponent } from './components/main/main';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  estadoVista: string = 'home';
}