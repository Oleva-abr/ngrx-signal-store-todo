import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { TodosStore } from '../store/todos.store';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatListModule, MatIconModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  store = inject(TodosStore);

  async onAddTodo(value: string) {
    await this.store.addTodo(value)
  }
}
