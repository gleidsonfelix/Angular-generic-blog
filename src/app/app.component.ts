import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
