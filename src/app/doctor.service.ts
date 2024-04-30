// doctor.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  deleteDoctor(id: any) {
    throw new Error('Method not implemented.');
  }
    apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  

  getAllDoctors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/AllDoctorWithCategoryAdmin');
  }
 
  

}
