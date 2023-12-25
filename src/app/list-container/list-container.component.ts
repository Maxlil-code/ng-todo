import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task } from '../task-card/task.interface';

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.scss',
})
export class ListContainerComponent {
  @Input() tasks: Task[] = [];
}
