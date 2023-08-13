import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common'


@Component({
  selector: 'app-adevset',
  templateUrl: './adevset.component.html',
  styleUrls: ['./adevset.component.scss'],
  standalone: true,
  imports: [MatCardModule, NgFor,]
})
export class AdevsetComponent {
  cards: Array<any> = [
    {
      id: 1,
      foto: 'https://i.ibb.co/pwGW0Fm/icone-numeros1-png.webp',
      titulo: '+ de',
      numero: '35',
      texto: 'empreendimentos entregues',
    },
    {
      id: 2,
      foto: 'https://i.ibb.co/6Pnmh9D/icone-numeros2-png.webp',
      titulo: '+ de',
      numero: '2.180',
      texto: 'clientes satisfeitos',
    },
    {
      id: 3,
      foto: 'https://i.ibb.co/rHKhMsR/icone-numeros3-png.webp',
      titulo: '+ de',
      numero: '256.820',
      texto: 'm² construídos',
    },
    {
      id: 3,
      foto: 'https://i.ibb.co/kXkLkr2/estrela-png.webp',
      titulo: 'Avaliação:',
      numero: '9,5',
      texto: 'na entrega',
    },
  ];
}
