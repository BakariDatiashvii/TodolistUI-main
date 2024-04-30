import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-week-calendar',
  standalone: true,
  imports: [MatFormField,NgFor,RouterLink,BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule],
  templateUrl: './week-calendar.component.html',
  styleUrl: './week-calendar.component.css'
})
export class WeekCalendarComponent {
  startDate: Date;
  endDate: Date;

  constructor() {
    const currentDate = new Date();
    this.startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); // Start of current month
    this.endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 7); // End of current month
  }

  nextWeek() {
    this.startDate.setDate(this.startDate.getDate() + 7);
    this.endDate.setDate(this.endDate.getDate() + 7);
  }

  saveText(text: string) {
    // Implement save logic here
    console.log(text);
  }

  formatDate(date: Date): string {
    return `${date.getDate()} ${this.getMonthName(date.getMonth())} ${date.getFullYear()}`;
  }

  private getMonthName(month: number): string {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[month];
  }

  getDateRange(start: Date, end: Date): Date[] {
    const dateRange = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      dateRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateRange;
  }
}
