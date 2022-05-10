import { Component, DEFAULT_CURRENCY_CODE, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public nome: string = 'Terra';
  public temperatura: number = 16;
  public diametro: number = 12.742;
  public dia: number = 24;
  public ano: number = 365;
  public curiosidade: string =
    'Daqui a 140 milhões de anos, um dia durará 25 horas.';

  variavel1: number;
  variavel2: string;
  variavel3: boolean;
  variavel4: Date = new Date();

  ngOnInit() {}
}
