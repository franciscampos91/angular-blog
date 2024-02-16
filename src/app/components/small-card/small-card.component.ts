import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from "../../data/dataFake";


@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string  = ""
  @Input()
  Id:string         = "0"

  @Input()
  cont:string = "0"

  constructor() { }

  ngOnInit(): void {
    this.setValueSmallCard()
  }

  setValueSmallCard(){
    const articles = dataFake
    const nArticles = articles.length
    const id = nArticles - parseInt(this.cont)

    const result = dataFake.filter(article => article.id == id.toString())[0]

    this.photoCover = result.photoCover
    this.cardTitle  = result.title
    this.Id         = result.id

  }

}
