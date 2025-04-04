import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex-imc',
  imports: [FormsModule],
  templateUrl: './ex-imc.component.html',
  styleUrl: './ex-imc.component.scss'
})
export class ExImcComponent {
  peso: string = '';
  altura: string = '';
  resultado: string = '';

  mostrarDados() {
    this.resultado = `peso: ${this.peso} | Email: ${this.altura}`
  }

  limparDados() {
    this.peso = '';
    this.altura = '';
    this.resultado = '';
  }

  calcularIMC() {

  }
}
