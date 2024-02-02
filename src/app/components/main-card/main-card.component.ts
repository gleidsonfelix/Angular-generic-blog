import { Component, Input, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [RouterLink],
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

  @Input()
  id:string = "0"

  constructor() {}

}
