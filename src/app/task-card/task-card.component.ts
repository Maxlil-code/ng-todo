import { Component, Input } from '@angular/core';
import { TodoService } from '../services/todo/todo.service';
import { Task } from './task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task: Task | null = null;

  constructor(private todoService: TodoService) {}
}
