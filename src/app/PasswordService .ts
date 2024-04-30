import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  // Define the API endpoint URL
    apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Function to call the API to update the password
  updatePassword(model: ChangePasswordModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/AuthController/UpdateMaailPassword`, model);
  }
}


export class ChangePasswordModel{
   public activateCode : Number | undefined;
   public password: string | undefined;
   public confirmPassword: string | undefined;
}
