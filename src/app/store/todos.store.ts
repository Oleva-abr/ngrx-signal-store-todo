
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"
import { Todo } from "../model/todo.model"
import { TodoService } from "../services/todos.service"
import { inject } from "@angular/core"


export type TodosFilter = "all" | "pending" | "completed"

type TodosState = {
  todos: Todo[],
  loading: boolean,
  filter: TodosFilter,
}


const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: "all"
}



export const TodosStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withMethods(
    (store, todosService = inject(TodoService)) => ({
      async loadAll() {
        patchState(store, { loading: true })

        const todos = await todosService.getTodos();
        patchState(store, { todos, loading: false })
      },
      async addTodo(title: string) {
        const todo = await todosService.addTodo({ title, completed: false });

        patchState(store, (state) => {
          return {

            todos: [...state.todos, todo]
          };
        });
      }
    })
  )
)

