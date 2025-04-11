import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  refri: boolean = false;
  hamburguer: boolean = false;
  batata: boolean = false;

  public clickRefri() {
    this.refri= !this.refri;
  }
  public clickHamburguer() {
    this.hamburguer = !this.hamburguer;
  }
  public clickBatata() {
    this.batata = !this.batata;
  }
}

