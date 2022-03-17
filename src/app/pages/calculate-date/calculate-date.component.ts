import { Component, OnInit } from '@angular/core';

declare var iziToast:any;

@Component({
  selector: 'app-calculate-date',
  templateUrl: './calculate-date.component.html',
  styleUrls: ['./calculate-date.component.css']
})
export class CalculateDateComponent implements OnInit {

  calendary:any = {
    dayPlus:''
  };
  newDay:any;
  days:any = []

  constructor() { }

  ngOnInit(): void {
 
  }

  getCalendary(dataDay:any){
    if(dataDay.valid){

      let cal = {
        day: (document.getElementById("date") as HTMLInputElement).value,
        dayPlus: this.calendary.dayPlus
      }
      if(cal.day != '' || dataDay.day == '' ){
    
        var objFecha = new Date(cal.day);
        var dia  = objFecha.getDate();
        var mes  = objFecha.toLocaleString("es-ES", { month: "long" });
        var anio = objFecha.getFullYear()+ Number(cal.dayPlus);
        
        this.newDay =  dia+1 + " " + mes + " " + anio ;
        this.days.push(this.newDay)

      }else{
        iziToast.show({
        title:'Error',
        class:'text-danger',
        titleColor: '#FFF',
        color: '#FF0000',
        position: 'center',
        message: 'Seleccione una fecha',
        messageColor: '#FFF'
      })
      }

    }else{
      iziToast.show({
        title:'Error',
        class:'text-danger',
        titleColor: '#FFF',
        color: '#FF0000',
        position: 'center',
        message: 'Seleccione una años',
        messageColor: '#FFF'
      })
    }
  }

}
