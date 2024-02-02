import { Component } from '@angular/core';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MainCardComponent } from '../../components/main-card/main-card.component';
import { AdditionalCardComponent } from '../../components/additional-card/additional-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopMenuComponent, MenuTitleComponent, MainCardComponent, AdditionalCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
