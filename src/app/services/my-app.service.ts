import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyAppService {

  constructor(private http:HttpClient) { }

  login(data:any){
    let  headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`https://desa.ies-webcontent.com.mx/login`, {username: data.username, password: data.password });
  }

  getToken(){
    return localStorage.getItem('token');
  }

  public isAuthenticated(roll: string[]):boolean{
    const token = localStorage.getItem('token');
    
    if(token){
      return false;
    }
    return true;
  }

  getEstadoCivul(){
    return this.http.post(`http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil`, {});
  }

}
