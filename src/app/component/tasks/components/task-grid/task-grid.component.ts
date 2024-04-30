import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from '../../../../http.service';
import { Itodolist } from '../../models/todolist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.css'
})
export class TaskGridComponent {
  @Input() ComplateList: Itodolist[] | undefined = [];
  @Input() ComplateListend: Itodolist[] | undefined = [];

  @Output() taskOpend: EventEmitter<string>;
  @Output() taskDeleted: EventEmitter<string>;
  @Input() isGridEmpty: boolean = false;

  filteredData: any[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'action'

  ];

  constructor(
    private readonly _router: Router,
    private readonly _httpService: HttpService
  ){
    this.taskOpend = new EventEmitter<string>();
    this.taskDeleted = new EventEmitter<string>(); 
  }


  ngOnInit() {
    
  }

  edit(id: string){
    this.taskOpend.emit(id);

  }

  delete(id: string){
    this.taskDeleted.emit(id);
  }
}
