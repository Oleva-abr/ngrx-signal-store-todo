import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { TodosStore } from '../store/todos.store';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatListModule, MatIconModule, CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {

  store = inject(TodosStore);


  async onAddTodo(value: string) {
    await this.store.addTodo(value)
  }


  async onDeleteTodo(id: string, event: MouseEvent) {

    event.stopPropagation();
    await this.store.deleteTodo(id)
  }


  async onTodoToggled(id: string, completed: boolean) {
    await this.store.updateTodo(id, completed);

  }



}
