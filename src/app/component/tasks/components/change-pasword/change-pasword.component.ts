import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChangePasswordModel, PasswordService } from '../../../../PasswordService ';


@Component({
  selector: 'app-change-pasword',
  standalone: true,
  imports: [RouterLink,FormsModule, MatSnackBarModule],
  templateUrl: './change-pasword.component.html',
  styleUrl: './change-pasword.component.css'
})
export class ChangePaswordComponent  implements OnInit  {
  model: ChangePasswordModel = {
    activateCode: 0,
    password: '',
    confirmPassword: ''
  };

  // Inject the PasswordService
  constructor(private passwordService: PasswordService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Function to handle form submission
  onSubmit(): void {
    // Call the updatePassword function from PasswordService
    this.passwordService.updatePassword(this.model).subscribe(
      response => {
        // Handle the response from the API
        console.log(response); // You can handle success or error messages here
      },
      error => {
        console.error('Error:', error); // Log any errors
      }
    );
  }

}
