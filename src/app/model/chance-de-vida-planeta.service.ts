import { Injectable } from '@angular/core';
import { Planeta } from './planeta';

@Injectable({
  providedIn: 'root',
})
export class ChanceDeVidaPlanetaService {
  public temChance(planeta: Planeta): string {
    if (planeta.temperatura >= -60 && planeta.temperatura <= 20) return 'Alta';

    return 'Baixa';
  }
}
