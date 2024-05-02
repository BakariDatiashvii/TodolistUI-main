import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-send-code-mail',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './send-code-mail.component.html',
  styleUrl: './send-code-mail.component.css'
})
export class SendCodeMailComponent {
  model: any = {};
  apiUrl: string = environment.apiUrl;
email: any;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.http.post<any>(this.apiUrl + '/AuthController/CHangePasswordSendCode', this.model)
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
