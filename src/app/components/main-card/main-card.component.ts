import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {

  @Input()
  photo:string = ""

  @Input()
  mainCardTitle:string = ""

  @Input()
  mainCardText:string = ""

  constructor() {}

}
