import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


import { RegistrationPerson } from './component/tasks/models/registration-person';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl="https://localhost:7109"
  http=inject(HttpClient);
  constructor() { }
  

 

 

  register(model: any | undefined){
    return this.http.post(this.apiUrl + '/AuthController/Person-registration', model)
  }


  CreateRegistration(model: RegistrationPerson | undefined){
    return this.http.post(this.apiUrl + '/AuthController/Person-registration', model)
  }
  
}
