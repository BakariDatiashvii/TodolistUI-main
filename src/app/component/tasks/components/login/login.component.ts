
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../auth.service'; 
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,
    RouterLink,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post<any>(this.apiUrl + '/AuthController/login', this.model)
      .subscribe(
        response => {
          // Handle success
          console.log('Login successful:', response);
          // Save token to local storage or session storage
          localStorage.setItem('token', response.data.token);
          // Redirect or perform any action after successful login
        },
        error => {
          // Handle error
          console.error('Login failed:', error);
          // Display error message to user
          this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
            duration: 5000,
            verticalPosition: 'top'
          });
        }
      );
  }
}
