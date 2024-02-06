import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  contentPhoto:string = ""
  contentTitle:string = ""
  private id:string | null = "0"

  constructor(private route:ActivatedRoute) {
    this.route.paramMap.subscribe((value) => this.id = value.get("id"))
    
    this.setValuesToComponenet(this.id)
  }

  setValuesToComponenet(id:string | null) {
    const result = dataFake.filter(article => article.id === id)[0]
    console.log(result.title)
    this.contentTitle = result.title
    this.contentPhoto = result.contentPhoto
  }

}
