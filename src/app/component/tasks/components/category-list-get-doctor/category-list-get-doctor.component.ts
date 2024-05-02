import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list-get-doctor',
  standalone: true,
  imports: [MatCardModule,MatTableModule,RouterLink],
  templateUrl: './category-list-get-doctor.component.html',
  styleUrl: './category-list-get-doctor.component.css'
})
export class CategoryListGetDoctorComponent {
  apiUrl: string = environment.apiUrl;
  categoryDoctorList: any[] = [];
  displayedColumns: string[] = ['category', 'doctor'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const id = 'example_id';
    this.fetchCategoryDoctors(id);
  }

  fetchCategoryDoctors(id: string): void {
    this.http.get<any[]>(`${this.apiUrl}/CategoryController/getallcategoryWithDoctor/${id}`)
    .subscribe(categoryDoctorList => this.categoryDoctorList = categoryDoctorList);
  }
}
