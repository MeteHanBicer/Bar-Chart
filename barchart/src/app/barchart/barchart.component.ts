import { Component, OnInit } from '@angular/core';
const SAMPLE_BARCHART_DATA:any[] = [
  // { data: [2016,2017,2019,2020,2021],label:'Q3 Sales'},
  { data: [25,39,60,91,36,54,50],label:'Aktif Değer'},
  { data: [25,50,60,91,36,54,50],label:'Pasif Değer'}
];

const SAMPLE_BARCHART_LABELS : string[] = [ '2015','2021'];

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }

    public barChartData : any[] = SAMPLE_BARCHART_DATA;
    public barChartLabels:string[] = SAMPLE_BARCHART_LABELS;
    public barChartType = 'bar';
    public barChartLegend = false;
    public barChartOptions:any = {
      scaleShowVerticalLines : false,
      resonsive : true
    };

  ngOnInit() {
  }
  alert(yil:number,aktif:number,pasif:number){
    alert("Yıl : "+yil +" Aktif : "+aktif+" Pasif : "+pasif)
  }

}
