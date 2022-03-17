import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyAppService } from 'src/app/services/my-app.service';

declare var JQuery: any;
declare var $: any;
declare var iziToast:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = {
    username:'',
    password:''
  };
  usuario:any = {};
  token:any= {};

  constructor(private router: Router, private myAppService: MyAppService) { 
    this.token = this.myAppService.getToken();
  }

  ngOnInit(): void {

    if(this.token){
      this.router.navigate(['/'])
    }else{
      
    }

  }

  login(loginForm:any){

    if(loginForm.valid){
      
      let data= {
        username: this.user.email,
        password: this.user.password
      }

      this.myAppService.login(data).subscribe(
        resp=>{
          console.log(resp)
          let response :any = resp;
          this.usuario = resp; 
          localStorage.setItem('token', response.data.token);
          // this.router.navigate(['/']);
          window.location.reload();
         
        },error=>{
          console.log(error)
          iziToast.show({
            title:'Error',
            class:'text-danger',
            titleColor: '#FF0000',
            color: '#FFF',
            position: 'topRight',
            message: 'Los datos del formulario no son validos'
          })
        }
      )

    }else{
      iziToast.show({
        title:'Error',
        class:'text-danger',
        titleColor: '#FF0000',
        color: '#FFF',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      })
    }

  }


}
