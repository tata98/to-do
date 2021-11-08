import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../parent.component';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<Task>();
  @Output() moveToInProgress = new EventEmitter<Task>();
  constructor() {}

  ngOnInit(): void {}
  onDelete() {
    this.delete.emit(this.task);
  }
  moveToProgress() {
    this.moveToInProgress.emit(this.task);
  }
}
