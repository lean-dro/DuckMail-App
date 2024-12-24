import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() valor: number = 0
  @Input() iconeUrl: string = ""
  @Input() texto: string = "" 


}
