import { Injectable } from '@angular/core';
import { Planeta } from './planeta';

@Injectable({
  providedIn: 'root',
})
export class TamanhoPlanetaService {
  public calcularTamanhoDoPlaneta(planeta: Planeta): string {
    return planeta.diametro >= 12742 ? 'Grande' : 'Pequeno';
  }
}
