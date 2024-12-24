import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  totalErrosEnvios = 0
  totalRedirecionamentos = 0
  totalEmailsAbertos = 0
  totalCampanhasPendentes = 0
  constructor(private service: DashboardService){
    
  }
  ngOnInit():void{
    this.service.obterTotalErrosEnvios()?.subscribe((dashboardGenericResponse)=>{
      this.totalErrosEnvios = dashboardGenericResponse.totalDeliveryErrors || 0
    })

    this.service.obterTotalCampanhasPendentes()?.subscribe((dashboardGenericResponse)=>{
      this.totalCampanhasPendentes = dashboardGenericResponse.totalPendingCampaigns || 0
    })

    this.service.obterTotalEmailsLidos()?.subscribe((dashboardGenericResponse)=>{
      this.totalEmailsAbertos = dashboardGenericResponse.totalOpenHistories || 0
    })

    this.service.obterTotalRedirecionamentos()?.subscribe((dashboardGenericResponse)=>{
      this.totalRedirecionamentos = dashboardGenericResponse.totalClickHistories || 0
    })
  }
}
