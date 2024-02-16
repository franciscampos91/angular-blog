import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from "../../data/dataFake";


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string      = "" //será inputado no arquivo home quando chamar o elemento <big-card>
  @Input()
  cardTitle:string       = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string              = "0"

  constructor() { }

  ngOnInit(): void {
    this.setValueToBigCard()
  }

  setValueToBigCard(){
    const nArticles = dataFake.length
    const lastId    = nArticles

    const result         = dataFake.filter(article => article.id == lastId.toString())[0]
    this.photoCover      = result.photoCover
    this.cardTitle       = result.title
    this.cardDescription = result.title   
    this.Id              = result.id
  }

}
