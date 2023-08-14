import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  imovelId!: string;

  titulo: string = 'DevSet';
  foto: string = 'https://i.imgur.com/pydGh2b.png';

  description: string = 'Com mais de 10 anos de experiência no mercado, possuímos uma equipe altamente capacitada, que trabalha com seriedade e paixão pelo que faz. Os resultados são sentidos no cuidado especial em cada fase dos projetos, desde a concepção até a entrega e, consequentemente, na satisfação completa dos nossos clientes.';
  description2: string = 'A nossa filosofia é criar imóveis funcionais e sofisticados, que reúnam elegância, conforto e praticidade dentro de um projeto que comporte a vida moderna. Por isso, cada item de um empreendimento de alto padrão com a assinatura DevSet incorpora com minúcia um olhar atento aos detalhes, boa localização e fomento ao bem-estar.';
  warnings: string = 'Nota: A disponibilidade e o preço estão sujeitos a alterações. Entre em contato conosco para mais informações e agendamento de visitas.';


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
    });
  }

}