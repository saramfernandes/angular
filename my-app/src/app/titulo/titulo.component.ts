import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})
export class TituloComponent implements OnInit{

  public titulo =  "Boas Vindas";
  ngOnInit(): void {
      const hora = new Date().getHours();
      if (hora < 12) {
        this.titulo = "Bom dia flor do dia!";
      }else if (hora > 18) {
        this.titulo = "Boa noite. Descanse!";
      }else {
        this.titulo = "Boa tarde. Cafée!";
      }
  }
}
