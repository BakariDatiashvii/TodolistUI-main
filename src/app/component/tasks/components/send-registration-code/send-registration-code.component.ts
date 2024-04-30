import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-send-registration-code',
  standalone: true,
  imports: [RouterLink,FormsModule,MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './send-registration-code.component.html',
  styleUrl: './send-registration-code.component.css'
})
export class SendRegistrationCodeComponent {
  model: any = {};
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.http.post<any>(this.apiUrl + '/AuthController/seendCode', this.model)
      .subscribe(
        response => {
          // Handle success
          console.log('Validation code sent successfully:', response);
          // Display success message to user
          this.snackBar.open(response.data, 'Close', {
            duration: 5000,
            verticalPosition: 'top'
          });
        },
        error => {
          // Handle error
          console.error('Failed to send validation code:', error);
          // Display error message to user
          this.snackBar.open('Failed to send validation code. Please try again later.', 'Close', {
            duration: 5000,
            verticalPosition: 'top'
          });
        }
      );
  }
}