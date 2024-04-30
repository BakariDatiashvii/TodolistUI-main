import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { TaskGridComponent } from '../../components/task-grid/task-grid.component';
import { TaskEditComponent } from '../../components/task-edit/task-edit.component';
import { TaskEditModel } from '../../models/task-edit.model';
import { HttpService } from '../../../../http.service';
import { Itodolist } from '../../models/todolist';


@Component({
    selector: 'app-task-shell',
    standalone: true,
    templateUrl: './task-shell.component.html',
    styleUrl: './task-shell.component.css',
    imports: [TaskGridComponent, TaskEditComponent, MatInputModule, FormsModule, MatSelectModule, MatFormFieldModule, MatButtonModule, RouterLink, ReactiveFormsModule, FormsModule, CommonModule, MatTableModule, MatInputModule,
        MatInputModule, MatSelectModule, MatFormFieldModule]
})
export class TaskShellComponent  {

  isEditMode: boolean = false;
  taskModel: TaskEditModel = TaskEditModel.empty();
  complateList: Itodolist[]  = [];
  complateListend: Itodolist[] = [];
  isGridEmpty: boolean = false;

  constructor(
    private readonly _httpService: HttpService,
  ){}

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.isEditMode = false;
    this.taskModel = TaskEditModel.empty();
    this.getAllTask();
  }

  getTask(id: string): void {
    this._httpService.gettask(id).subscribe(result =>{
      this.taskModel = new TaskEditModel(
        result.id,
        result.name,
        result.status
      );
      this.isEditMode = true;
    })
  }


  onUpdateTask(model: TaskEditModel){
    this._httpService.updateTask(model).subscribe(x=> this.initForm())
  }

  onCreateTask(model: TaskEditModel){
    this._httpService.CreateTask(model).subscribe(x=> this.initForm());
  }

  onDeleteTask(id: string){
    this._httpService.DeleteTask(id).subscribe(x => this.initForm());
  }

  getAllTask(){
    this._httpService.getalltask().subscribe(result => {
      if(!result.some(x=>x)){
        this.isGridEmpty = true;
        return;
      }

      this.complateList = result.filter(item => item.status === 0);
      this.complateListend = result.filter(item => item.status === 1);
    });
  }
}
