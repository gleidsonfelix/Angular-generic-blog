import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-additional-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './additional-card.component.html',
  styleUrl: './additional-card.component.css'
})
export class AdditionalCardComponent {

  @Input()
  photo:string = ""

  @Input()
  additionalCardTitle:string = ""
  
  @Input()
  id:string = "0"
  constructor() {}
}
