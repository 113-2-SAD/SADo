import { CreateTodoInput, Todo, UpdateTodoInput } from '@shared/todo';
import { api } from '../axios';

export const todoApi = {
  async getAllTodos(): Promise<Todo[]> {
    const response = await api.get<Todo[]>('/api/todos');
    return response.data;
  },

  async createTodo(todo: CreateTodoInput): Promise<Todo> {
    const response = await api.post<Todo>('/api/todos', todo);
    return response.data;
  },

  async updateTodo(todo: UpdateTodoInput): Promise<Todo> {
    const response = await api.put<Todo>(`/api/todos/${todo.id}`, todo);
    return response.data;
  },

  async deleteTodo(id: string): Promise<void> {
    await api.delete(`/api/todos/${id}`);
  },
}; 