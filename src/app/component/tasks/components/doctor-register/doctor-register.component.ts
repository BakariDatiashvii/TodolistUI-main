import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-doctor-register',
  standalone: true,
  imports: [RouterLink,FormsModule,NgFor],
  templateUrl: './doctor-register.component.html',
  styleUrl: './doctor-register.component.css'
})
export class DoctorRegisterComponent {
  model: any = {};
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  onPhotoChange(event: any) {
    this.model.photo = event.target.files[0];
  }

  onCVChange(event: any) {
    this.model.cv = event.target.files[0];
  }



  addCategory() {
    // Ensure category is not empty and does not contain spaces
    if (this.model.categoryname.trim() !== '' && !/\s/.test(this.model.categoryname)) {
      // Add category to the list
      this.model.categories.push(this.model.categoryname.trim());
      // Clear category input
      this.model.categoryname = '';
    }
  }

  // Method to remove category from the list
  removeCategory(index: number) {
    this.model.categories.splice(index, 1);
  }
  
  onSubmit() {
    const formData = new FormData();
    formData.append('Email', this.model.email);
    formData.append('Password', this.model.password);
    formData.append('FirstName', this.model.firstName);
    formData.append('LastName', this.model.lastName);
    formData.append('PrivateNumber', this.model.privateNumber);
    formData.append('photo', this.model.photo);
    formData.append('cv', this.model.cv);
    formData.append('categoryname', JSON.stringify(this.model.categoryname));

    this.http.post<any>(this.apiUrl + '/AuthController/Doctor-registration', formData)
      .subscribe(
        response => {
          // Handle success
          console.log('Doctor registration successful:', response);
          // Perform any action after successful registration
        },
        error => {
          // Handle error
          console.error('Doctor registration failed:', error);
          // Display error message to user
          this.snackBar.open('Doctor registration failed. Please try again.', 'Close', {
            duration: 5000,
            verticalPosition: 'top'
          });
        }
      );
  }

}
