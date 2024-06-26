import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeroesComponent,
    MessagesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
