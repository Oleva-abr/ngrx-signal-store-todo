import { Component, effect, inject, viewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { TodosFilter, TodosStore } from '../store/todos.store';
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

  filter = viewChild.required(MatButtonToggleGroup);

  constructor() {
    effect(() => {
      const filter = this.filter();
      filter.value = this.store.filter();
    })
  }

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

  onFilterTodos(event: MatButtonToggleChange) {
    const filter = event.value as TodosFilter;
    this.store.updateFilter(filter);
  }

}
