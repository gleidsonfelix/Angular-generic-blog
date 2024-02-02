import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  contentPhoto:string = "https://images.pexels.com/photos/4781951/pexels-photo-4781951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  contentTitle:string = "Olá"


  constructor() {}
}
