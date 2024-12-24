import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { DashboardResponse } from '../../models/DashboardResponse';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api: ApiService<DashboardResponse>) { }

  obterTotalErrosEnvios(){
    return this.api.get("/dashboard/total-delivery-errors")
  }
  obterTotalRedirecionamentos(){
    return this.api.get("/dashboard/total-clicks")
  }
  obterTotalEmailsLidos(){
    return this.api.get("/dashboard/total-opens")
  }
  obterTotalCampanhasPendentes(){
    return this.api.get("/dashboard/total-pending-campaigns")
  }
  
  
}
