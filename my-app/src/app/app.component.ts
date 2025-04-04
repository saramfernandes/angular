import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';
import { ExPropertyBindingComponent } from './ex-property-binding/ex-property-binding.component';
import { ExTwoWayBindingComponent } from './ex-two-way-binding/ex-two-way-binding.component';
import { ExImcComponent } from './ex-imc/ex-imc.component';
import { ContadorComponent } from './contador/contador.component';
import { MenuComponent } from './menu/menu.component';
import { ExPipesComponent } from './ex-pipes/ex-pipes.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    TituloComponent, 
    ExPropertyBindingComponent, 
    ExTwoWayBindingComponent, 
    ExImcComponent, 
    ContadorComponent,
    MenuComponent,
    ExPipesComponent,
    DiretivaNgSwitchComponent,
    DiretivaNgStyleComponent,
    DiretivaNgModelComponent,
    DiretivaNgIfComponent,
    DiretivaNgForComponent,
    DiretivaNgClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
