import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
