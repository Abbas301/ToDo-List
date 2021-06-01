import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Patients} from './hospital';
import { ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import { Label ,Color} from 'ng2-charts';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  // charts code
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['', '', '', '', '', ''];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [55, 35, 85, 62, 45, 75,0], label: 'Inpatients' },
    { data: [80, 55, 50, 58, 65, 55,0], label: 'Outpatients' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor:"teal" },
    { backgroundColor:"violet" }
  ];

  details: any= []
  patients = ""
  sear:any=""
  selectedpatient ?: Patients

  editindex!: number;
  
  
  constructor(private as:AuthService) { }

  ngOnInit(): void {
    this.ondetails();
  }

  ondetails()
  {
    this.as.getdetails().subscribe(data =>{

      this.details = data;
    })
  }

  onselect(detail:Patients) {
    
    this.selectedpatient = detail;
    console.log(detail);
  }


}
