import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor(private http:HttpClient) { }

  get_tasks():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:3000");
  }
}
