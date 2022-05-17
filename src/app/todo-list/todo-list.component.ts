import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos = ['First task', 'Second task', 'Third task'];
  task = '';
  previousTask = '';
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.todos.push(this.task);
    this.task = '';
  }

  removeTask(value: string) {
    this.todos = this.todos.filter(item => item !== value);
  }

  editTask(value: string) {
    this.isEditing = true;
    this.previousTask = value;
    this.task = value;
  }

  updateTask() {
    this.isEditing = false;
    const index = this.todos.findIndex(item => item === this.previousTask);
    this.todos[index] = this.task;
    this.task = '';
  }

}
