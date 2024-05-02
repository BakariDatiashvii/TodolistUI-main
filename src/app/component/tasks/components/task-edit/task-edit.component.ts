import { Component, Input, Output } from '@angular/core';
import { TaskEditModel } from '../../models/task-edit.model';

import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [MatInputModule,FormsModule,MatSelectModule,MatFormFieldModule,MatButtonModule,RouterLink, ReactiveFormsModule,FormsModule, CommonModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatInputModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  constructor(private router: Router) { }

  navigateToDoctorRegister() {
    this.router.navigate(['doctor-register']);
  }

  navigateToGetCategories() {
    this.router.navigate(['get-categoryes']);
  }

  navigateToCalendar() {
    this.router.navigate(['calendar']);
  }
}
