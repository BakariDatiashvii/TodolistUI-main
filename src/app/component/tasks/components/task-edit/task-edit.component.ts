import { Component, Input, Output } from '@angular/core';
import { TaskEditModel } from '../../models/task-edit.model';
import { HttpService } from '../../../../http.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  @Input() isEditMode: boolean = false;
  @Input() taskModel: TaskEditModel = TaskEditModel.empty();

  @Output() taskCreated: EventEmitter<TaskEditModel>;
  @Output() taskUpdated: EventEmitter<TaskEditModel>;

  status: string = "";

  statuses: any[] = [{id:0, value:"მიმდინარე"}, {id:1, value:"დასრულებული"}]

  constructor(
  ){
    this.taskCreated = new EventEmitter<TaskEditModel>(); 
    this.taskUpdated = new EventEmitter<TaskEditModel>(); 
  }

  ngOnInit() {
  }

  save(){
    
    if(this.isEditMode){
      this.taskUpdated.emit(this.taskModel);
      return;
    }
    this.taskCreated.emit(this.taskModel);
  }

}
