import { Component, OnInit } from '@angular/core';

export interface Task {
  name: string;
  difficulty: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  taskName: string = '';
  difficulty: string = '';

  toDos: Task[] = [];
  inProgress: Task[] = [];
  Done: Task[] = [];

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if (this.taskName !== '' && this.difficulty !== '') {
      this.toDos.push({
        name: this.taskName,
        difficulty: this.difficulty,
      });
    }
  }

  onDelete(task: Task) {
    this.toDos = this.toDos.filter((t) => t !== task);
    console.log(task);
  }
  moveToInProgress(task: Task) {
    this.onDelete(task);
    this.inProgress = [...this.inProgress, task];
  }
  moveToTodos(task: Task) {
    this.inProgress = this.inProgress.filter((t) => t !== task);
    this.toDos = [...this.toDos, task];
  }

  moveToDone(task: Task) {
    this.inProgress = this.inProgress.filter((t) => t !== task);
    this.Done = [...this.Done, task];
  }

  moveToProgress(task: Task) {
    this.Done = this.Done.filter((t) => t !== task);
    this.inProgress = [...this.inProgress, task];
  }
}
