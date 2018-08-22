import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../services/api-client.service';
import { DashboardData } from '../../models/dashboard-data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  dashboardDataList: Array<DashboardData>;

  constructor(private apiService: ApiClientService) { }

  ngOnInit() {
    this.apiService.getDashboardData().subscribe(
      (res) => {
         if(res.status == 200){
           this.dashboardDataList = res.response.reverse();
         }
      }
    );
  }

}
