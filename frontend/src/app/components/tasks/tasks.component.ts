import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksServiceService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks!: Task[]; //? makes the variable nullable

  constructor(private service:TasksServiceService) { 
    service.get_tasks().subscribe((result)=>{
      this.tasks = result;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
