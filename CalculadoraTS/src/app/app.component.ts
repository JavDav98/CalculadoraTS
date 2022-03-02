import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora con Angular';
  operandoA = 0;
  operandoB = 0;
  resultado = 0;

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
}
