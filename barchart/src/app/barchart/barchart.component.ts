import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alert(yil:number,aktif:number,pasif:number){
    alert("Yıl : "+yil +" Aktif : "+aktif+" Pasif : "+pasif)
  }

}
