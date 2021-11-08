import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../parent.component';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  @Input() task!: Task;
  @Output() moveToProgress = new EventEmitter<Task>();
  constructor() {}

  ngOnInit(): void {}
  movetoProgress() {
    this.moveToProgress.emit(this.task);
  }
}
