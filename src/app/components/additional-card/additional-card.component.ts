import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-additional-card',
  standalone: true,
  imports: [],
  templateUrl: './additional-card.component.html',
  styleUrl: './additional-card.component.css'
})
export class AdditionalCardComponent {

  @Input()
  photo:string = ""

  @Input()
  additionalCardTitle:string = ""
  
  constructor() {}
}
