import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  imports: [FormsModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
  limite: number = 0;
  contador: number = 0;

  adicionar() {
    this.contador ++;
  }
  diminuir() {
    this.contador --;
  }
  
  
}

