import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PrimeiraPipe } from '../primeira.pipe';

@Component({
  selector: 'app-ex-pipes',
  imports: [CommonModule, FormsModule, PrimeiraPipe],
  templateUrl: './ex-pipes.component.html',
  styleUrl: './ex-pipes.component.scss'
})
export class ExPipesComponent {
  public data: Date = new Date();
  public nome: string = "Fulano de Tal";
  public valor: number = 12345.67;
  public palavra: string = "";
}
