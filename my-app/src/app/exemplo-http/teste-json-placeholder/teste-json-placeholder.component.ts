import { Component } from '@angular/core';
import { JsonPlaceholderService, User } from '../json-placeholder.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teste-json-placeholder',
  imports: [CommonModule],
  templateUrl: './teste-json-placeholder.component.html',
  styleUrl: './teste-json-placeholder.component.scss'
})
export class TesteJsonPlaceholderComponent {
  constructor(private service: JsonPlaceholderService){}

  users: User[] = [];
  public buscaUsuarios(): void {
  this.service.getUsers().subscribe({
    next: (data: User[]) => {
      this.users = data;
    },
    error: (error) => {
      console.error('Erro ao obter usuários:', error);
    },
    complete: () => {
      console.log('Requisição completa');
    }
  });
}
}
