import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { provideHttpClient, withFetch } from '@angular/common/http';


@Component({
  selector: 'app-search-number',
  standalone: true,
  imports: [RouterLink,MatIconModule,MatInputModule],
  templateUrl: './search-number.component.html',
  styleUrl: './search-number.component.css'
})
export class SearchNumberComponent {

}
