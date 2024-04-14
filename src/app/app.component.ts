import { TodosListComponent } from './todos-list/todos-list.component';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosStore } from './store/todos.store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosListComponent, MatProgressSpinnerModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: any = "Ngrx-app"

  store = inject(TodosStore)

  ngOnInit(): void {
    this.loadTodos().then(() => console.log("Todos Loaded!"))
  }

  async loadTodos() {
    await this.store.loadAll()
  }
}
