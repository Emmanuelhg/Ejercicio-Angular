import { Component, OnInit } from '@angular/core';
import { MyAppService } from 'src/app/services/my-app.service';
import { ErrorHandler } from '@angular/core';

declare var iziToast:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formUser:any = {
    nombres: '',
    apellidos: '',
    fumas: '',
    actualmentePracticasLectura: '',
    librosLeidosUltimosTresMeses: '',
    estadoCivil: ''
  }
  maritalStatus:any = [];
  libros:any = [];
  resetForm:any;
  preload:boolean = false;
  error:any;
  errors:any = {};
  formUserNew:any = {}

  constructor(private myAppService: MyAppService, private errorHandler:ErrorHandler) { }
  
  ngOnInit(): void {
    this.estadoCivil();
    this.errorHandler.handleError(this.errors)
  }

  estadoCivil(){
    this.myAppService.getEstadoCivul().subscribe(
      resp=>{
 
        let ob: any = []
        ob = resp
        
        let ref

        for(let i in ob){
          ref = ob.result; 
          
        }
        for(let i in ref){
          this.maritalStatus.push(ref[i].nombre)
        }
        
      },error=>{

      }
    )
  }

  getname(data:any){
    if (data.indexOf(" ") === -1) {
      this.error = `\"${data}\" contiene al menos un espacio`
      // console.log(`\"${data}\" no contiene espacios`);
    }else {
      this.error = `\"${data}\" contiene al menos un espacio`
      iziToast.show({
        title:'Error',
        class:'text-danger',
        titleColor: '#FFF',
        color: '#FF0000',
        position: 'center',
        message: `\"${data}\" contiene al menos un espacio`,
        messageColor: '#FFF'
      })
    
    }
  }

  getapellidos(data:any){

    if (data.indexOf(" ") === -1) {
      this.error = `\"${data}\" contiene al menos un espacio`
      // console.log(`\"${data}\" no contiene espacios`);
    }else {
      this.error = `\"${data}\" contiene al menos un espacio`
      iziToast.show({
        title:'Error',
        class:'text-danger',
        titleColor: '#FFF',
        color: '#FF0000',
        position: 'center',
        message: `\"${data}\" contiene al menos un espacio`,
        messageColor: '#FFF'
      })
    }
  }

  yesOrNot(data:any){
    console.log(data)
    if(data == 'Si'){
      this.preload = true;
    }else if(data == 'No'){
      this.preload = false;
    }
    console.log(this.preload)
  }

  getForm(getData:any){
    if(getData.valid){
      let fuma:any;
        if(this.formUser.fumas == 'Si'){
          fuma = true;
        }else{
          fuma = false;
        }

        let lectura:any;
        if(this.formUser.actualmentePracticasLectura == 'Si'){
          lectura = true;
        }else{
          lectura = false;
        }

        let civil:any;
        if(this.formUser.estadoCivil == 'Soltero'){
          civil = 12;
        }else if(this.formUser.estadoCivil == 'Casado / Sociedad conyugal'){
          civil = 13;
        }else if(this.formUser.estadoCivil == 'Casado / Separación de bienes'){
          civil = 14;
        }

        // this.libros = [];
        if(this.formUser.librosLeidosUltimosTresMeses != undefined){
          
          if(this.libros == this.formUser.librosLeidosUltimosTresMeses){
            console.log("Igual")
          }else{
            this.libros.push((document.getElementById("libros") as HTMLInputElement).value);
            console.log("No lo es")
          }
        }
        console.log(this.libros)
        
        this.formUserNew = {
          nombres: this.formUser.nombres,
          apellidos: this.formUser.apellidos,
          fumas: fuma,
          actualmentePracticasLectura: lectura,
          librosLeidosUltimosTresMeses: this.libros,
          estadoCivil: civil
        }
        console.log(this.formUserNew)

    }else{
      iziToast.show({
        title:'Error',
        class:'text-danger',
        titleColor: '#FFF',
        color: '#FF0000',
        position: 'center',
        message: 'Por favor llene los campos requeridos',
        messageColor: '#FFF'
      })
    }
  }
}
