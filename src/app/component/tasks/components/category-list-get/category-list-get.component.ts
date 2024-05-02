import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-category-list-get',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './category-list-get.component.html',
  styleUrl: './category-list-get.component.css'
})
export class CategoryListGetComponent implements OnInit{
  apiUrl: string = environment.apiUrl;
  categories: any[] = []; // Define Category model if needed
  router: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get<any[]>( this.apiUrl + '/CategoryController/getallcategory') // Replace 'api/category' with your API endpoint
      .subscribe(categories => this.categories = categories);
  }

  getCategoryDoctors(categoryId: string): void {
    this.http.get<any[]>(this.apiUrl + `/CategoryController/getallcategoryWithDoctor/${categoryId}`)
      .subscribe(doctors => {
        // Handle response data here
        console.log(doctors);
      });
  }

  navigateToCategoryDoctors(categoryId: string): void {
    this.router.navigate(['/category-doctors', categoryId]); // Update route path as per your routing setup
  } 
}
