import { Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { ExImcComponent } from './ex-imc/ex-imc.component';
import { ExPropertyBindingComponent } from './ex-property-binding/ex-property-binding.component';
import { ExTwoWayBindingComponent } from './ex-two-way-binding/ex-two-way-binding.component';
import { ExPipesComponent } from './ex-pipes/ex-pipes.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CpPaiComponent } from './modulo-teste/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiComponent2 } from './modulo-teste-2/cp-pai/cp-pai.component';

export const routes: Routes = [
    {
        path: 'contador',
        component: ContadorComponent
    },
    {
        path: 'imc',
        component: ExImcComponent
    },
    {
        path: 'property',
        component: ExPropertyBindingComponent
    },
    {
        path: 'two-way',
        component: ExTwoWayBindingComponent
    },
    {
        path: 'pipes',
        component: ExPipesComponent
    },
    {
        path: 'switch',
        component: DiretivaNgSwitchComponent
    },
    {
        path: 'style',
        component: DiretivaNgStyleComponent
    },
    {
        path: 'model',
        component: DiretivaNgModelComponent
    },
    {
        path: 'if',
        component: DiretivaNgIfComponent
    },
    {
        path: 'for',
        component: DiretivaNgForComponent
    },
    {
        path: 'class',
        component: DiretivaNgClassComponent
    },
    {
        path: 'galeria',
        component: GaleriaComponent
    },
    {
        path: 'pai-filho',
        component: CpPaiComponent
    },
    {
        path: 'filho-pai',
        component: CpPaiComponent2
    }
];
