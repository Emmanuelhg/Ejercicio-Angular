import { Component, OnInit } from '@angular/core';

declare var iziToast:any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  value:any = '';
  userName:any = {
    username:''
  };
  preload = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  getNomber(nombreUsuario:any){
    if(nombreUsuario.valid){

      this.value = nombreUsuario.value.nombre;
      this.preload = true;

    }else{
      iziToast.show({
        title:'Error',
        class:'text-danger',
        titleColor: '#FFF',
        color: '#FF0000',
        position: 'center',
        message: 'Escribe tu nombre',
        messageColor: '#FFF'
      })
    }
  }

}
