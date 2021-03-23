import { Component, OnInit } from '@angular/core';
// BAR CHAR
// const SAMPLE_BARCHART_DATA:any[] = [
//   // { data: [2016,2017,2019,2020,2021],label:'Q3 Sales'},
//   { data: [25,39,60,91,36,54,50],label:'Aktif Değer'},
//   { data: [25,50,60,91,36,54,50],label:'Pasif Değer'}
// ];


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

    // public barChartData : any[] = SAMPLE_BARCHART_DATA;
    // public barChartType = 'bar';
    // public barChartLegend = false;
    // public barChartOptions:any = {
    //   scaleShowVerticalLines : false,
    //   resonsive : true
    // };barchar

  ngOnInit() {
  }
  alert(yil:number,aktif:number,pasif:number){
    alert("Yıl : "+yil +" Aktif : "+aktif+" Pasif : "+pasif)
  }
  // public SAMPLE_BARCHART_LABELS : string[] = [ '2015','2021'];
  // public barChartLabels:string[] = this.SAMPLE_BARCHART_LABELS;barchar
}
