import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ListContainerComponent } from './list-container/list-container.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { Task } from './interfaces/task.interface';
import { TodoService } from './services/todo/todo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ListContainerComponent,
    TaskInputComponent,
    HttpClientModule,
  ],
  providers: [TodoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'test-todo-app';

  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    initFlowbite();
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
