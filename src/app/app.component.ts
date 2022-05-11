import { Component } from '@angular/core';
import { Planeta } from './model/planeta';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  planetaSelecionado: Planeta;

  planetas: Planeta[] = [
    {
      nome: 'Terra',
      temperatura: 16,
      diametro: 12.742,
      dia: 24,
      ano: 365,
      curiosidade: 'Daqui a 140 milhões de anos, um dia durará 25 horas.',
      imagem:
        'https://drive.google.com/uc?id=1C7HmsPUqT8TkVuZ9OJlQrtG1L_Ho0LH3',
    },
    {
      nome: 'Marte',
      temperatura: 16,
      diametro: 12.742,
      dia: 24,
      ano: 365,
      curiosidade: 'Daqui a 140 milhões de anos, um dia durará 25 horas.',
      imagem:
        'https://drive.google.com/uc?id=1sXfwBgOihDUyN3DJjYBFsIqEpYjRLH5O',
    },
  ];

  ngOnInit() {}

  public clicouNoPlaneta(planeta: Planeta) {
    this.planetaSelecionado = planeta;
  }
}
