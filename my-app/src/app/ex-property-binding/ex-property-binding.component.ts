import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-property-binding',
  imports: [],
  templateUrl: './ex-property-binding.component.html',
  styleUrl: './ex-property-binding.component.scss'
})
export class ExPropertyBindingComponent implements OnInit {
  estaDesabilitado: boolean = false;
  imagemAtual: string = 'assets/images/minion.jpg';

  ngOnInit(): void {
      setInterval(() => {
        this.estaDesabilitado = !this.estaDesabilitado;
        this.imagemAtual = this.imagemAtual.includes('minion2')
          ? 'assets/images/minion.jpg'
          : 'assets/images/minion2.gif';
      }, 5000);
  }
}
