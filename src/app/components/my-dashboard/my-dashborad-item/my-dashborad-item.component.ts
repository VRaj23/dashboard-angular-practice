import { Component, OnInit, Input } from '@angular/core';
import { DashboardData } from '../../../models/dashboard-data.model';

@Component({
  selector: 'app-my-dashborad-item',
  templateUrl: './my-dashborad-item.component.html',
  styleUrls: ['./my-dashborad-item.component.css']
})
export class MyDashboradItemComponent implements OnInit {

  @Input() dashboardData: DashboardData;

  color1: string;
  color2: string;

  constructor() {
    this.color1 = this.getColorValue();
    this.color2 = this.getColorValue();
   }
   
  ngOnInit() {
  }

  getColorValue(): string{
    var r = this.getRandomNum();
    var g = this.getRandomNum();
    var b = this.getRandomNum();
    var color = "#"+this.numToHex(r)+this.numToHex(g)+this.numToHex(b);
    return color;
  }

  private getRandomNum(): number{
    var value = Math.floor(Math.random()*Math.floor(130)+125);
    return value;
  }

  private numToHex(i: number): string{
    var hex = i.toString(16);
    return hex.length == 1 ? "0"+hex : hex;
  }

}
