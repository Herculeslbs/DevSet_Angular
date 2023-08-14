import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    NgFor,
    NgIf,
    CommonModule,
  ],
})
export class ImoveisComponent {
  constructor(private router: Router) {}

  verDetalhes(imovelId: string) {
    this.router.navigate(['/detalhes', imovelId]);
  }

  toogleFavorito(index: number): void {
    this.imoveis[index].favorito = !this.imoveis[index].favorito;
  }

  imoveis: Array<any> = [
    {
      id: 1,
      foto: 'https://i.ibb.co/G7q5BGK/img1.webp',
      descricao: 'EXPAND PINHEIROS',
      favorito: true,
    },
    {
      id: 2,
      foto: 'https://i.ibb.co/ykSsJFW/img2.webp',
      descricao: 'SAN PAOLO',
      favorito: true,
    },
    {
      id: 3,
      foto: 'https://i.ibb.co/nbdM3h2/img3.jpg',
      descricao: 'SAPHIR MORGADO',
      favorito: false,
    },
    {
      id: 4,
      foto: 'https://i.ibb.co/kgWR495/img4.png',
      descricao: 'SOLO MADRID',
      favorito: false,
    },
    {
      id: 5,
      foto: 'https://i.ibb.co/VpkwgbM/img5.webp',
      descricao: 'CASA MARIANA',
      favorito: false,
    },
    {
      id: 6,
      foto: 'https://i.ibb.co/3BYQbYS/img6.jpg',
      descricao: 'HUMBERTO PRIMO',
      favorito: false,
    },
    {
      id: 7,
      foto: 'https://i.ibb.co/Bsk8vnV/img7.jpg',
      descricao: 'PLATINUM TOWER',
      favorito: false,
    },
    {
      id: 8,
      foto: 'https://i.ibb.co/ZXy2wPL/img8.jpg',
      descricao: 'PARK AVENUE',
      favorito: true,
    },
  ];
}
