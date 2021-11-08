import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../parent.component';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss'],
})
export class InProgressComponent implements OnInit {
  @Input() task!: Task;
  @Output() moveToTodo = new EventEmitter<Task>();
  @Output() moveTodone = new EventEmitter<Task>();
  constructor() {}

  ngOnInit(): void {}
  todo() {
    this.moveToTodo.emit(this.task);
  }

  done() {
    this.moveTodone.emit(this.task);
  }
}
