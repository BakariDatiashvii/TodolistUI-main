import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SearchNumberComponent } from "./component/tasks/components/search-number/search-number.component";
import { HeaderSearchComponent } from "./component/tasks/components/header-search/header-search.component";
import { FooterComponent } from "./component/tasks/components/footer/footer.component";
import { CategoryListGetComponent } from "./component/tasks/components/category-list-get/category-list-get.component";
import { CategoryListGetDoctorComponent } from "./component/tasks/components/category-list-get-doctor/category-list-get-doctor.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatToolbarModule, MatIconModule, RouterLink, SearchNumberComponent, HeaderSearchComponent, FooterComponent, CategoryListGetComponent, CategoryListGetDoctorComponent]
})
export class AppComponent {
  title = 'listtodo';
}
