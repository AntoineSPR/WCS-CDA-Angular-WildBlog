import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {
  nb1: number = 0;
  nb2: number = 0;
  result: number = 0;
  operator: string = '';

  calculate() {
    switch(this.operator){
      case '+':
        this.result = this.nb1 + this.nb2;
    break;
    case '-':
      this.result = this.nb1 - this.nb2;
      break;
    case 'x':
      this.result = this.nb1 * this.nb2;
      break;
    case '÷':
      this.result = this.nb2 !== 0 ? this.nb1 / this.nb2 : Infinity;
      break;
    }
  }

  randomNumber(): number {
    return Math.floor(Math.random() * 100);
  }
  getNumber1(): number {
    this.nb1 = this.randomNumber();
    console.log(this.nb1);
    return this.nb1;
  }
  getNumber2(): number {
    this.nb2 = this.randomNumber();
    return this.nb2;
  }
  setOperator(operator: string) {
    this.operator = operator;
  }
}
