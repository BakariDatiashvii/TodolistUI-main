import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { DoctorService } from '../../../../doctor.service';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatHeaderCell } from '@angular/material/table';
import { MatCellDef } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-categoryes',
  standalone: true,
  imports: [RouterLink,NgFor,MatTableModule,FormsModule,MatHeaderCell,MatCellDef,MatIconModule,],
  templateUrl: './get-categoryes.component.html',
  styleUrl: './get-categoryes.component.css'
})
export class GetCategoryesComponent  implements OnInit{
  doctors: any[] = []; // Define doctors property as an array of any
  apiUrl: string = 'https://localhost:7109'; 
 
  constructor(private doctorService: DoctorService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getAllDoctors().subscribe((data: any[]) => {
      this.doctors = data;
      // Convert byte array to base64 for each doctor's photo
      this.doctors.forEach(doctor => {
        doctor.photo = 'data:image/jpeg;base64,' + doctor.photo;
      });
    });
  }


  editDoctor(doctor: any): void {
    // Implement edit functionality
  }

  deleteDoctor(id: string): void {
    this.http.post(this.apiUrl + '/deletee', { id: id }).subscribe(() => {
      // Handle successful deletion, maybe remove the deleted doctor from the list
      this.doctors = this.doctors.filter(d => d.id !== id);
    }, (error: any) => {
      // Handle error
      console.error('Delete failed:', error);
    });
  }
}
