import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdevsetComponent } from './adevset/adevset.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adevset', component: AdevsetComponent },
  { path: 'imoveis', component: ImoveisComponent },
  { path: 'detalhes/:id', component: DetalhesComponent},
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
