import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor, MatGridListModule],
})
export class HomeComponent {

  constructor(private router: Router) { }

  imoveis: Array<any> = [
    {
      id: 1,
      foto: 'https://i.imgur.com/xi3XzgF.jpg',
      titulo:
        'Os benefícios de ter um gerador de energia elétrica full no condomínio',
      texto:
        'Um condomínio de alto padrão deve ser pensado nos mínimos detalhes para levar conforto e sofisticação aos moradores. Entra aqui a preocupação do construtor em permitir que os condôminos possam realizar qualquer atividade a todo o momento. Para que isso ocorra, torna-se fundamental um equipamento: o gerador de energia elétrica full.',
    },
    {
      id: 2,
      foto: 'https://i.imgur.com/V7QnEsN.jpg',
      titulo:
        'Um condomínio com quadra de tênis permite que os treinos nunca parem',
      texto:
        'Os atletas que participam de torneios sabem: o treino é fundamental e deve ser constante. O US Open fechou a temporada dos principais torneios de tênis do ano, mas, em janeiro, já retornamos com o Australian Open, seguido do Roland Garros em maio e do Wimbledon em julho. Os tenistas precisarão continuar na melhor forma, treinando durante esses quatro meses de intervalo.',
    },
    {
      id: 3,
      foto: 'https://i.imgur.com/QD5MfSW.jpg',
      titulo:
        'Por que morar em Alto de Pinheiros? Os benefícios nunca param',
      texto:
        'O Alto de Pinheiros é um dos bairros nobres de São Paulo e que mais encanta seus visitantes. Os que passeiam pela região sonham em morar por lá por diversas razões. Uma das principais é para poder viver perto do trabalho, já que o bairro é residencial, mas está ao lado de um importante centro econômico da capital.Atraindo olhares sonhadores pelos mais diversos motivos.',
    },
  ];
}
